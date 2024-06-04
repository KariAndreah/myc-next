import { Switch } from '@mantine/core';
import '@mantine/core/styles.css';

const FreeSwitch = ({ checked, setChecked }: FreeSwitchProps) => (
  <Switch
    defaultChecked
    labelPosition="left"
    label="Free"
    onChange={(event) => setChecked(event.currentTarget.checked)}
    checked={checked}
    styles={{
      label: {
        fontWeight: 600,
        color: '#1A1F2C',
      },
    }}
  />
);

type FreeSwitchProps = {
  setChecked: any;
  checked: any;
};

export default FreeSwitch;
