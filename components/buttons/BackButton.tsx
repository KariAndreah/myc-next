import { Button } from '@mantine/core';
import router from 'next/router';
import { TbArrowLeft } from 'react-icons/tb';

export function BackButton() {
  return (
    <div>
      <Button
        onClick={() => router.back()}
        size="compact-md"
        leftSection={<TbArrowLeft size={20} />}
      >
        Go Back to Search
      </Button>
    </div>
  );
}
