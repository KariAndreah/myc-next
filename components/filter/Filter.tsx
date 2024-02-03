'use client';

import { Button, Container } from '@mantine/core';
import '@mantine/core/styles.css';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TbSearch } from 'react-icons/tb';
import BoroughSelect from '../select/BoroughSelect';
import DaySelect from '../select/DaySelect';
import FreeSwitch from '../select/FreeSwitch';
import { MicListingContext } from '@/lib/context/MicListingContext';

const Filter = () => {
  const { params } = useContext(MicListingContext);

  console.log('This is to find all of the params', params.toString());
  const getAllBoroughs = params.get('borough');
  const allBoroughsArray = getAllBoroughs.split(',');

  console.log('this is the borough Param', allBoroughsArray);

  let boroughsArray: any;

  if (allBoroughsArray.includes('All')) {
    boroughsArray = [];
  } else {
    boroughsArray = allBoroughsArray;
  }

  const [day, setDay] = useState(params.getAll('day'));
  const [borough, setBorough] = useState(boroughsArray);
  const val = params.get('free') === 'true';

  const [cost, setCost] = useState(val);

  console.log('What is passing in the switch', params.get('free'));

  console.log('What is passing in the switch passing', Boolean(params.get('free')));

  console.log('query in the FILTERS', params.toString());

  const findingBorough = params.get('borough');

  console.log('boroughs from FILTERS', findingBorough);

  const router = useRouter();

  const handleSearch = () => {
    console.log('this is clicking');
    router.push(`/mics?day=${day}&borough=${borough}&time=00:00:00&free=${cost}&page=1`);
  };

  return (
    <header className="h-[rem(50px)] mb-[rem(120px)] fixed w-[100%] z-10 bg-white border-2 -mt-2 ">
      <Container size="md" className=" flex h-[rem(56px)] space-between items-center py-3 gap-3">
        <BoroughSelect value={borough} setValue={setBorough} />
        <DaySelect value={day} setValue={setDay} />
        <FreeSwitch checked={cost} setChecked={setCost} />
        <Button onClick={handleSearch} rightSection={<TbSearch size={20} />}>
          Update
        </Button>
      </Container>
    </header>
  );
};

export default Filter;
