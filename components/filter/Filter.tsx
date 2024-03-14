'use client';

import { Button, Container } from '@mantine/core';
import '@mantine/core/styles.css';
import { useContext, useState } from 'react';
import { TbSearch } from 'react-icons/tb';
import BoroughSelect from '../select/BoroughSelect';
import DaySelect from '../select/DaySelect';
import FreeSwitch from '../select/FreeSwitch';
import { MicListingContext } from '@/lib/context/MicListingContext';
// import TimeSelect from '../select/TimeSelect';

const Filter = () => {
  const { params, setQuery } = useContext(MicListingContext);

  // console.log('This is to find all of the params', params.toString());
  const getAllBoroughs = params.get('borough');
  const allBoroughsArray = getAllBoroughs.split(',');

  // console.log('this is the borough Param', allBoroughsArray);

  let boroughsArray: any;

  if (allBoroughsArray.includes('All')) {
    boroughsArray = [];
  } else {
    boroughsArray = allBoroughsArray;
  }

  const [day, setDay] = useState(params.getAll('day'));
  // const [startTime, setStartTime] = useState(params.getAll('time'));
  const [borough, setBorough] = useState(boroughsArray);
  const val = params.get('free') === 'true';

  const [cost, setCost] = useState(val);

  // console.log('What is passing in the switch', params.get('free'));

  // console.log('What is passing in the switch passing', Boolean(params.get('free')));

  // console.log('query in the FILTERS', params.toString());

  const findingBorough = params.get('borough');

  console.log('boroughs from FILTERS', findingBorough);

  let boroughQuery: any;
  let dayQuery: any;
  let timeQuery: any;
  if (borough.length > 0) {
    boroughQuery = borough;
  } else {
    boroughQuery = 'All';
  }
  if (day === '') {
    dayQuery = 'All';
  } else {
    dayQuery = day;
  }
  // if (startTime === '') {
  //   timeQuery = '00:00:00';
  // } else {
  //   timeQuery = startTime;
  // }

  const inputTerms = {
    dayQuery,
    boroughQuery,
    timeQuery,
    cost,
  };

  console.log('Looking here', inputTerms);

  const handleSearch = () => {
    setQuery!(inputTerms);
  };

  return (
    <header className="hidden md:flex h-[rem(50px)] mb-[rem(120px)] fixed w-[100%] z-10 bg-white border-2 -mt-2 ">
      <Container size="md" className=" flex h-[rem(56px)] space-between items-center py-3 gap-3">
        <BoroughSelect value={borough} setValue={setBorough} />
        <DaySelect value={day} setValue={setDay} />
        {/* <TimeSelect value={startTime} setValue={setStartTime} timePeriod="START TIME" /> */}
        <FreeSwitch checked={cost} setChecked={setCost} />
        <Button onClick={handleSearch} rightSection={<TbSearch size={20} />}>
          Update
        </Button>
      </Container>
    </header>
  );
};

export default Filter;
