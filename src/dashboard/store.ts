import { defineStore } from "pinia";
import type { ApiResponse } from "../helpers/api";
import api from "../helpers/api";
import { z } from "zod";
import { markRaw } from "vue";

async function safeApiCall<T>(
  apiCall: () => Promise<ApiResponse<T>>,
  schema: z.ZodSchema<T>
): Promise<T> {
  try {
    const apiResponse = await apiCall();
    console.log(apiResponse)
    
    if (!apiResponse.success) {
      throw new Error(apiResponse.message || "API call failed");
    }

    return schema.parse(apiResponse.data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(
        `Invalid data format: ${error.issues.map((i) => i.message).join(", ")}`
      );
    }
    throw error;
  }
}

const TradingDataSchema = z.object({
  symbol: z.string(),
  price: z.number(),
  volume: z.number(),
  timestamp: z.string(),
});

type TradingData = z.infer<typeof TradingDataSchema>;

class DashboardApi {
  async getDummyData(): Promise<TradingData> {
    return safeApiCall(
      () => api.get("/trading-data"),
      TradingDataSchema
    );
  }

  async getTradingHistory(): Promise<TradingData[]> {
    return safeApiCall(
      () => api.get("/trading-history"),
      z.array(TradingDataSchema)
    );
  }
}

const store = defineStore("dashboard", () => ({
  api: markRaw(new DashboardApi()),
}));

export function useDashboardStore(): DashboardApi {
  return store().api;
}
