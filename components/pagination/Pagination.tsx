import { Pagination } from '@mantine/core';
import { useContext, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// import { parseAsFloat, useQueryState } from 'next-usequerystate';
import { MicListingContext } from '@/lib/context/MicListingContext';

function MicPagination() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activePage, setPage] = useState(Number(searchParams.get('pageNo')));
  // const [activePage, setPage] = useState(1);

  // const [activePage, setPage] = useQueryState('pageNo', parseAsFloat);

  const { mics } = useContext(MicListingContext);

  const totalPages = mics?.totalPages;

  console.log('This is my total Pages', totalPages);

  // const onSelect = (number: any) => {
  //   // now you got a read/write object
  //   const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

  //   // update as necessary

  //   if (!number) {
  //     current.delete('pageNo');
  //   } else {
  //     current.set('pageNo', number.toString());
  //   }

  //   // cast to string
  //   const search = current.toString();
  //   // or const query = `${'?'.repeat(search.length && 1)}${search}`;
  //   const query = search ? `?${search}` : '';

  //   router.push(`${pathname}${query}`);

  //   console.log('what does this function do?', query);

  //   console.log('This onClick is occuring');

  //   refetch();
  // };

  // handleSearch();

  // console.log('Trying to figure out page setting', searchParams);

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    // console.log('this is the current', current);

    // -> has to use this form

    // update as necessary -- this could be wrong too
    if (!current.has('pageNo')) {
      current.delete('pageNo');
    } else {
      current.set('pageNo', activePage.toString());
    }

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : '';
    console.log('UseEffect ran and this is the active page', activePage);
    router.push(`${pathname}${query}`);

    // router.refresh();
    // console.log('what does this function do?', query);
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
