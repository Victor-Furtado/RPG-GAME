import create from 'zustand';

type State = {
  navBarOpened: boolean;
};

type Actions = {
  toggleNavBar: () => void;
};

export const useUIStore = create<State & Actions>((set) => ({
  navBarOpened: false,
  toggleNavBar: () => set((state) => ({ navBarOpened: !state.navBarOpened })),
}));
