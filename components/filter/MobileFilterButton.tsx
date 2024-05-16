import { TbSearch } from 'react-icons/tb';
import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import MobileFilter from './MobileFilter';
import '@mantine/core/styles.css';

const MobileFilterButton = () => {
  const [opened, { open, close }] = useDisclosure(false);

  //   const onClick = () => {
  //     setShowMobileFilter(!showMobileFilter);
  //     setVisible(() => !showMobileFilter);
  //     console.log(visible);
  //     open;
  //   };
  return (
    <div>
      <div className="h-[rem(50px)] mb-[rem(120px)] fixed w-[100%] z-10 bg-white border-2 -mt-2 p-2">
        <Button type="submit" value="Search" onClick={open} leftSection={<TbSearch size={20} />}>
          Mic Search
        </Button>
      </div>
      <Modal opened={opened} onClose={close} title="Update Mic Search" centered>
        <MobileFilter onSubmit={close} />
      </Modal>
    </div>
  );
};

export default MobileFilterButton;
