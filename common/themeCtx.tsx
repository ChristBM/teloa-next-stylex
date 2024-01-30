'use client'

import React, { createContext, useState } from 'react';

export type Color = 'default' | 'green' | 'pink' | 'orange';

const initialColor = 'default';

export interface ColorContextInterface {
  color: Color;
  setColor: React.Dispatch<React.SetStateAction<Color>>;
}

export const ColorContext = createContext<ColorContextInterface>({
  color: initialColor,
  setColor: () => {},
});

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [color, setColor] = useState<Color>(initialColor);

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
