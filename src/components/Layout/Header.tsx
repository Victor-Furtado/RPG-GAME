import { ActionIcon, Burger, Header, Title } from '@mantine/core';
import { RiPatreonFill } from 'react-icons/ri';
import useStyles from './styles';

interface AppHeaderProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AppHeader(props: AppHeaderProps) {
  const { opened, setOpened } = props;
  const { classes } = useStyles();

  return (
    <Header className={classes.flex_spaced} height={60} p="md">
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
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
