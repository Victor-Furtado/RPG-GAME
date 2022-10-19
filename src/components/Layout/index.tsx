import { AppShell } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ReactNode } from 'react';
import { AppFooter } from './Footer';
import { AppHeader } from './Header';
import { AppLeftBar } from './LeftBar';
import { NotApp, NotFooter, NotHeader } from './NotFit';
import useStyles from './styles';

interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;
  const { classes } = useStyles();
  const matches = useMediaQuery('(min-width: 900px)');

  if (matches)
    return (
      <AppShell
        classNames={{
          main: classes.Appshell_main,
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        footer={<AppFooter />}
        header={<AppHeader />}
        navbar={<AppLeftBar />}
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
