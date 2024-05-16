// components/Pagination.js

import { Button, Group } from '@mantine/core';
// import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { MicListingContext } from '@/lib/context/MicListingContext';

const ChatPagination = ({ currentPage, totalPages }: ChatPaginationProps) => {
  const { params } = useContext(MicListingContext);

  // const router = useRouter();

  const handlePageChange = (page: number) => {
    // router.push(`/blog/page/${page}`);
    if (!params.has('pageNo')) {
      params.delete('pageNo');
    } else {
      params.set('pageNo', page.toString());
    }
    console.log('There are the params with current Page Number from Pagination', params.toString());
    ChatPagination!(params);
  };

  return (
    <Group>
      <Button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
        Previous
      </Button>
      <Button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </Button>
    </Group>
  );
};

export default ChatPagination;

export type ChatPaginationProps = {
  currentPage: number;
  totalPages: number;
};
