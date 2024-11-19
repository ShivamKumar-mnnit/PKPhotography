import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  FaCartPlus,
  FaHeart,
  FaDownload,
  FaShareAlt,
  FaPlay,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

const ClientHome = () => {
  const [selectedCard, setSelectedCard] = useState([]);
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [slideshowVisible, setSlideshowVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlayInterval, setAutoPlayInterval] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const url = window.location.pathname;
    const parts = url.split("/");
    const lastId = parts[parts.length - 1];
    console.log("Last ID:", lastId);

    const fetchSelectedCard = async () => {
      try {
        const response = await axios.get(
          `https://client-ra9o.onrender.com/api/client/cards`
        );
        const selectedCard = response.data.find((card) => card._id === lastId);
        setSelectedCard(selectedCard);
        console.log("Selected card:", selectedCard);
        setCategories(selectedCard.category || []);
      } catch (error) {
        console.error("Error fetching selected card:", error);
      }
    };

    fetchSelectedCard();
  }, []);

  useEffect(() => {
    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchImagesFromDrive = async (driveLink, categoryName) => {
    if (!driveLink) {
      console.error("No drive link provided.");
      return;
    }

    const folderId = extractFolderId(driveLink);
    if (folderId) {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=AIzaSyCZv3XS3cicdPsznsJG7QxF1O_nQWSGoSM`
        );
        const driveImages = response.data.files.map(
          (file) => `https://drive.google.com/uc?export=view&id=${file.id}`
        );
        setImages(driveImages);
        setActiveCategory(categoryName); // Set active category
      } catch (error) {
        console.error("Error fetching images from Google Drive:", error);
      }
    } else {
      console.error("Invalid drive link:", driveLink);
    }
  };

  const extractFolderId = (driveLink) => {
    const match = driveLink.match(/[-\w]{25,}/);
    return match ? match[0] : null;
  };

  const handleSlideshow = () => {
    if (images.length > 0) {
      setSlideshowVisible(true);
      setCurrentImageIndex(0); // Start from the first image
      startAutoPlay(); // Start automatic slideshow
    } else {
      alert("No images available for the slideshow.");
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const closeSlideshow = () => {
    setSlideshowVisible(false);
    stopAutoPlay(); // Stop automatic slideshow
  };

  const startAutoPlay = () => {
    if (autoPlayInterval) return; // Prevent multiple intervals
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 
    setAutoPlayInterval(interval);
  };

  const stopAutoPlay = () => {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      setAutoPlayInterval(null);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.jpg"; 
    link.click();
  };

  const handleShare = (imageUrl) => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this image",
          url: imageUrl,
        })
        .then(() => console.log("Image shared successfully"))
        .catch((error) => console.error("Error sharing image:", error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <>
      <Head>
        <title>{selectedCard.name || "PK Photography"}</title>
        <meta
          name="description"
          content={`Explore stunning images and categories from ${
            selectedCard.name || "PK Photography"
          }. Find high-quality pictures organized by categories like ${categories
            .map((category) => category.name)
            .join(", ")}.`}
        />
        <meta
          name="keywords"
          content="PK Photography, Wedding Photos, Slideshow, Image Gallery, Photography Categories"
        />
        <meta name="author" content="PK Photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content={selectedCard.name || "PK Photography"}
        />
        <meta
          property="og:description"
          content={`View the best moments captured by ${
            selectedCard.name || "PK Photography"
          }.`}
        />
        <meta property="og:image" content="/path-to-default-image.jpg" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-50 shadow-sm">
        <div className="flex items-center">
          <Image src="" alt="Logo" width={40} height={40} className="h-10" />
          <span className="ml-4 text-lg font-bold">
            {selectedCard.name || "PK PHOTOGRAPHY"}
          </span>
        </div>
      </header>

      {/* Title Section */}
      <section className="text-center py-12 bg-pink-50">
        <h1 className="text-4xl font-serif font-light">{selectedCard.name}</h1>
        <p className="text-gray-500 text-sm mt-2">
          {new Date(selectedCard.date).toLocaleDateString()}
        </p>
      </section>

      {/* Categories Navbar */}
      <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
        <ul className="flex flex-wrap gap-4 text-sm font-semibold text-gray-700">
          {/* Display the first 4 categories */}
          {categories.slice(0, 4).map((category, index) => (
            <li
              key={index}
              className={`px-4 py-2 rounded-lg cursor-pointer shadow-sm transition duration-300 ease-in-out ${
                activeCategory === category.name
                  ? "bg-yellow-300 text-black"
                  : "bg-gray-100 hover:bg-gray-300"
              }`}
              onClick={() =>
                fetchImagesFromDrive(category.images, category.name)
              }
            >
              <span className="hover:font-bold transition duration-200">
                {category.name}
              </span>
            </li>
          ))}

          {/* "More" Dropdown for remaining categories */}
          {categories.length > 4 && (
            <li className="relative">
              <div
                className="px-4 py-2 rounded-lg cursor-pointer shadow-sm bg-gray-100 hover:bg-gray-300 transition duration-300 ease-in-out"
                onClick={toggleDropdown}
              >
                More
              </div>
              {dropdownVisible && (
                <ul className="absolute mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
                  {categories.slice(4).map((category, index) => (
                    <li
                      key={index}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-200 transition duration-200 ${
                        activeCategory === category.name ? "font-bold" : ""
                      }`}
                      onClick={() => {
                        fetchImagesFromDrive(category.images, category.name);
                        setDropdownVisible(false);
                      }}
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )}
        </ul>

        {/* Right-aligned Icons */}
        <ul className="flex space-x-6 text-sm font-semibold text-gray-600 items-center">
          <li
            className="flex items-center space-x-1 hover:text-black cursor-pointer"
            onClick={handleSlideshow}
          >
            <FaPlay /> <span>Slideshow</span>
          </li>
        </ul>
      </nav>

      {/* Display Images */}
      <section className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div
              key={index}
              className="relative bg-white shadow rounded-lg overflow-hidden group"
            >
              <Image
                src={image}
                alt="Drive Image"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />

              {/* Hover Icons */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                {/* Download Icon */}
                <button
                  className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600"
                  onClick={() => handleDownload(image)}
                >
                  <FaDownload size={20} />
                </button>

                {/* Share Icon */}
                <button
                  className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600"
                  onClick={() => handleShare(image)}
                >
                  <FaShareAlt size={20} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            Select a category to view images.
          </p>
        )}
      </section>

      {/* Slideshow Modal */}
      {slideshowVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={closeSlideshow}
          >
            <FaTimes size={30} />
          </button>
          <button
            className="absolute left-4 text-white"
            onClick={handlePreviousImage}
          >
            <FaArrowLeft size={30} />
          </button>
          <div className="max-w-screen-lg max-h-screen flex items-center justify-center p-4">
            <Image
              src={images[currentImageIndex]}
              alt="Slideshow Image"
              width={800}
              height={600}
              className="object-contain max-h-full max-w-full"
            />
          </div>
          <button
            className="absolute right-4 text-white"
            onClick={handleNextImage}
          >
            <FaArrowRight size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default ClientHome;
