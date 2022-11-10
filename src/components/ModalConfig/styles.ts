import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
`;

export const ButtonCancel = styled.TouchableOpacity`
  width: 170px;
  height: 42px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const ButtonSave = styled.TouchableOpacity`
  width: 170px;
  height: 42px;
  border-radius: 5px;
  background-color: #1976d2;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const Title = styled.Text`
  margin-top: 20px;
  text-align: left;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
`;

export const BoxInput = styled.View`
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 1px;
  border-color: #000;
  background-color: rgba(0, 0, 0, 0.06);
`;

export const Label = styled.Text``;

export const Input = styled.TextInput`
  padding: 0px;
  margin: 0px;
  font-weight: 600;
  text-decoration: none;
`;
