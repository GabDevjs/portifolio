import { ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode, ReactPortal } from "react";
import { ToastContentProps, toast } from "react-toastify";

export const createSuccessToast = (message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | ((props: ToastContentProps<unknown>) => ReactNode) | null | undefined) => {
  toast.success(message, {
    position: "top-right"
  });
}

export const createErrorToast = (message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | ((props: ToastContentProps<unknown>) => ReactNode) | null | undefined) => {
  toast.error(message, {
    position: "top-right"
  });
}