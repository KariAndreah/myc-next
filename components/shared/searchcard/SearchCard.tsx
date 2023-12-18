'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BoroughSelect from '../select/BoroughSelect';
import DaySelect from '../select/DaySelect';
import FreeSwitch from '../select/FreeSwitch';
import SearchButton from '../select/SearchButton';
import TimeSelect from '../select/TimeSelect';

// import { useNavigate } from "react-router-dom";

const SearchCard = () => {
  // const [day, setDay] = useQueryState('day');
  // const [borough, setBorough] = useQueryState('borough');
  // const [checked, setChecked] = useQueryState('free');
  // const [startTime, setStartTime] = useQueryState('startTime');

  const [day, setDay] = useState('');
  const [borough, setBorough] = useState('');
  const [checked, setChecked] = useState('');
  const [startTime, setStartTime] = useState('');

  const router = useRouter();

  const handleSearch = () => {
    router.push(`/mics?day=${day}&borough=${borough}`);
  };

  return (
    <>
      <div className="w-full md:max-w-4xl pb-12">
        <div className="flex flex-col mx-3 shadow-[0_8px_24px_rgba(0,0,0,0.16)] p-4 md:p-6 gap-4 mt-4 bg-white">
          <div className="flex flex-col md:flex-row gap-4 md:mb-2 md:items-center">
            <BoroughSelect value={borough} setValue={setBorough} />
            {/* <h1>LOOK HERE FOR BOROUGH</h1>
          <h2>{borough}</h2> */}
            <DaySelect value={day} setValue={setDay} />
            {/* <h1>LOOK HERE FOR Day</h1>
          <h2>{day}</h2> */}

            <TimeSelect value={startTime} setValue={setStartTime} timePeriod="START TIME" />
            {/* <h2>{startTime}</h2> */}
            {/* <TimeSelect
              value={endTime}
              setValue={setEndTime}
              timePeriod="END TIME"
            ></TimeSelect> */}
            {/* <h2>{endTime}</h2> */}
            <FreeSwitch checked={checked} setChecked={setChecked} />
          </div>
          {/* <h1>LOOK HERE FOR FREE</h1>
          <h2>{checked}</h2> */}
          <SearchButton onClick={handleSearch} />
          {/* <MicCard mics={mics}></MicCard> */}
        </div>
      </div>
    </>
  );
};

export default SearchCard;
