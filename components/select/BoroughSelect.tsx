'use client';

import { MultiSelect } from '@mantine/core';
import { TbMapPin } from 'react-icons/tb';
import '@mantine/core/styles.css';

const BoroughSelect = ({ value, setValue }: BoroughSelectProps) => (
  <MultiSelect
    label="BOROUGH"
    placeholder="Pick borough"
    data={[
      { value: 'manhattan', label: 'Manhattan' },
      { value: 'brooklyn', label: 'Brooklyn' },
      { value: 'queens', label: 'Queens' },
      { value: 'bronx', label: 'Bronx' },
      { value: 'staten-island', label: 'Staten Island' },
    ]}
    value={value}
    clearable
    onChange={setValue}
    leftSection={<TbMapPin />}
  />
);

type BoroughSelectProps = {
  value: string[];
  setValue: any;
};

export default BoroughSelect;
