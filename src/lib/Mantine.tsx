import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { ReactNode } from 'react';
import { useUIStore } from '../hooks';

interface MantineContextProps {
  children: ReactNode;
}

function MantineContexts(props: MantineContextProps) {
  const { children } = props;
  const colorScheme = useUIStore((state) => state.colorScheme);

  return (
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <NotificationsProvider limit={5} position="top-right">
        <ModalsProvider>{children}</ModalsProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MantineContexts;
