export const TIME_SEC = {
  FIVE_MINUTE: 60 * 5,
  TWO_MONTH: 60 * 60 * 24 * 60,
};

export const TIME_MILLIS = {
  FIVE_MINUTE: 1000 * 60 * 5,
};

export const TOKEN_TYPE = {
  ACCESS: 'ACCESS' as const,
  REFRESH: 'REFRESH' as const,
};

export const ERROR_MESSAGE = {
  MISSING_REQUIRED_VALUES: '필수 값 누락',
  INVALID_TOKEN: '유효하지 않은 토큰',
  WRONG_PW: '올바르지 않는 비밀번호',
  WRONG_USER: '올바르지 않는 유저 아이디',
  BLACKLIST_TOKEN: '블랙리스트 토큰',
  LOGIN_REQUIRED: '로그인 필요',
};

export const USER_DEFAULT_PROFILE_URL =
  'https://user-images.githubusercontent.com/61396464/100866119-8c399c00-34db-11eb-894f-3551297f5293.png';

export const CHANNEL_TYPE = {
  CHANNEL: 1,
  DM: 2,
};

export const INPUT_BOX_TYPE = {
  THREAD: 'thread',
  SUBTHREAD: 'subThread',
  EDIT: 'edit',
};

export const SOCKET_EVENT_TYPE = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  MESSAGE: 'message',
  ENTER_ROOM: 'enter_room',
  LEAVE_ROOM: 'leave_room',
};

export const SOCKET_MESSAGE_TYPE = {
  THREAD: 'thread',
  EMOJI: 'emoji',
  USER: 'user',
  CHANNEL: 'channel',
  DM: 'dm',
};

export const CHANNEL_SUBTYPE = {
  UPDATE_CHANNEL: 'update_channel',
  UPDATE_CHANNEL_TOPIC: 'update_channel_topic',
  UPDATE_CHANNEL_UNREAD: 'update_channel_unread',
  UPDATE_CHANNEL_USERS: 'update_channel_users',
  MAKE_DM: 'make_dm',
  FIND_AND_JOIN_CHANNEL: 'find_and_join_channel',
};

export const THREAD_SUBTYPE = {
  CREATE_THREAD: 'create_thread',
  EDIT_THREAD: 'edit_thread',
  DELETE_THREAD: 'delete_thread',
};
