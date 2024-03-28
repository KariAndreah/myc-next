'use client';

import { Select } from '@mantine/core';
import { TbCalendar } from 'react-icons/tb';
import '@mantine/core/styles.css';

const DaySelect = ({ value, setValue }: DaySelectProps) => (
  <Select
    label="DAY"
    placeholder="Pick a day"
    value={value}
    onChange={setValue}
    clearable
    leftSection={<TbCalendar />}
    data={['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']}
  />
);

type DaySelectProps = {
  value: string | null;
  setValue: any;
};

export default DaySelect;
