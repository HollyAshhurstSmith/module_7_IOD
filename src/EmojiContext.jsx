import React, { createContext, useState, useContext } from 'react';

const EmojiContext = createContext();

export function EmojiProvider({ children }) {
  const [emoji, setEmoji] = useState('😊'); // default happy

  const toggleEmoji = () => {
    setEmoji(prev => (prev === '😊' ? '😐' : '😊'));
  };

  return (
    <EmojiContext.Provider value={{ emoji, toggleEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
}

// Custom hook for easier usage
export const useEmoji = () => useContext(EmojiContext);
