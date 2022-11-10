import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.white.main};
  margin: 10px;
  height: 167px;
  border-radius: 4px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  padding: 12px 16px 12px 16px;
  justify-content: space-between;
`;

export const Username = styled.Text`
  color: #070707;
`;

export const Repository = styled.Text`
  color: #070707;
  font-weight: 700;
  max-width: 190px;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Line = styled.View`
  width: 100%;
  opacity: 0.9;
  border: 1px solid #dadada;
`;

export const FooterCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  padding: 8px 10px 8px 10px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.secondary.main};
`;

export const TitleButton = styled.Text`
  font-weight: 700;
  margin-left: 5px;
  color: ${({theme}) => theme.colors.primary.main};
`;

export const BoxFavorite = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ColorLanguage = styled.View`
  background-color: #F22828;
  border-radius: 8px;
  width: 8px;
  height: 8px;
`

export const BoxLanguage = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.Text`
  color: #9a9a9a;
`;

export const TextLanguage = styled.Text`
  color: #9A9A9A;
  margin-left: 5px;
`

export const TextCountFavorites = styled.Text`
  color: #9A9A9A;
`
