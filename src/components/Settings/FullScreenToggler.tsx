import { Switch } from '@mantine/core';
import { useFullscreen } from '@mantine/hooks';

export function FullScreenToggler() {
  const { toggle, fullscreen } = useFullscreen();

  return <Switch checked={fullscreen} onChange={toggle} label="Fullscreen" />;
}
