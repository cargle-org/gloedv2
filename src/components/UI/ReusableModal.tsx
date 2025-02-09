import React from "react";

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: JSX.Element;
}

const ReusableModal: React.FC<ReusableModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg font-bold">{title}</h2>
        {content}
      </div>
    </div>
  );
};

export default ReusableModal; 