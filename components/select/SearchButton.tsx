import { Button } from '@mantine/core';
import { TbSearch } from 'react-icons/tb';
import '@mantine/core/styles.css';

const SearchButton = ({ onClick }: SearchButtonProps) => (
  <Button size="md" fullWidth leftSection={<TbSearch size={20} />} onClick={onClick}>
    Search for Mics
  </Button>
);

export default SearchButton;

export type SearchButtonProps = {
  onClick: () => void;
};
