'use client';

import { useEffect, useState } from 'react';

export default function Notification() {
  const [showNotification, setShowNotification] = useState(false); // Default to not showing
  const [countdown, setCountdown] = useState(10); // 10 seconds countdown

  useEffect(() => {
    const lastVisitTimestamp = sessionStorage.getItem('homeVisitTimestamp');
    const now = Date.now();

    if (lastVisitTimestamp) {
      const elapsedTime = (now - parseInt(lastVisitTimestamp, 10)) / 1000; // Time in seconds
      if (elapsedTime > 10) {
        setShowNotification(true); // Show notification if more than 30 seconds have passed
      }
    } else {
      setShowNotification(true); // First visit, show notification
    }

    // Update the timestamp in sessionStorage
    sessionStorage.setItem('homeVisitTimestamp', now.toString());
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      setShowNotification(false); // Auto-dismiss after countdown ends
      return;
    }
    const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);

    return () => clearTimeout(timer); // Clean up on unmount
  }, [countdown]);

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    showNotification && (
      <div className="fixed bottom-6 right-6 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-80 flex items-start space-x-4 animate-fadeIn z-50">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        {/* Notification Content */}
        <div>
          <p className="font-bold text-lg mb-1">Hi there!</p>
          <p className="text-sm text-gray-300">
            I’m crafting this project in my free time to showcase my skills. Let’s connect—I’d love to share more and collaborate!
          </p>
        </div>

        {/* Countdown */}
        <div className="ml-auto text-gray-500 text-xs font-semibold self-end">
          {countdown}s
        </div>
      </div>
    )
  );
}
