import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { AlertWithoutButton } from './index.style';

interface AlertProps {
  message: string;
}

interface AlertPortalProps {
  children: ReactNode;
}

const alertRoot = document.createElement('div');
alertRoot.setAttribute('id', 'alert');
document.body.appendChild(alertRoot);

export const Alert = ({ message }: AlertProps) => {
  return <AlertWithoutButton>{message}</AlertWithoutButton>;
};

const AlertPortal = ({ children }: AlertPortalProps) => {
  return createPortal(children, alertRoot);
};

export default AlertPortal;
