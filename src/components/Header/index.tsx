import { useContext } from 'react';
import UserContext from '../../contexts/user'

import IconIonicons from 'react-native-vector-icons/Ionicons';

import * as S from './styles';

const Header: React.FC = () => {
  const { user, setUser } = useContext(UserContext);

  const handleOpenOrCloseModalConfig = (status: boolean) => {
    setUser({
      ...user,
      modalConfig: status
    })
  }

  return (
    <S.Container>
      <S.Title>WeFit</S.Title>
      <S.TouchableOpacity onPress={() => handleOpenOrCloseModalConfig(!user.modalConfig)}>
        <IconIonicons name="settings-sharp" size={20} color="#000" />
      </S.TouchableOpacity>
    </S.Container>
  );
};

export default Header;
