'use client';

interface NotificationProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50 transition-opacity duration-500">
      <div className="bg-gray-800 text-white py-3 px-6 rounded-lg shadow-lg text-center">
        <p>{message}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
            onClick={onConfirm}
          >
            Proceed
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
