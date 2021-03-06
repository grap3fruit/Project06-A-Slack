import React from 'react';
import styled from 'styled-components';
import { Thread } from '@/types/thread';
import { flex } from '@/styles/mixin';
import EmojiBoxItem from './EmojiBoxItem/EmojiBoxItem';

const Container = styled.div`
  ${flex('center', 'flex-start', 'row')};
  margin: 0.4rem 0 0 0;
`;

interface EmojiBoxProps {
  thread: Thread;
}

const EmojiBox: React.FC<EmojiBoxProps> = ({ thread }: EmojiBoxProps) => {
  return (
    <Container>
      {thread.emoji.length > 0 &&
        thread.emoji.map((emoji) => {
          return <EmojiBoxItem key={emoji.id} emoji={emoji} thread={thread} />;
        })}
    </Container>
  );
};

export default EmojiBox;
