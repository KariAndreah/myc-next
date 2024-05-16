'use client';

import { Select } from '@mantine/core';
import { TbCalendar } from 'react-icons/tb';
import '@mantine/core/styles.css';

const DaySelect = ({ value, setValue }: DaySelectProps) => (
  <Select
    label="Day"
    placeholder="Pick day"
    value={value}
    onChange={setValue}
    clearable
    leftSection={<TbCalendar />}
    data={[
      { value: 'sunday', label: 'Sunday' },
      { value: 'monday', label: 'Monday' },
      { value: 'tuesday', label: 'Tuesday' },
      { value: 'wednesday', label: 'Wednesday' },
      { value: 'thursday', label: 'Thursday' },
      { value: 'friday', label: 'Friday' },
      { value: 'saturday', label: 'Saturday' },
    ]}
  />
);

type DaySelectProps = {
  value: string | null;
  setValue: any;
};

export default DaySelect;
