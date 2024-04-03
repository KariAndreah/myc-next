'use client';

import { useContext, useState } from 'react';
import BoroughSelect from '../select/BoroughSelect';
import DaySelect from '../select/DaySelect';
import FreeSwitch from '../select/FreeSwitch';
import SearchButton from '../select/SearchButton';
// import TimeSelect from '../select/TimeSelect';
import { MicListingContext } from '@/lib/context/MicListingContext';

// import { handleSearch } from '@/lib/hooks/handleSearch';

// import { useNavigate } from "react-router-dom";

const MobileFilter = ({ onSubmit }: MobileFilterProps) => {
  const { params, setQuery } = useContext(MicListingContext);

  // console.log('This is to find all of the params', params.toString());
  const getAllBoroughs = params.get('borough');
  const allBoroughsArray = getAllBoroughs.split(',');

  // console.log('this is the borough Param', allBoroughsArray);

  let boroughsArray: any;

  if (allBoroughsArray.includes('all')) {
    boroughsArray = [];
  } else {
    boroughsArray = allBoroughsArray;
  }

  const [day, setDay] = useState(params.getAll('day'));
  // const [startTime, setStartTime] = useState(params.getAll('time'));
  const [borough, setBorough] = useState(boroughsArray);
  const val = params.get('free') === 'true';

  const [free, setFree] = useState(val);

  // console.log('What is passing in the switch', params.get('free'));

  // console.log('What is passing in the switch passing', Boolean(params.get('free')));

  // console.log('query in the FILTERS', params.toString());

  // const findingBorough = params.get('borough');

  // console.log('boroughs from FILTERS', findingBorough);

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
  // if (startTime === '') {
  //   timeQuery = '00:00:00';
  // } else {
  //   timeQuery = startTime;
  // }

  const inputTerms = {
    dayQuery,
    boroughQuery,
    timeQuery,
    free,
  };

  console.log('Input terms from Mobile Filters:', inputTerms);

  const handleSearch = () => {
    console.log('Mobile filter', free);
    setQuery!(inputTerms);
    onSubmit();
  };

  return (
    <div className="w-full h-[full]">
      <div className="flex flex-col shadow-[0_8px_24px_rgba(0,0,0,0.16)] p-2 gap-4 bg-white">
        <div className="flex flex-col gap-2">
          <BoroughSelect value={borough} setValue={setBorough} />
          {/* <h1>LOOK HERE FOR BOROUGH</h1>
          <h2>{borough}</h2> */}
          <DaySelect value={day} setValue={setDay} />
          {/* <h1>LOOK HERE FOR Day</h1>
          <h2>{day}</h2> */}

          {/* <TimeSelect value={startTime} setValue={setStartTime} timePeriod="START TIME" /> */}
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

export default MobileFilter;

export type MobileFilterProps = {
  onSubmit: any;
};
