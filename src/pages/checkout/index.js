import Head from 'next/head';
import { useSession } from 'next-auth/react';
import Currency from 'react-currency-formatter';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../../slices/cartSlice';
import CheckoutProduct from '../../components/CheckoutProduct';

export default function Checkout() {
  const session = useSession();

  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <>
      <Head>
        <title>Amazon Clone | Checkout</title>
      </Head>

      <Header />

      <main className="lg:flex max-w-screen-2xl max-auto">
        <div className="flex-grow m-5 shadow-sm">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length > 0
                ? 'Shopping Cart'
                : 'Your Amazon Cart is empty.'}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct key={i} product={item} />
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{' '}
                <span className="font-bold">
                  <Currency quantity={total} currency="USD" />
                </span>
              </h2>

              <button
                disabled={!session?.data}
                onClick={() => {}}
                className={`button mt-2 ${
                  !session?.data &&
                  'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
              >
                {!!session?.data
                  ? 'Proceed to checkout'
                  : 'Sign in to checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </>
  );
}
