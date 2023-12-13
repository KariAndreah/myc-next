import { Switch } from "@mantine/core";
import "@mantine/core/styles.css";


const FreeSwitch = ({ checked, setChecked }: FreeSwitchProps) => {
  return (
    <Switch
      defaultChecked
      labelPosition="left"
      label="FREE"
      onChange={(event) => setChecked(event.currentTarget.checked)}
      checked={checked}
    />
  );
};

type FreeSwitchProps = {
  setChecked: any;
  checked: boolean;
};

export default FreeSwitch;
