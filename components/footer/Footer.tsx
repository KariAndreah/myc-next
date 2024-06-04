'use client';

import { Anchor, Group, ActionIcon, rem } from '@mantine/core';
import { IconMail } from '@tabler/icons-react';
// import { useRouter } from 'next/navigation';
import classes from './Footer.module.css';
import '@mantine/core/styles.css';

const links = [
  { link: '/about', label: 'Contact' },
  // { link: '#', label: 'Privacy' },
];

const Footer = () => {
  // const router = useRouter();
  const items = links.map((link) => (
    <Anchor
      c="#1A2A2C"
      key={link.label}
      lh={1}
      // onClick={(event) => {
      //   event.preventDefault();
      //   router.push(link.link);
      // }}
      size="sm"
      href="/about"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon
            component="a"
            href="mailto:openmycapp@gmail.com"
            aria-label="Email support"
            size="md"
            variant="default"
            radius="xl"
          >
            <IconMail style={{ width: rem(18), height: rem(18), color: '#1A2A2C' }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
};

export default Footer;
