import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
`;

export const Header = styled.View`
  background-color: #000;
  height: 56px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding-left: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`;

export const Button = styled.TouchableOpacity``;

export const CardInfos = styled.View`
  background-color: #fff;
  width: 100%;
  padding: 15px;
`;

export const FooterActions = styled.View`
  bottom: 0;
  position: absolute;
  background-color: #fff;
  width: 100%;
  padding: 15px;
`;

export const Username = styled.Text`
  color: #070707;
  font-size: 18px;
`;

export const Repository = styled.Text`
  color: #070707;
  font-weight: 700;
  font-size: 18px;
  max-width: 220px;
`;

export const BoxDescription = styled.View`
  margin-top: 10px;
`;

export const Description = styled.Text`
  color: #9a9a9a;
`;

export const ColorLanguage = styled.View`
  background-color: #f22828;
  border-radius: 8px;
  width: 8px;
  height: 8px;
`;

export const BoxLanguage = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const TextLanguage = styled.Text`
  margin-left: 10px;
`;

export const ButtonViewRepository = styled.TouchableOpacity`
  width: 100%;
  height: 42px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TitleButtonViewRepository = styled.Text`
  color: #1976D2;
  font-weight: 600;
  margin-right: 5px;
`

export const ButtonFavorite = styled.TouchableOpacity`
  width:100%;
  height: 42px;
  border-radius: 5px;
  background-color: #FFD02C;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  flex-direction: row;
`;

export const TitleButtonFavorite = styled.Text`
  color: #000;
  font-weight: 600;
  margin-right: 10px;
`
