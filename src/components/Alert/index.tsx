import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { AlertWithoutButton } from "./index.style";

interface AlertProps {
  message: string;
}

interface AlertPortalProps {
  children: ReactNode;
}

export const Alert = ({ message }: AlertProps) => {
  return <AlertWithoutButton>{message}</AlertWithoutButton>;
};

const AlertPortal = ({ children }: AlertPortalProps) => {
  const alert = document.querySelector("#alert");

  if (!alert) {
    throw Error("alert창을 찾을 수 없습니다.");
  }

  return createPortal(children, alert);
};

export default AlertPortal;
