import { Drawer } from '@mantine/core';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function HeaderDrawer({ opened, close }: HeaderDrawerProps) {
  const [active] = useState('/about');
  // const router = useRouter();

  return (
    <div className="pt-16">
      <Drawer opened={opened} onClose={close} position="left" size="55%">
        <Link
          href="/about"
          className="block"
          data-active={active === '/about' || undefined}
          aria-label="Toggle Header"
          // onClick={(event) => {
          //   event.preventDefault();
          //   setActive('/about');
          //   router.push('/about');
          // }}
        >
          About
        </Link>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSe7Ucl9_oWjOA9LbmvPQAwaqDcr1EAgcUWMnMnhEYm8P9LSGQ/viewform?usp=send_form"
          className="block pt-2"
          data-active={active === '/submit' || undefined}
          aria-label="Toggle Header"
          // onClick={(event) => {
          //   event.preventDefault();
          //   setActive('/about');
          //   router.push('/about');
          // }}
        >
          Submit a mic
        </Link>
      </Drawer>
    </div>
  );
}

export type HeaderDrawerProps = {
  opened: boolean;
  close: () => any;
};
