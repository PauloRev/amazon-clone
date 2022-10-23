import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../../slices/cartSlice';
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

import logo from '../../assets/logo.png';

export default function Header() {
  const session = useSession();
  const router = useRouter();

  const items = useSelector(selectItems);

  return (
    <header>
      <div className="flex items-center bg-[#131921] p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 mx-6">
          <Image
            onClick={() => router.push('/')}
            src={logo}
            width={100}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <AiOutlineSearch className="w-14 h-14 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link" onClick={!session?.data ? signIn : signOut}>
            <p>
              {session?.data
                ? `Hello, ${session?.data?.user?.name}`
                : 'Hello, sign in'}
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div
            onClick={() => router.push('/checkout')}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-7 w-4 h-4 bg-yellow-400 text-center rounded-full text-[#131921] font-bold">
              {items.length}
            </span>
            <AiOutlineShoppingCart className="w-10 h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 py-1 px-2 pl-6 bg-[#232F3E] text-white text-sm">
        <p className="link flex items-center">
          <AiOutlineMenu className="w-6 h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today&apos;s Deals</p>
        <p className="link hidden lg:inline-flex">Gift Cards</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}
