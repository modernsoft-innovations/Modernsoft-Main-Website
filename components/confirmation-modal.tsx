'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, XCircle, X } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  status: 'success' | 'error';
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  message,
  status
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  const title = status === 'success' ? 'Message Sent!' : 'Error';
  const buttonColor = status === 'success' 
    ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30' 
    : 'bg-red-600 hover:bg-red-700 shadow-red-500/30';

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/90 rounded-lg w-full max-w-md relative shadow-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">Message Sent!</h2>

          {/* Icon and Message */}
          <div className="mb-8">
            {status === 'success' ? (
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-gray-600">
                  {message}
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <p className="text-gray-600">
                  {message}
                </p>
              </div>
            )}
          </div>

          {/* Button */}
          <Button
            type="button"
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md inline-flex justify-center items-center"
          >
            Got it! <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

