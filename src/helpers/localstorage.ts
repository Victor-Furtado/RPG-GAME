export enum LocalStorageKeys {
  COLOR_SCHEME = 'color-scheme',
}

export function getLocalstorage<T>(key: LocalStorageKeys, defaultValue?: T): T {
  const ls = localStorage.getItem(key);
  if (ls) return JSON.parse(ls) as T;
  localStorage.setItem(key, JSON.stringify(defaultValue));
  return defaultValue as T;
}

export function setLocalstorage<T>(key: LocalStorageKeys, payload: T): void {
  return localStorage.setItem(key, JSON.stringify(payload));
}
