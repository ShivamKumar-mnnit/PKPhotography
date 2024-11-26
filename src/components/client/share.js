import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaPinterest, FaEnvelope, FaCopy, FaShare } from "react-icons/fa";

const Share = ({ imageUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(imageUrl);
    alert("Link copied to clipboard!");
  };

  const handleSocialShare = (platform) => {
    const encodedUrl = encodeURIComponent(imageUrl);
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/share?url=${encodedUrl}`;
        break;
      case "pinterest":
        shareUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=Check this out&body=${encodedUrl}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <div>
      {/* Share Button */}
      <button
        className="text-white p-2 hover:text-gray-600"
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(true);
        }}
      >
        <FaShare className="w-5 h-5" />
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Share</h3>
            <div className="flex items-center mb-4">
              <input
                type="text"
                value={imageUrl}
                readOnly
                className="border p-2 flex-grow mr-2"
              />
              <button
                onClick={handleCopyLink}
                className="bg-gray-800 text-white p-2 rounded"
              >
                Copy
              </button>
            </div>
            <div className="flex space-x-4">
              <FaFacebook
                onClick={() => handleSocialShare("facebook")}
                className="cursor-pointer text-blue-600"
              />
              <FaTwitter
                onClick={() => handleSocialShare("twitter")}
                className="cursor-pointer text-blue-400"
              />
              <FaPinterest
                onClick={() => handleSocialShare("pinterest")}
                className="cursor-pointer text-red-600"
              />
              <FaEnvelope
                onClick={() => handleSocialShare("email")}
                className="cursor-pointer text-gray-600"
              />
            </div>
            <button
              className="mt-4 text-red-600 underline"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Share;
