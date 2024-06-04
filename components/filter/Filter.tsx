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

  const allBoroughsArray = params?.get('borough')?.split(',');
  const boroughsArray = allBoroughsArray?.includes('all') ? [] : allBoroughsArray;

  const daysArray = params?.get('day')?.includes('all') ? '' : params.get('day');

  const startTimeString2 = params.get('start-time')?.includes('00:00:00')
    ? ''
    : params.getAll('start-time')[0];
  // const startTimeString = useState(params?.getAll('start-time'))[0];
  const val = params?.get('free') === 'true';
  const [borough, setBorough] = useState(boroughsArray);
  const [free, setFree] = useState(val);
  const [day, setDay] = useState(daysArray);
  const [startTime, setStartTime] = useState(startTimeString2);

  const handleSearch = () => {
    const inputTerms = {
      boroughQuery: borough.length > 0 ? borough : 'all',
      dayQuery: day || 'all',
      timeQuery: startTime || '00:00:00',
      free,
    };
    setQuery!(inputTerms);
  };

  return (
    <header className="hidden md:flex h-[rem(50px)] mb-[rem(120px)] fixed w-[100%] z-10 bg-white border-2 -mt-2">
      <Container
        size="md"
        className="flex h-[rem(56px)] space-between py-3 gap-6 space-between items-center"
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
