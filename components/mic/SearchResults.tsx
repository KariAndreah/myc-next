import { useContext } from 'react';
import { MicListingContext } from '@/lib/context/MicListingContext';
import capitalizeDay from '@/lib/utils/capitalizeDay';
import changeTime from '@/lib/utils/changeTime';

export const SearchResults = () => {
  const { mics, params } = useContext(MicListingContext);

  // Getting Borough params to auto-populate search
  const getAllBoroughs = params.get('borough');
  const allBoroughsArray = getAllBoroughs.split(',');

  let boroughsArray: any;

  if (allBoroughsArray.includes('all')) {
    boroughsArray = 'NYC';
  } else {
    boroughsArray = allBoroughsArray;
  }

  // Getting Day params to auto-populate search
  const getAllDays = params.get('day');

  let daysArray: any;

  if (getAllDays.includes('all')) {
    daysArray = '';
  } else {
    daysArray = getAllDays;
    daysArray = ` on ${capitalizeDay(daysArray.toString())}`;
  }

  // Getting Day params to auto-populate search
  const getStartTime = params.get('start-time');

  let timeArray: any;

  if (getStartTime.includes('00:00:00')) {
    timeArray = '';
  } else {
    timeArray = getStartTime;
    timeArray = ` after ${changeTime(timeArray.toString())}`;
  }

  let paramsFree: any;
  if (params.get('free') === 'true') {
    paramsFree = 'Free';
  }

  let paramsPage: any;
  if (params.get('pageNo')) {
    paramsPage = params.get('pageNo');
  } else {
    paramsPage = 1;
  }
  const startPage = 1 + (paramsPage - 1) * 10;
  let endPage = Number(paramsPage) * 10;
  if (Number(mics?.totalMics) < endPage) {
    endPage = mics.totalMics;
  }

  const pagingString = `${startPage}-${endPage} of `;

  return (
    <h1 className="text-base pb-2">
      {pagingString}
      {mics?.totalMics} {paramsFree} mics in {boroughsArray.toString()}
      {daysArray}
      {timeArray}
    </h1>
  );
};
