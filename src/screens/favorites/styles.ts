import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const BoxEmptyList = styled.View`
  padding: 20px;
`;
