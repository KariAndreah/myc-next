'use client';

import { MultiSelect } from '@mantine/core';
import { TbMapPin } from 'react-icons/tb';
import '@mantine/core/styles.css';

const BoroughSelect = ({ value, setValue }: BoroughSelectProps) => (
  <div className="w-auto md:w-[370px]">
    <MultiSelect
      label="Borough"
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
      styles={{
        label: {
          fontWeight: 600,
          color: '#1A1F2C',
        },
      }}
    />
  </div>
);

type BoroughSelectProps = {
  value: string[];
  setValue: any;
};

export default BoroughSelect;
