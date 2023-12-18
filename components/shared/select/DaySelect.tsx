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
    data={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']}
  />
);

type DaySelectProps = {
  value: string | null;
  setValue: any;
};

export default DaySelect;
