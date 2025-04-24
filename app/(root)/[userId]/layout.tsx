import UserMenu from '@/components/UserMenu';
import Image from 'next/image';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <nav className='flex justify-between items-center px-4 py-2'>
            <Image src="/logo.png" alt="logo" width={38} height={32} />
            <UserMenu />
        </nav>
        <section>
            {children}
        </section>
    </div>
  )
}

export default layout