import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/modules';

const selectChannelsState = (state: RootState) => state.channel;
const selectChannels = createSelector(selectChannelsState, (channels) => channels);

const selectChannelListState = (state: RootState) => state.channel.channelList;
const selectChannelList = (idx: number) =>
  createSelector(selectChannelListState, (channelList) => channelList[idx]);

export const useChannels = () => {
  return useSelector(selectChannels);
};

export const useChannelList = (idx: number) => {
  return useSelector(selectChannelList(idx));
};