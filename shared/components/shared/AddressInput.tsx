'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="8f4afcb5a9cdcdba2615b70343acacf11ecdc7f0"
      onChange={(data) => onChange?.(data?.value)}
    />

  );
};
