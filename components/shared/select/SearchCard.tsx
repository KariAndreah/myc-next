import { Card } from '@mantine/core';
import { ReactNode } from 'react';
import '@mantine/core/styles.css';

const SearchCard = ({ children }: SearchCardProps) => (
  <div>
    <Card withBorder className="w-[750px] flex items-center ">
      {children}
    </Card>
  </div>
);

export default SearchCard;

export type SearchCardProps = {
  children: ReactNode;
};
