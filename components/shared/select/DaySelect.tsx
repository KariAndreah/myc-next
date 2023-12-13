import { Select } from "@mantine/core";
import { TbCalendar } from "react-icons/tb";
import "@mantine/core/styles.css";

const DaySelect = ({ value, setValue }: DaySelectProps) => {
  return (
    <Select
      label="DAY"
      placeholder="Pick a day"
      value={value}
      onChange={setValue}
      clearable
      leftSection={<TbCalendar />}
      data={[
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ]}
    />
  );
};

type DaySelectProps = {
  value: string;
  setValue: any;
};

export default DaySelect;
