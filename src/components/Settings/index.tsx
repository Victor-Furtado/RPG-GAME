import { Stack } from '@mantine/core';
import { ColorSchemeToggler } from './ColorSchemeToggler';
import { FullScreenToggler } from './FullScreenToggler';

export function Settings() {
  return (
    <Stack>
      <FullScreenToggler />
      <ColorSchemeToggler />
    </Stack>
  );
}
