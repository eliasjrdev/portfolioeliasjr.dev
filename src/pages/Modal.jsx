export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#1F2226] p-6 rounded-lg shadow-lg relative w-[90%] max-w-md flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-2xl cursor-pointer"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
