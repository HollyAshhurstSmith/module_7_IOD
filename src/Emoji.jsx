import React from 'react';
import { useEmoji } from './EmojiContext';

function Emoji() {
  const { emoji, toggleEmoji } = useEmoji();

  return (
    <div style={{ fontSize: '2rem', textAlign: 'center' }}>
      <p>Current Mood: {emoji}</p>
      <button onClick={toggleEmoji}>Change Mood</button>
    </div>
  );
}

export default Emoji;
