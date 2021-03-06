import { SOCKET_MESSAGE_TYPE } from '@/utils/constants';

interface EmojiOfThread {
  id: number;
  userList: number[];
}

interface Thread {
  id?: number; // 스레드 생성 요청 이벤트에는 id가 없음
  userId: number;
  channelId: number;
  parentId: number | null;
  content: string;
  url: string;
  isEdited: number;
  isPinned: number;
  isDeleted: number;
  createdAt?: string; // 생성 요청시에 없음
  updatedAt?: string; // 생성 요청시에 없음
  emoji: EmojiOfThread[] | null;
  subCount: number;
  subThreadUserId1: number | null;
  subThreadUserId2: number | null;
  subThreadUserId3: number | null;
  email: string;
  displayName: string;
  phoneNumber: string | null;
  image: string;
}

export interface JoinedUser {
  userId: number;
  displayName: string;
  image: string;
}

interface User {
  id: number;
  email: string;
  displayName: string;
  phoneNumber: string | null;
  image: string;
  lastChannelId?: number | null;
  createdAt?: string;
  updatedAt?: string;
}

interface Channel {
  id?: number;
  ownerId: number;
  name: string;
  channelType: number;
  topic: string;
  isPublic: number;
  memberCount: number;
  description: string;
  createdAt?: string;
  updatedAt?: string;
  unreadMessage?: boolean;
}

type DM = Channel;

export interface ThreadEvent {
  type: string;
  subType: string;
  room: string;
  thread: Thread;
  parentThread?: Thread;
}

export interface EmojiEvent {
  type: string;
  room: string;
  emoji?: EmojiOfThread[];
  emojiId?: number;
  userId?: number;
  threadId?: number;
}

export interface UserEvent {
  type: string;
  user?: User;
  channelId?: number;
  parentThreadId: string | undefined;
}

export interface ChannelEvent {
  type: string;
  subType: string;
  channel?: Channel;
  users?: JoinedUser[];
  room?: string;
}

export interface DMEvent {
  type: string;
  dm: DM;
}

export interface RoomEvent {
  room: string;
}

export type SocketEvent = ThreadEvent | EmojiEvent | UserEvent | ChannelEvent | DMEvent;

export const isThreadEvent = (event: SocketEvent): event is ThreadEvent => {
  return (event as ThreadEvent).type === SOCKET_MESSAGE_TYPE.THREAD;
};

export const isEmojiEvent = (event: SocketEvent): event is EmojiEvent => {
  return (event as EmojiEvent).type === SOCKET_MESSAGE_TYPE.EMOJI;
};

export const isUserEvent = (event: SocketEvent): event is UserEvent => {
  return (event as UserEvent).type === SOCKET_MESSAGE_TYPE.USER;
};

export const isChannelEvent = (event: SocketEvent): event is ChannelEvent => {
  return (event as ChannelEvent).type === SOCKET_MESSAGE_TYPE.CHANNEL;
};

export const isDMEvent = (event: SocketEvent): event is DMEvent => {
  return (event as DMEvent).type === SOCKET_MESSAGE_TYPE.DM;
};
