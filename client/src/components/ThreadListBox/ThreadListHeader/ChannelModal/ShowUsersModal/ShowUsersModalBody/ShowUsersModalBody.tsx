import React from 'react';
import styled from 'styled-components';
import { flex } from '@/styles/mixin';
import { useChannelState } from '@/hooks';
import { JoinedUser } from '@/types';
import { CancelButton as CB } from '@/styles/shared';

const Container = styled.div`
  padding: 0 4px;
  margin: 1rem 0 3rem 0;
`;

const Remove = styled(CB)`
  font-size: 1rem;
  font-weight: bold;
  background: ${(props) => props.theme.color.white};
  border: 1px ${(props) => props.theme.color.gray3} solid;
  border-radius: 3px;
  margin-left: auto;
`;

const SearchedUserContainer = styled.div`
  width: 100%;
  height: 15rem;
  overflow-y: scroll;
  padding: 0 24px;
`;

const SearchedUserBox = styled.div`
  padding: 8px;
  margin: 0.5rem 0;
  border-radius: 5px;
  ${flex('center', 'flex-start')}
  cursor: pointer;
  color: ${(props) => props.theme.color.lightBlack};
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.color.blue1};
  }
`;

const ProfileImg = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  object-fit: cover;
  border-radius: 5px;
`;

const UserName = styled.div`
  font-size: 1rem;
  margin: 0 0.7rem;
  padding-bottom: 0.25rem;
  font-weight: bold;
`;

const ShowUsersModalBody: React.FC = () => {
  const { users } = useChannelState();

  return (
    <Container>
      <SearchedUserContainer>
        {users?.map((user: JoinedUser) => (
          <SearchedUserBox key={user.userId}>
            <ProfileImg src={user.image} />
            <UserName>{user.displayName}</UserName>
            <Remove>Remove</Remove>
          </SearchedUserBox>
        ))}
      </SearchedUserContainer>
    </Container>
  );
};

export default ShowUsersModalBody;
