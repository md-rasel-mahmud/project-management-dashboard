"use client";
import React from "react";
import { Alert } from "antd";
import { useToastStore } from "@/store/useToastStore";

const ToastProvider = ({ children }) => {
  const { toasts, removeToast } = useToastStore();

  return (
    <>
      <div className="fixed top-2 left-1/2 -translate-x-1/2">
        {toasts.map((toast) => (
          <Alert
            key={toast.id}
            message={toast.message}
            type={toast.type}
            closable
            style={{ marginBottom: 10 }}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
      {children}
    </>
  );
};

export default ToastProvider;
