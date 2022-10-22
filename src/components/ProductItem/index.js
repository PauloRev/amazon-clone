import { useState } from 'react';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { AiFillStar } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function ProductItem({ product }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-md">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {product?.category}
      </p>
      <Image
        src={product?.image}
        height={200}
        width={200}
        objectFit="contain"
      />

      <h4 className="my-3 line-clamp-2">{product?.title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar className="h-5 text-yellow-500" key={i} />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{product?.description}</p>

      <div>
        <Currency quantity={product?.price} currency="USD" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 my-5">
          <div className="flex items-center">
            <BsCheckLg className="text-[#ff9900] h-4 mr-[2px]" />
            <span className="font-semibold text-[#109ECD]">prime</span>
          </div>
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}
