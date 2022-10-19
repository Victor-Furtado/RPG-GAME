import { Navbar, Tabs } from '@mantine/core';
import { RiSettings3Fill, RiUserFill } from 'react-icons/ri';
import { useUIStore } from '../../hooks';

export function AppLeftBar() {
  const opened = useUIStore((state) => state.navBarOpened);

  if (opened)
    return (
      <Navbar p="md" width={{ sm: 200, lg: 300 }}>
        <Tabs defaultValue="player">
          <Tabs.List>
            <Tabs.Tab value="player" icon={<RiUserFill size={14} />} />
            <Tabs.Tab value="settings" icon={<RiSettings3Fill size={14} />} />
          </Tabs.List>

          <Tabs.Panel value="player" pt="xs">
            Player tab content
          </Tabs.Panel>

          <Tabs.Panel value="settings" pt="xs">
            Settings tab content
          </Tabs.Panel>
        </Tabs>
      </Navbar>
    );

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}
