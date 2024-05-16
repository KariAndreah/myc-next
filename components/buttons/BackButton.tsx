'use client';

import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { TbArrowLeft } from 'react-icons/tb';

export function BackButton() {
  const router = useRouter();

  const onButtonClick = (event: any) => {
    event.preventDefault();
    if (window.history?.length && window.history.length > 2) {
      router.back();
    } else {
      router.replace('/');
    }
  };
  return (
    <div className="h-[rem(50px)] mb-[rem(120px)] fixed w-[100%] z-10 bg-white border-2 -mt-2 p-2">
      <Button onClick={onButtonClick} size="compact-md" leftSection={<TbArrowLeft size={20} />}>
        Back to search
      </Button>
    </div>
  );
}
