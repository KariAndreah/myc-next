'use client';

import { ActionIcon, Container } from '@mantine/core';
import '@mantine/core/styles.css';
import { useContext, useState } from 'react';
import { TbSearch } from 'react-icons/tb';
import BoroughSelect from '../select/BoroughSelect';
import DaySelect from '../select/DaySelect';
import FreeSwitch from '../select/FreeSwitch';
import { MicListingContext } from '@/lib/context/MicListingContext';
import TimeSelect from '../select/TimeSelect';

const Filter = () => {
  const { params, setQuery } = useContext(MicListingContext);

  // Getting Borough params to auto-populate search
  const getAllBoroughs = params?.get('borough');
  const allBoroughsArray = getAllBoroughs?.split(',');

  let boroughsArray: any;

  if (allBoroughsArray?.includes('all')) {
    boroughsArray = [];
  } else {
    boroughsArray = allBoroughsArray;
  }

  // Getting Day params to auto-populate search
  const getAllDays = params.get('day');

  let daysArray: any;

  if (getAllDays?.includes('all')) {
    daysArray = '';
  } else {
    daysArray = getAllDays;
  }

  // const [day, setDay] = useState([]);
  const [startTime, setStartTime] = useState(params?.getAll('start-time'));
  // const [borough, setBorough] = useState([]);

  // Getting Cost params to auto-populate search
  const val = params?.get('free') === 'true';

  // const [cost, setCost] = useState(val);

  // console.log('What is passing in the switch', params.get('free'));

  // console.log('What is passing in the switch passing', Boolean(params.get('free')));

  // console.log('query in the FILTERS', params.toString());

  // const findingBorough = params.get('borough');

  // console.log('boroughs from FILTERS', findingBorough);

  const [borough, setBorough] = useState(boroughsArray);
  const [free, setFree] = useState(val);
  const [day, setDay] = useState(daysArray);
  // const [startTime, setStartTime] = useState('');
  // const searchParams = useSearchParams();
  // const pathname = usePathname();

  // const handleSearch = () => {
  //   router.push(`/mics?day=${day}&borough=${borough}&free=${cost}&page=1`);
  // };
  let boroughQuery: any;
  let dayQuery: any;
  let timeQuery: any;
  if (borough?.length > 0) {
    boroughQuery = borough;
  } else {
    boroughQuery = 'all';
  }
  if (!day) {
    dayQuery = 'all';
  } else {
    dayQuery = day;
  }
  if (startTime === ('' || null)) {
    timeQuery = '00:00:00';
  } else {
    timeQuery = startTime;
  }

  const inputTerms = {
    boroughQuery,
    dayQuery,
    timeQuery,
    free,
  };

  // console.log('Input Terms from Filter', inputTerms);

  const handleSearch = () => {
    // console.log(free);
    setQuery!(inputTerms);
  };

  return (
    <header className="hidden md:flex h-[rem(50px)] mb-[rem(120px)] fixed w-[100%] z-10 bg-white border-2 -mt-2">
      <Container
        size="md"
        className="flex h-[rem(56px)] space-between py-3 gap-8 space-between items-center"
      >
        <BoroughSelect value={borough} setValue={setBorough} />
        <DaySelect value={day} setValue={setDay} />
        <TimeSelect value={startTime} setValue={setStartTime} timePeriod="Start After" />
        <FreeSwitch checked={free} setChecked={setFree} />
        <ActionIcon onClick={handleSearch} size={40}>
          <TbSearch size={20} />
        </ActionIcon>
      </Container>
    </header>
  );
};

export default Filter;
