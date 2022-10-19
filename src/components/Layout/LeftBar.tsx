import { Navbar, Tabs, Title } from '@mantine/core';
import { useState } from 'react';
import { RiSettings3Fill, RiUserFill } from 'react-icons/ri';
import { useUIStore } from '../../hooks';
import { Settings } from '../Settings';

export function AppLeftBar() {
  const opened = useUIStore((state) => state.navBarOpened);
  const [activeTab, setActiveTab] = useState<string | null>('character');

  if (opened)
    return (
      <Navbar p="md" width={{ sm: 200, lg: 300 }}>
        <Title
          style={{ textAlign: 'center', textTransform: 'uppercase' }}
          order={6}
        >
          {activeTab}
        </Title>
        <Tabs value={activeTab} onTabChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="character" icon={<RiUserFill size={14} />} />
            <Tabs.Tab value="settings" icon={<RiSettings3Fill size={14} />} />
          </Tabs.List>

          <Tabs.Panel value="character" pt="xs">
            Player tab content
          </Tabs.Panel>

          <Tabs.Panel value="settings" pt="xs">
            <Settings />
          </Tabs.Panel>
        </Tabs>
      </Navbar>
    );

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}
