import { Box, Center, SegmentedControl } from '@mantine/core';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { useUIStore } from '../../hooks';

export function ColorSchemeToggler() {
  const [colorScheme, toggleColorScheme] = useUIStore((state) => [
    state.colorScheme,
    state.toggleColorScheme,
  ]);

  return (
    <SegmentedControl
      value={colorScheme}
      onChange={(value: 'light' | 'dark') => toggleColorScheme(value)}
      data={[
        {
          value: 'light',
          label: (
            <Center>
              <RiSunLine size={16} />
              <Box ml={10}>Light</Box>
            </Center>
          ),
        },
        {
          value: 'dark',
          label: (
            <Center>
              <RiMoonFill size={16} />
              <Box ml={10}>Dark</Box>
            </Center>
          ),
        },
      ]}
    />
  );
}
