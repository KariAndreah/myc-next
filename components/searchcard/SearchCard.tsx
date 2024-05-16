'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BoroughSelect from '../select/BoroughSelect';
import DaySelect from '../select/DaySelect';
import FreeSwitch from '../select/FreeSwitch';
import SearchButton from '../select/SearchButton';
import TimeSelect from '../select/TimeSelect';
// import { handleSearch } from '@/lib/hooks/handleSearch';

// import { useNavigate } from "react-router-dom";

const SearchCard = () => {
  // const [day, setDay] = useQueryState('day');
  // const [borough, setBorough] = useQueryState('borough');
  // const [checked, setChecked] = useQueryState('free');
  // const [startTime, setStartTime] = useQueryState('startTime');

  const [day, setDay] = useState('');
  const [borough, setBorough] = useState([]);
  const [free, setFree] = useState(false);
  const [startTime, setStartTime] = useState('');
  // const searchParams = useSearchParams();
  // const pathname = usePathname();

  const router = useRouter();

  // const handleSearch = () => {
  //   router.push(`/mics?day=${day}&borough=${borough}&free=${cost}&page=1`);
  // };
  let boroughQuery: any;
  let dayQuery: any;
  let timeQuery: any;
  if (borough.length > 0) {
    boroughQuery = borough;
  } else {
    boroughQuery = 'all';
  }
  if (day === '') {
    dayQuery = 'all';
  } else {
    dayQuery = day;
  }
  if (startTime === '') {
    timeQuery = '00:00:00';
  } else {
    timeQuery = startTime;
  }

  const handleSearch = () => {
    router.push(
      `/mics?borough=${boroughQuery}&day=${dayQuery}&start-time=${timeQuery}&free=${free}&pageNo=${1}`
    );
  };

  const inputTerms = {
    boroughQuery,
    dayQuery,
    timeQuery,
    free,
  };

  console.log('Input terms in Search Card:', inputTerms);
  // const onSearch = () => {
  //   console.log('Does this get the search to work?', searchTerms);
  //   handleSearch(searchTerms);
  // };

  // const handleSearch = (searchTerms: {
  //   day: string;
  //   borough: string[];
  //   cost: boolean;
  // pageNo: any;
  // }) => {
  //   const params = new URLSearchParams(searchParams);

  //   if (searchTerms?.day) {
  //     params.set('day', searchTerms?.day);
  //   } else {
  //     params.delete('day');
  //   }

  // This is to set the array of boroughs into the terms
  // if (searchTerms?.borough) {
  //   searchTerms.borough.map((s: string) => params.append('borough', s));
  // } else {
  //   params.delete('borough');
  // }

  // Setting up free or not
  // if (searchTerms?.cost) {
  //   if (searchTerms?.cost === true) {
  //     params.set('cost', '1');
  //   }
  // } else {
  //   params.delete('cost');
  // }
  // if (searchTerms?.pageNo) {
  //   // eslint-disable-next-line no-unsafe-optional-chaining
  //   params.set('pageNo', (searchTerms?.pageNo).toString());
  // } else {
  //   params.delete('pageNo');
  // }

  // replace(`mics/${pathname}?${params.toString()}`);

  // console.log('Trying to create a search Function', `${pathname}?${params.toString()}`);
  // };

  return (
    <div className="w-full md:max-w-4xl pb-12">
      <div className="flex flex-col mx-4 shadow-[0_8px_24px_rgba(0,0,0,0.16)] p-6 gap-4 mt-4 bg-white">
        <div className="flex flex-col md:flex-row gap-4 md:mb-2 md:items-center">
          <div className="md:w-[35%]">
            <BoroughSelect value={borough} setValue={setBorough} />
          </div>
          {/* <h1>LOOK HERE FOR BOROUGH</h1>
          <h2>{borough}</h2> */}
          <DaySelect value={day} setValue={setDay} />
          {/* <h1>LOOK HERE FOR Day</h1>
          <h2>{day}</h2> */}

          <TimeSelect value={startTime} setValue={setStartTime} timePeriod="Start after" />
          {/* <h2>{startTime}</h2> */}
          {/* <TimeSelect
              value={endTime}
              setValue={setEndTime}
              timePeriod="END TIME"
            ></TimeSelect> */}
          {/* <h2>{endTime}</h2> */}
          <FreeSwitch checked={free} setChecked={setFree} />
        </div>
        {/* <h1>LOOK HERE FOR FREE</h1>
          <h2>{checked}</h2> */}
        <SearchButton onClick={handleSearch} />
        {/* <MicCard mics={mics}></MicCard> */}
      </div>
    </div>
  );
};

export default SearchCard;
