import React from 'react';

export interface ITaskFooter {
  onStatusChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (
    e: React.MouseEvent<HTMLElement> | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}
