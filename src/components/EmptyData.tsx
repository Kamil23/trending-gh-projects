import { FC } from 'react';
import styled from 'styled-components';

const EmptyDataMessage = styled.div`
  font-size: 14px;
`;
 
const EmptyData: FC = () => 
  <EmptyDataMessage>No data</EmptyDataMessage>
 
export default EmptyData;