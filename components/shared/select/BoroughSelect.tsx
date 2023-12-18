import { Select } from '@mantine/core';
import { TbMapPin } from 'react-icons/tb';
import '@mantine/core/styles.css';

const BoroughSelect = ({ value, setValue }: BoroughSelectProps) => (
  <Select
    label="BOROUGH"
    placeholder="Pick a borough"
    data={['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten-Island']}
    value={value}
    clearable
    onChange={setValue}
    leftSection={<TbMapPin />}
  />
);

type BoroughSelectProps = {
  value: string | null;
  setValue: any;
};

export default BoroughSelect;
