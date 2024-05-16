'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import '@mantine/core/styles.css';
import Filter from '../filter/Filter';
import MobileFilterButton from '../filter/MobileFilterButton';
import { HeaderDrawer } from '../header-drawer/header-drawer';
import { BackButton } from '../buttons/BackButton';

const links = [
  { link: '/about', label: 'About' },
  // { link: 'https://forms.gle/xAaTnwZNi2mq3UDE9', label: 'Submit a Mic' },
  // { link: '/signin', label: 'Sign In/ Register' },
];

const Header = ({ hasFilter, hasMobileFilter, hasBackButton }: HeaderProps) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const router = useRouter();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      aria-label="Toggle Header"
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        router.push(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <h2 className="font-extrabold whitespace-nowrap text-xl md:text-2xl">
          <a href="/" className="flex flex-row">
            <span>Open</span>
            <span className="font-extrabold bg-gradient-to-r from-blue-400 to-orange-600 text-transparent bg-clip-text">
              MYC
            </span>
          </a>
        </h2>
        <HeaderDrawer opened={opened} close={close} />
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Container>
      {hasBackButton ? (
        <div className="block">
          <BackButton />{' '}
        </div>
      ) : null}{' '}
      {hasFilter ? <Filter /> : null}{' '}
      {hasMobileFilter ? (
        <div className="block md:hidden">
          <MobileFilterButton />{' '}
        </div>
      ) : null}{' '}
    </header>
  );
};

export default Header;

export type HeaderProps = {
  hasFilter?: boolean;
  hasMobileFilter?: boolean;
  hasBackButton?: boolean;
};
