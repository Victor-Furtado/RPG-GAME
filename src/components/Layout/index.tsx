import { AppShell } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ReactNode, useState } from 'react';
import { AppHeader } from './Header';
import { NotApp, NotFooter, NotHeader } from './NotFit';
import useStyles from './styles';

interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;

  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const matches = useMediaQuery('(min-width: 900px)');

  if (matches)
    return (
      <AppShell
        classNames={{
          main: classes.Appshell_main,
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        footer={<NotFooter />}
        header={<AppHeader opened={opened} setOpened={setOpened} />}
      >
        {children}
      </AppShell>
    );
  return (
    <AppShell
      classNames={{
        main: classes.Appshell_main,
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      footer={<NotFooter />}
      header={<NotHeader />}
    >
      <NotApp />
    </AppShell>
  );
}

export default Layout;
