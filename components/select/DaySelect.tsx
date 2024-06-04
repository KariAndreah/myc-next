'use client';

import { Select } from '@mantine/core';
import { TbCalendar } from 'react-icons/tb';
import '@mantine/core/styles.css';

const DaySelect = ({ value, setValue }: DaySelectProps) => (
  <div className="w-auto md:w-[150px]">
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
      styles={{
        label: {
          fontWeight: 600,
          color: '#1A1F2C',
        },
      }}
    />
  </div>
);

type DaySelectProps = {
  value: string | null;
  setValue: any;
};

export default DaySelect;
