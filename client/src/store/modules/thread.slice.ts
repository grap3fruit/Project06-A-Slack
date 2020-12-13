/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmojiOfThread, Thread, ThreadResponse } from '@/types';

interface ThreadState {
  threadList: Thread[] | null;
  canScroll: boolean;
  loading: boolean;
  nextThreadId: number | null;
  firstScrollUsed: boolean;
}

const threadListState: ThreadState = {
  threadList: null,
  canScroll: false,
  loading: false,
  nextThreadId: null,
  firstScrollUsed: false,
};

export interface getThreadRequestPayload {
  channelId: number;
  nextThreadId?: number | null;
}
export interface getThreadSuccessPayload {
  threadList: Thread[];
  canScroll: boolean;
  nextThreadId: number | null;
}

export interface createThreadRequestPayload {
  userId: number;
  channelId: number;
  content: string;
  parentId: number | null;
}

// 리듀서
const threadSlice = createSlice({
  name: 'thread',
  initialState: threadListState,
  reducers: {
    getThreadRequest(state, action: PayloadAction<getThreadRequestPayload>) {
      state.loading = true;
      state.nextThreadId = null;
      state.firstScrollUsed = false;
    },
    getThreadSuccess(state, action: PayloadAction<getThreadSuccessPayload>) {
      const { threadList, nextThreadId } = action.payload;
      state.loading = false;
      state.threadList = threadList;
      console.log('set to next', nextThreadId);
      state.nextThreadId = nextThreadId;
    },
    getThreadFailure(state, action) {
      state.loading = false;
    },
    addThreadListRequest(state, action: PayloadAction<getThreadRequestPayload>) {
      state.loading = true;
    },
    addThreadListSuccess(
      state,
      action: PayloadAction<{ threadList: Thread[]; nextThreadId: number }>,
    ) {
      const { threadList, nextThreadId } = action.payload;
      state.loading = false;
      if (state.threadList && threadList.length) {
        state.threadList = threadList.concat(state.threadList);
      }
      state.nextThreadId = nextThreadId;
    },
    addThreadListFailure(state) {
      state.loading = false;
    },
    createThreadRequest(state, action: PayloadAction<createThreadRequestPayload>) {},
    createThreadSuccess(state, action: PayloadAction<ThreadResponse>) {},
    createThreadFailure(state, action) {},
    addThread(state, action) {
      if (state.threadList?.length) {
        state.threadList.push(action.payload.thread);
      } else {
        state.threadList = [action.payload.thread];
      }
    },
    updateSubThreadInfo(
      state,
      { payload }: PayloadAction<{ threadId: number; subThreadUserId: number }>,
    ) {
      const { threadId, subThreadUserId } = payload;
      const targetThread = state.threadList?.find((t) => t.id === threadId);
      if (targetThread) {
        targetThread.subCount += 1;

        const subThreadUserIdList = [
          targetThread.subThreadUserId1,
          targetThread.subThreadUserId2,
          targetThread.subThreadUserId3,
        ];

        if (!subThreadUserIdList.find((uid) => uid === subThreadUserId)) {
          const emptySpaceIdx: number = subThreadUserIdList.findIndex((s) => s === null);
          if (emptySpaceIdx !== -1) {
            const key = `subThreadUserId${emptySpaceIdx + 1}`;
            targetThread[key] = subThreadUserId;
          }
        }
      }
    },
    setScrollable(state, { payload }: PayloadAction<{ canScroll: boolean }>) {
      state.canScroll = payload.canScroll;
    },
    setFirstScrollUsed(state, { payload }: PayloadAction<{ firstScrollUsed: boolean }>) {
      state.firstScrollUsed = payload.firstScrollUsed;
    },
    resetNextThreadId(state) {
      state.nextThreadId = null;
    },
    changeEmojiOfThread(
      state,
      { payload }: PayloadAction<{ emoji: EmojiOfThread[]; threadId: number }>,
    ) {
      const targetThread = state.threadList?.find(
        (thread) => Number(thread.id) === Number(payload.threadId),
      );
      if (targetThread) {
        targetThread.emoji = payload.emoji;
      }
    },
  },
});

export const THREAD = threadSlice.name;
export const {
  getThreadRequest,
  getThreadSuccess,
  getThreadFailure,
  createThreadRequest,
  createThreadSuccess,
  createThreadFailure,
  addThread,
  setScrollable,
  changeEmojiOfThread,
  updateSubThreadInfo,
  setFirstScrollUsed,
  resetNextThreadId,
  addThreadListRequest,
  addThreadListSuccess,
  addThreadListFailure,
} = threadSlice.actions; // action 나눠서 export 하기

export default threadSlice.reducer;
