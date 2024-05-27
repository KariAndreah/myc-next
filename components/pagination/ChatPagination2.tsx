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

  const handleChange = (page: any) => {
    const params = new URLSearchParams(searchParams);
    params.set('pageNo', page);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <MantinePagination
      siblings={1}
      value={currentPage}
      onChange={handleChange}
      total={totalPages}
      className="justify-center pb-32 align-middle"
    />
  );
};

export default ChatPagination2;
