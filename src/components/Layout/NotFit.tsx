import {
  ActionIcon,
  Button,
  Footer,
  Header,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { RiMoonFill, RiPatreonFill, RiSunLine } from 'react-icons/ri';
import { useUIStore } from '../../hooks';
import useStyles from './styles';

export function NotHeader() {
  const { classes } = useStyles();
  const [colorScheme, toggleColorScheme] = useUIStore((state) => [
    state.colorScheme,
    state.toggleColorScheme,
  ]);

  return (
    <Header className={classes.flex_space_between} height={60} p="md">
      <Title style={{ textAlign: 'center' }}>GAME</Title>
      <ActionIcon
        variant="filled"
        onClick={() => toggleColorScheme()}
        size="lg"
      >
        {colorScheme !== 'dark' ? (
          <RiMoonFill size={18} />
        ) : (
          <RiSunLine size={18} />
        )}
      </ActionIcon>
    </Header>
  );
}

export function NotFooter() {
  const { classes } = useStyles();

  return (
    <Footer className={classes.flex_space_between} height={60} p="md">
      <Button fullWidth leftIcon={<RiPatreonFill size={18} />}>
        Check our Patreon
      </Button>
    </Footer>
  );
}

export function NotApp() {
  const { classes } = useStyles();

  return (
    <div style={{ height: '100%' }} className={classes.flex_space_between}>
      <Stack my="auto" mx="auto" style={{ textAlign: 'center' }}>
        <Title order={2}>This app doesnt support this device size.</Title>
        <Text>
          You can try use this device in landscape orientation. Sometimes it
          works.
        </Text>
        <Text>AND/OR</Text>
        <Text>
          You can join patreon and check our roadmap and suggest the priorities.
        </Text>
      </Stack>
    </div>
  );
}
