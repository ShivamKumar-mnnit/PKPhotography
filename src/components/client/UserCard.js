"use client"; // Ensure this is a client component
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const UserCards = () => {
  const [cards, setCards] = useState([]);

  // Fetch all cards when the component mounts
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data } = await axios.get("https://client-ra9o.onrender.com/api/cards");
        setCards(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  const handleClick = (cardId) => {
    const selectedCard = cards.find((card) => card._id === cardId);
    console.log(selectedCard);
    localStorage.setItem("selectedCard", JSON.stringify(selectedCard));
  };

  return (
    <>
      <Head>
        <title>PK Photography</title>
        <meta
          name="description"
          content="Browse through the user cards showcasing beautiful moments captured by PK Photography. Explore details, dates, and images with a user-friendly interface."
        />
        <meta name="keywords" content="PK Photography, User Cards, Photos, Events, Gallery" />
        <meta name="author" content="PK Photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="User Cards - PK Photography" />
        <meta
          property="og:description"
          content="Browse through the user cards showcasing beautiful moments captured by PK Photography."
        />
        <meta property="og:image" content="/default-image.png" />
        <meta property="og:url" content="https://www.pkphotography.io/user-cards" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {cards.map((card) => (
          <article
            key={card._id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                src={card.imageUrl}
                alt={`Image of ${card.name}`}
                className="object-cover w-full h-full rounded-t-lg"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex flex-col h-full">
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                {card.name}
              </h2>
              <p className="text-sm text-gray-600 text-center mt-2">
                {new Date(card.date).toLocaleDateString()}
              </p>
              <div className="mt-4 text-center">
                <Link href={`/client/${card._id}`}>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-200"
                    onClick={() => handleClick(card._id)}
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </main>
    </>
  );
};

export default UserCards;
