import { Select } from '@mantine/core';
import { TbClock } from 'react-icons/tb';
import '@mantine/core/styles.css';

const TimeSelect = ({ timePeriod, value, setValue }: TimeSelectProps) => {
  const times = [
    {
      value: '00:01:00',
      label: '12:01 am',
    },
    {
      value: '01:00:00',
      label: '1:00 am',
    },
    {
      value: '02:00:00',
      label: '2:00 am',
    },
    {
      value: '03:00:00',
      label: '3:00 am',
    },
    {
      value: '04:00:00',
      label: '4:00 am',
    },
    {
      value: '05:00:00',
      label: '5:00 am',
    },
    {
      value: '06:00:00',
      label: '6:00 am',
    },
    {
      value: '07:00:00',
      label: '7:00 am',
    },
    {
      value: '08:00:00',
      label: '8:00 am',
    },
    {
      value: '09:00:00',
      label: '9:00 am',
    },
    {
      value: '10:00:00',
      label: '10:00 am',
    },
    {
      value: '11:00:00',
      label: '11:00 am',
    },
    {
      value: '12:00:00',
      label: '12:00 pm',
    },
    {
      value: '13:00:00',
      label: '1:00 pm',
    },
    {
      value: '14:00:00',
      label: '2:00 pm',
    },
    {
      value: '15:00:00',
      label: '3:00 pm',
    },
    {
      value: '16:00:00',
      label: '4:00 pm',
    },
    {
      value: '17:00:00',
      label: '5:00 pm',
    },
    {
      value: '18:00:00',
      label: '6:00 pm',
    },
    {
      value: '19:00:00',
      label: '7:00 pm',
    },
    {
      value: '20:00:00',
      label: '8:00 pm',
    },
    {
      value: '21:00:00',
      label: '9:00 pm',
    },
    {
      value: '22:00:00',
      label: '10:00 pm',
    },
    {
      value: '23:00:00',
      label: '11:00 pm',
    },
  ];
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
