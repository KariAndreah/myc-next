import { Select } from "@mantine/core";
import { TbClock } from "react-icons/tb";
import "@mantine/core/styles.css";


const TimeSelect = ({ timePeriod, value, setValue }: TimeSelectProps) => {
  const times = [
    {
      value: "12:01 am",
      label: "12:01 am",
    },
    {
      value: "1:00 am",
      label: "1:00 am",
    },
    {
      value: "2:00 am",
      label: "2:00 am",
    },
    {
      value: "3:00 am",
      label: "3:00 am",
    },
    {
      value: "4:00 am",
      label: "4:00 am",
    },
    {
      value: "5:00 am",
      label: "5:00 am",
    },
    {
      value: "6:00 am",
      label: "6:00 am",
    },
    {
      value: "7:00 am",
      label: "7:00 am",
    },
    {
      value: "8:00 am",
      label: "8:00 am",
    },
    {
      value: "9:00 am",
      label: "9:00 am",
    },
    {
      value: "10:00 am",
      label: "10:00 am",
    },
    {
      value: "11:00 am",
      label: "11:00 am",
    },
    {
      value: "12:00 pm",
      label: "12:00 pm",
    },
    {
      value: "1:00 pm",
      label: "1:00 pm",
    },
    {
      value: "2:00 pm",
      label: "2:00 pm",
    },
    {
      value: "3:00 pm",
      label: "3:00 pm",
    },
    {
      value: "4:00 pm",
      label: "4:00 pm",
    },
    {
      value: "5:00 pm",
      label: "5:00 pm",
    },
    {
      value: "6:00 pm",
      label: "6:00 pm",
    },
    {
      value: "7:00 pm",
      label: "7:00 pm",
    },
    {
      value: "8:00 pm",
      label: "8:00 pm",
    },
    {
      value: "9:00 pm",
      label: "9:00 pm",
    },
    {
      value: "10:00 pm",
      label: "10:00 pm",
    },
    {
      value: "11:00 pm",
      label: "11:00 pm",
    },
    {
      value: "11:59 pm",
      label: "11:59 pm",
    },
  ];
  return (
    <div className="w-[150px]">
      <Select
        label={timePeriod}
        placeholder={timePeriod}
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
  value: string;
  setValue: any;
};
