import { Button } from '@mantine/core';
import { TbSearch } from 'react-icons/tb';
import '@mantine/core/styles.css';

const SearchButton = ({ onClick }: SearchButtonProps) => (
  <Button
    aria-label="Search for mics"
    size="md"
    radius="xl"
    fullWidth
    leftSection={<TbSearch size={20} />}
    onClick={onClick}
  >
    Search for mics
  </Button>
);

export default SearchButton;

export type SearchButtonProps = {
  onClick: () => void;
};
