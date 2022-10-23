import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

import { addToCart, removeFromCart } from '../../slices/cartSlice';

export default function CheckoutProduct({ product }) {
  const dispatch = useDispatch();

  const handleAddItemToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveItemFromCart = () => {
    dispatch(removeFromCart({ id: product.id }));
  };

  return (
    <div className="grid grid-cols-5 border-b pb-4">
      <Image src={product.image} width={200} height={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{product.title}</p>
        <div className="flex">
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <AiFillStar className="h-5 text-yellow-500" key={i} />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{product.description}</p>
        <Currency quantity={product.price} currency="USD" />

        {product.hasPrime && (
          <div className="flex items-center space-x-2 my-5">
            <div className="flex items-center">
              <BsCheckLg className="text-[#ff9900] h-4 mr-[2px]" />
              <span className="font-semibold text-[#109ECD]">prime</span>
            </div>
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={handleAddItemToCart}>
          Add to Cart
        </button>
        <button className="button" onClick={handleRemoveItemFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
