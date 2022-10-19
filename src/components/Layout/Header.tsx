import { ActionIcon, Burger, Header, Title } from '@mantine/core';
import { RiPatreonFill } from 'react-icons/ri';
import { useUIStore } from '../../hooks';
import useStyles from './styles';

export function AppHeader() {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useUIStore((state) => [
    state.navBarOpened,
    state.toggleNavBar,
  ]);

  return (
    <Header className={classes.flex_space_between} height={60} p="md">
      <Burger
        opened={opened}
        onClick={toggleOpened}
        size="sm"
        sx={(theme) => ({ color: theme.colors.gray[6] })}
        mr="xl"
      />
      <Title>GAME</Title>
      <ActionIcon variant="filled">
        <RiPatreonFill size={18} />
      </ActionIcon>
    </Header>
  );
}
