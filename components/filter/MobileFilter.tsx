import { useContext, useState } from 'react';
import BoroughSelect from '../select/BoroughSelect';
import DaySelect from '../select/DaySelect';
import FreeSwitch from '../select/FreeSwitch';
import SearchButton from '../select/SearchButton';
import TimeSelect from '../select/TimeSelect';
import { MicListingContext } from '@/lib/context/MicListingContext';

const MobileFilter = ({ onSubmit }: MobileFilterProps) => {
  const { params, setQuery } = useContext(MicListingContext);

  const allBoroughsArray = params.get('borough')?.split(',') || [];
  const boroughsArray = allBoroughsArray.includes('all') ? [] : allBoroughsArray;

  const startTimeString2 = params.get('start-time')?.includes('00:00:00')
    ? ''
    : params.getAll('start-time')[0];

  const [day, setDay] = useState(params.getAll('day'));
  const val = params?.get('free') === 'true';

  const [startTime, setStartTime] = useState(startTimeString2);
  const [borough, setBorough] = useState(boroughsArray);
  const [free, setFree] = useState(val);

  const boroughQuery = borough.length > 0 ? borough : 'all';
  const dayQuery = day || 'all';
  const timeQuery = startTime || '00:00:00';

  const inputTerms = {
    dayQuery,
    boroughQuery,
    timeQuery,
    free,
  };

  const handleSearch = () => {
    onSubmit();
    setQuery!(inputTerms);
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col shadow-[0_8px_24px_rgba(0,0,0,0.16)] p-2 gap-4 bg-white">
        <div className="flex flex-col gap-2">
          <BoroughSelect value={borough} setValue={setBorough} />
          <DaySelect value={day} setValue={setDay} />
          <TimeSelect value={startTime} setValue={setStartTime} timePeriod="Start after" />
          <FreeSwitch checked={free} setChecked={() => setFree(!free)} />
        </div>
        <SearchButton onClick={handleSearch} />
      </div>
    </div>
  );
};

export default MobileFilter;

export type MobileFilterProps = {
  onSubmit: any;
};
