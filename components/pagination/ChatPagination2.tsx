// components/Pagination.js

import React, { useContext } from 'react';
import { Pagination as MantinePagination } from '@mantine/core';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MicListingContext } from '@/lib/context/MicListingContext';

const ChatPagination2 = () => {
  const { mics } = useContext(MicListingContext);
  const currentPage = Number(useSearchParams().get('pageNo'));

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(Number(mics?.totalMics) / Number(mics?.limit));

  // const handleChange = (page: any) => {
  //   router.push(`${pathname} + ${searchParams} + pageNo=${page}`);
  //   console.log(
  //     'this is in the Chatgpt pagination',
  //     `${pathname} + ${searchParams} + pageNo=${page}`
  //   );
  // };

  // This is to handle pagination, honestly could be a useQuery Function
  const handleChange = (page: any) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    // update as necessary
    // const value = event.target.value.trim();
    // const value = current.get('pageNo');

    // console.log('ChatPagination2: This is the current from handleChange', current);

    // console.log('ChatPagination2: This is the value from handleChange', currentPage);

    if (!currentPage) {
      current.delete('pageNo');
    } else {
      current.set('pageNo', page);
    }

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : '';

    console.log('ChatPagination2: This is the recommended updated pathname', `${pathname}${query}`);
    router.push(`${pathname}${query}`);

    // router.push(`${pathname} + ${searchParams} + pageNo=${page}`);
    console.log(
      'ChatPagination2: this is in the Chatgpt pagination',
      `${pathname} + ${searchParams} + pageNo=${page}`
    );
  };

  return (
    <MantinePagination
      value={currentPage}
      onChange={handleChange}
      total={totalPages}
      className="justify-center pb-32 align-middle"
    />
  );
};

export default ChatPagination2;
