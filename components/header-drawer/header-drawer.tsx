import { Drawer } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function HeaderDrawer({ opened, close }: HeaderDrawerProps) {
  const [active, setActive] = useState('/about');
  const router = useRouter();

  return (
    <div className="pt-16">
      <Drawer opened={opened} onClose={close}>
        <a
          href="/about"
          className="block"
          data-active={active === '/about' || undefined}
          aria-label="Toggle Header"
          onClick={(event) => {
            event.preventDefault();
            setActive('/about');
            router.push('/about');
          }}
        >
          About
        </a>
      </Drawer>
    </div>
  );
}

export type HeaderDrawerProps = {
  opened: boolean;
  close: () => any;
};
