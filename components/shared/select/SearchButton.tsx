import { Button } from "@mantine/core";
import { TbSearch } from "react-icons/tb";
import "@mantine/core/styles.css";


const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <Button fullWidth rightSection={<TbSearch size={20} />} onClick={onClick}>
      SEARCH
    </Button>
  );
};

export default SearchButton;

export type SearchButtonProps = {
  onClick: () => void;
};
