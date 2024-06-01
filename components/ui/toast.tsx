"use client";

import { type Message } from "react-hook-form";
import toast, { type ToastOptions, Toaster } from "react-hot-toast";

export const ReactHotToaster = () => <Toaster gutter={32} />;

export const showSuccessToast = (msg: Message, opts?: ToastOptions) => {
  toast(msg, {
    ...opts,
    className:
      "border !shadow !shadow-green-500/50 border-green-500 !text-primary dark:!text-primary-foreground dark:border-green-500 !bg-green-50 dark:!bg-green-50 !rounded-2xl !font-semibold !px-3 !py-2 !text-sm",
  });
};

export const showInfoToast = (msg: Message, opts?: ToastOptions) => {
  toast(msg, {
    ...opts,

    className:
      "border !shadow !shadow-blue-500/50 border-blue-500 !text-primary dark:!text-primary-foreground dark:border-blue-500 !bg-blue-50 dark:!bg-blue-50 !rounded-2xl !font-semibold !px-3 !py-2 !text-sm",
  });
};

export const showWarningToast = (msg: Message, opts?: ToastOptions) => {
  toast(msg, {
    ...opts,

    className:
      "border !shadow !shadow-yellow-500/50 border-yellow-500 !text-primary dark:!text-primary-foreground dark:border-yellow-500 !bg-yellow-50 dark:!bg-yellow-50 !rounded-2xl !font-semibold !px-3 !py-2 !text-sm",
  });
};

export const showErrorToast = (msg: Message, opts?: ToastOptions) => {
  toast(msg, {
    ...opts,

    className:
      "border !shadow !shadow-red-500/50 border-red-500 !text-primary dark:!text-primary-foreground dark:border-red-500 !bg-red-50 dark:!bg-red-50 !rounded-2xl !font-semibold !px-3 !py-2 !text-sm",
  });
};

export const showLoadingToast = (msg: Message, opts?: ToastOptions) => toast(msg, {
  ...opts,
  className:
      "bg-foreground border !text-primary dark:!text-primary-foreground !shadow  !rounded-2xl !font-semibold !px-3 !py-2 !text-sm",
});

export const hideToast = (id: string) => {
  toast.dismiss(id);
};
