import React from 'react';
import styled from 'styled-components';
import { INPUT_BOX_TYPE } from '@/utils/constants';
import { ThreadInputBox } from '@/components';
import ThreadListHeader from './ThreadListHeader/ThreadListHeader';
import ThreadList from './ThreadList/ThreadList';

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${(props) => props.theme.color.lightGray2};
`;

const ThreadListBox = () => {
  return (
    <Container>
      <ThreadListHeader />
      <ThreadList />
      <ThreadInputBox inputBoxType={INPUT_BOX_TYPE.THREAD} />
    </Container>
  );
};

export default ThreadListBox;
