import React from 'react';
import { useChannel } from '@/hooks/useChannel';
import styled from 'styled-components';
import DetailHeader from './DeatailHeader/DetailHeader';

interface Props {
  display: boolean;
}
const StyledDetailBox = styled.div<Props>`
  display: ${(props: { display: boolean }) => (props.display ? 'block' : 'none')};
`;
const DetailBox = () => {
  const { detailVisible } = useChannel();

  return (
    <StyledDetailBox display={detailVisible}>
      <DetailHeader />
    </StyledDetailBox>
  );
};

export default DetailBox;
