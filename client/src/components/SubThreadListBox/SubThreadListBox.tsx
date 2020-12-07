import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSubThreadState } from '@/hooks';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSubThreadRequest } from '@/store/modules/subThread.slice';
import { isNumberTypeValue } from '@/utils/utils';
import { ThreadInputBox } from '@/components/common';
import { INPUT_BOX_TYPE } from '@/utils/constants';
import ParentThread from './ParentThread/ParentThread';
import SubThreadList from './SubThreadList/SubThreadList';
import ReplyCountHorizon from './ReplyCountHorizon/ReplyCountHorizon';

const Container = styled.div`
  background-color: green;
`;

interface RightSideParams {
  channelId: string | undefined;
  rightSideType: string | undefined;
  threadId: string | undefined;
}

const SubThreadListBox: React.FC = () => {
  const dispatch = useDispatch();
  const { channelId, threadId }: RightSideParams = useParams();
  const { parentThread, subThreadList } = useSubThreadState();

  useEffect(() => {
    dispatch(getSubThreadRequest({ parentId: Number(threadId) }));
  }, [threadId]);

  return (
    <>
      {isNumberTypeValue(threadId) && parentThread !== undefined ? (
        <Container>
          <div>subThreadListBox</div>
          <ParentThread parentThread={parentThread} />
          <ReplyCountHorizon subCount={parentThread.subCount} />
          <SubThreadList subThreadList={subThreadList} />
          <ThreadInputBox inputBoxType={INPUT_BOX_TYPE.SUBTHREAD} />
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default SubThreadListBox;
