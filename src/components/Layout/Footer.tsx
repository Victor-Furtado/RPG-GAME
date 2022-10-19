import {
  Button,
  Footer,
  Group,
  Progress,
  SimpleGrid,
  Stack,
} from '@mantine/core';

export function AppFooter() {
  return (
    <Footer height={64} p="sm">
      <SimpleGrid cols={2}>
        <Stack justify="space-around">
          <Progress
            value={75}
            color="red"
            label="Hit Points"
            size="xl"
            radius="xl"
          />
          <Progress
            value={75}
            color="blue"
            label="Magic Points"
            size="xl"
            radius="xl"
          />
        </Stack>
        <Group grow>
          <Button>Botão</Button>
          <Button>Botão</Button>
          <Button>Botão</Button>
          <Button>Botão</Button>
        </Group>
      </SimpleGrid>
    </Footer>
  );
}
