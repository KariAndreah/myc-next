import { Pagination } from '@mantine/core';
import { useContext, useState } from 'react';
import { MicListingContext } from '@/lib/context/MicListingContext';

function MicPagination() {
  const { mics } = useContext(MicListingContext);
  // eslint-disable-next-line no-unsafe-optional-chaining
  const [activePage, setPage] = useState(1);

  const totalPages = mics?.totalPages;

  console.log('This is my total Pages', totalPages);

  return (
    <Pagination
      total={totalPages}
      color="rgba(96, 165, 250, 1)"
      withEdges={totalPages > 2}
      value={activePage}
      onChange={setPage}
    />
  );
}

//rgb(96 165 250 / 0)

export default MicPagination;
