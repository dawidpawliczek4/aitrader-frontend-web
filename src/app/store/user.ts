import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useStorage } from "../../helpers/storage";
import { z } from "zod";
import { computed } from "vue";
import { AuthenticatedUserData, AuthResponse } from "../models/auth";

export const useAuthStore = defineStore("user", () => {
  const router = useRouter();

  const accessToken = useStorage("accessToken", z.string().parse);
  const refreshToken = useStorage("refreshToken", z.string().parse);
  const expiresIn = useStorage("expiresIn", z.number().parse);
  const user = useStorage("user", (data: unknown) => {
    if (!data) return null;
    return AuthenticatedUserData.parse(data);
  });

  const isAuthenticated = computed(() => !!accessToken.value);
  const fullName = computed(() =>
    user.value ? `${user.value.firstName} ${user.value.lastName}` : null
  );

  const login = async (authResponse: AuthResponse) => {
    accessToken.value = authResponse.accessToken;
    refreshToken.value = authResponse.refreshToken;
    expiresIn.value = authResponse.expiresIn;
    user.value = authResponse.user;

    await router.push("/dashboard");
  };

  const logout = async () => {
    accessToken.value = undefined;
    refreshToken.value = undefined;
    expiresIn.value = undefined;
    user.value = undefined;

    await router.push("/");
  };

  const refresh = async () => {
    if (!refreshToken.value) {
      throw new Error("No refresh token available");
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/refresh`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken: refreshToken.value }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }

    const data = await response.json();
    const authResponse = AuthResponse.parse(data);

    accessToken.value = authResponse.accessToken;
    refreshToken.value = authResponse.refreshToken;
    expiresIn.value = authResponse.expiresIn;
    user.value = authResponse.user;

    return authResponse;
  };

  return {
    accessToken,
    refreshToken,
    expiresIn,
    user,
    isAuthenticated,
    fullName,
    login,
    logout,
    refresh,
  };
});
