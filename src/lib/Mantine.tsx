import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { ReactNode, useState } from 'react';

interface MantineContextProps {
  children: ReactNode;
}

function MantineContexts(props: MantineContextProps) {
  const { children } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    (localStorage.getItem('color-scheme') as ColorScheme) || 'light'
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    localStorage.setItem('color-scheme', nextColorScheme);
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider limit={5} position="top-right">
          <ModalsProvider>{children}</ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MantineContexts;
