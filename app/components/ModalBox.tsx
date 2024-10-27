import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";

interface ModalBoxProps {
  show: boolean;
  isSuccess: boolean;
  onClose: () => void;
}

const ModalBox: React.FC<ModalBoxProps> = ({ show, isSuccess, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 5000); // Close modal after 5 seconds
      return () => clearTimeout(timer); // Clear timer if modal is closed early
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-black w-full text-center"
      >
        <div className="flex justify-center mb-4">
          {isSuccess ? (
            <CheckCircleIcon className="text-green-500 h-12 w-12" />
          ) : (
            <XCircleIcon className="text-red-500 h-12 w-12" />
          )}
        </div>
        <p className="text-lg font-semibold mb-4">
          {isSuccess
            ? "Message sent successfully!"
            : "Failed to send message. Please try again."}
        </p>
      </motion.div>
    </div>
  );
};

export default ModalBox;
