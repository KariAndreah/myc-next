import { Drawer } from '@mantine/core';

export function HeaderDrawer({ opened, close }: HeaderDrawerProps) {
  return (
    <div className="pt-16">
      <Drawer opened={opened} onClose={close}>
        Hi Kari
      </Drawer>
    </div>
  );
}

export type HeaderDrawerProps = {
  opened: boolean;
  close: () => any;
};
