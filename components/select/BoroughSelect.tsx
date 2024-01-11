'use client';

import { MultiSelect } from '@mantine/core';
import { TbMapPin } from 'react-icons/tb';
import '@mantine/core/styles.css';

const BoroughSelect = ({ value, setValue }: BoroughSelectProps) => (
  <MultiSelect
    label="BOROUGH"
    placeholder="Pick a borough"
    data={['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten-Island']}
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
