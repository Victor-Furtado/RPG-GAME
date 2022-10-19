import { ColorScheme } from '@mantine/core';
import create from 'zustand';
import { getLocalstorage, LocalStorageKeys, setLocalstorage } from '../helpers';

type State = {
  navBarOpened: boolean;
  colorScheme: ColorScheme;
};

type Actions = {
  toggleNavBar: () => void;
  toggleColorScheme: (value?: ColorScheme) => void;
};

export const useUIStore = create<State & Actions>((set) => ({
  navBarOpened: false,
  colorScheme: getLocalstorage(LocalStorageKeys.COLOR_SCHEME, 'light'),
  toggleNavBar: () => set((state) => ({ navBarOpened: !state.navBarOpened })),
  toggleColorScheme: (value?: ColorScheme) =>
    set((state) => {
      const nextColorScheme =
        value || (state.colorScheme === 'dark' ? 'light' : 'dark');
      setLocalstorage(LocalStorageKeys.COLOR_SCHEME, nextColorScheme);
      return { colorScheme: nextColorScheme };
    }),
}));
