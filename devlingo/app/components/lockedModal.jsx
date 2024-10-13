import React from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image'; 
import lockImage from "../images/lock.png";

function LockedModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg text-center">
        <Image
          src={lockImage}
          alt="Locked Chapter"
          width={100}
          height={100}
          className="mb-4"
        />
        <p className="text-gray-500 font-bold">
          Complete the previous chapter to unlock!
        </p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white p-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
}

export default LockedModal;
