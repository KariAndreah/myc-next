import { Select } from '@mantine/core';
import { TbClock } from 'react-icons/tb';
import '@mantine/core/styles.css';

const generateTimeOptions = () => {
  const times = [];
  for (let i = 0; i < 24; i += 1) {
    const hour = i < 10 ? `0${i}` : `${i}`;
    times.push({
      value: `${hour}:00:00`,
      label:
        i === 0 ? '12:00 am' : i < 12 ? `${i}:00 am` : i === 12 ? '12:00 pm' : `${i - 12}:00 pm`,
    });
  }
  return times;
};

const TimeSelect = ({ timePeriod, value, setValue }: TimeSelectProps) => {
  const times = generateTimeOptions();
  return (
    <div className="w-[150px]">
      <Select
        label={timePeriod}
        placeholder="Time"
        withCheckIcon={false}
        data={times}
        searchable
        clearable
        value={value}
        onChange={setValue}
        leftSection={<TbClock />}
      />
    </div>
  );
};

export default TimeSelect;

export type TimeSelectProps = {
  timePeriod?: string;
  value: any;
  setValue: any;
};
