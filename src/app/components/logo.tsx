import Image from 'next/image';
import LogoImg from '../../../public/logo.png';
import Link from 'next/link';

export const Logo = () => (
  <Link href="/" className='flex  items-center justify-between text-lg  border border-zinc-200 border-opacity-10 bg-zinc-100 bg-opacity-10 rounded-full hover:scale-110 transition-all duration-200 '>
    <Image
      src={LogoImg}
      alt='Logo'
      width={35}
      height={35}
      priority
      className='opacity-90'
    />
  </Link>
)
