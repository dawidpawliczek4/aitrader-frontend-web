import { ref, watchEffect, type Ref } from "vue";

type Parse<T> = (data: unknown) => T;

const storage: Storage = window.localStorage;

export function useStorage<T>(key: string, parse: Parse<T>): Ref<T | undefined>;
export function useStorage<T>(key: string, parse: Parse<T>, initial: T): Ref<T>;
export function useStorage<T>(key: string, parse: Parse<T>, initial?: T) {
  const stored = ref(getItem(key, parse, initial));
  watchEffect(() => {
    if (stored.value !== undefined) {
      storage.setItem(key, JSON.stringify(stored.value));
    } else {
      storage.removeItem(key);
    }
  });
  return stored;
}

function getItem<T>(key: string, parse: Parse<T>, initial?: T): T | undefined {
  const value = storage.getItem(key);
  if (value) {
    try {
      return parse(JSON.parse(value));
    } catch (e) {
      console.warn(`Error parsing stored value for key "${key}":`, e);
    }
  }
  return initial;
}
