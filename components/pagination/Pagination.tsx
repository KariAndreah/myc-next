import { Pagination } from '@mantine/core';
import { useContext, useEffect, useState } from 'react';
// import { parseAsFloat, useQueryState } from 'next-usequerystate';
import { MicListingContext } from '@/lib/context/MicListingContext';

function MicPagination() {
  // const [activePage, setPage] = useQueryState('pageNo', parseAsFloat);
  const { mics, setPagination, params } = useContext(MicListingContext);
  const [activePage, setPage] = useState(Number(params.get('pageNo')));

  // const totalPages2 = mics?.totalPages;

  const totalPages = Math.ceil(Number(mics?.totalMics) / Number(mics?.limit));

  console.log('is this what Im looking for:', totalPages);

  console.log('This is my active Pages', activePage);

  // useEffect(() => {
  //   const current = new URLSearchParams(Array.from(searchParams.entries()));
  //   // console.log('this is the current', current);

  //   // -> has to use this form

  //   // update as necessary -- this could be wrong too
  //   if (!current.has('pageNo')) {
  //     current.delete('pageNo');
  //   } else {
  //     current.set('pageNo', activePage.toString());
  //   }

  //   // cast to string
  //   const search = current.toString();
  //   // or const query = `${'?'.repeat(search.length && 1)}${search}`;
  //   const query = search ? `?${search}` : '';
  //   console.log('UseEffect ran and this is the active page', activePage);
  //   router.push(`${pathname}${query}`);

  //   // router.refresh();
  //   // console.log('what does this function do?', query);
  // }, [activePage]);

  useEffect(() => {
    console.log('Use Effect from Pagination', params.toString());

    if (!params.has('pageNo')) {
      params.delete('pageNo');
    } else {
      params.set('pageNo', activePage.toString());
    }
    console.log('There are the params with current Page Number from Pagination', params.toString());

    setPagination!(params);
  }, [activePage]);

  return (
    // <Pagination
    //   total={totalPages}
    //   color="rgba(96, 165, 250, 1)"
    //   withEdges={totalPages > 2}
    //   value={activePage}
    //   onChange={handleChange}
    // />
    <div className="gap-10">
      <Pagination
        total={totalPages}
        withEdges={totalPages > 2}
        color="rgba(96, 165, 250, 1)"
        value={activePage!}
        onChange={setPage}
        // getItemProps={(page) => ({
        //   component: 'a',
        //   href: `#pageNo=${page}`,
        // })}
      />
    </div>
  );
}

//rgb(96 165 250 / 0)

export default MicPagination;
