import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveFromCart = (image) => {
    const updatedCart = cartItems.filter((item) => item !== image);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    alert("Checkout functionality coming soon!");
    // Implement checkout logic here.
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {cartItems.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image}
                alt={`Cart Item ${index}`}
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
              <button
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                onClick={() => handleRemoveFromCart(image)}
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md"
          onClick={handleCheckout}
        >
          Checkout
        </button>
        <Link href="/">
          <a className="ml-4 px-4 py-2 bg-gray-500 text-white rounded-md">
            Continue Shopping
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
