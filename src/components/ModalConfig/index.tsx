import React, {useEffect, useState, useContext} from 'react';
import UserContext from '../../contexts/user';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import * as S from './styles';

const {height} = Dimensions.get('window');

const ModalConfig: React.FC = ({show, close}) => {
  const [text, onChangeText] = React.useState('Nome do usuário');
  const {user, setUser} = useContext(UserContext);
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {
        useNativeDriver: true,
        toValue: 0,
        duration: 100,
      }),
      Animated.timing(state.opacity, {
        useNativeDriver: true,
        toValue: 1,
        duration: 300,
      }),
      Animated.spring(state.modal, {
        useNativeDriver: true,
        toValue: 0,
        bounciness: 5,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, {
        useNativeDriver: true,
        toValue: height,
        duration: 250,
      }),
      Animated.timing(state.opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 300,
      }),
      Animated.timing(state.container, {
        useNativeDriver: true,
        toValue: height,
        duration: 100,
      }),
    ]).start();
  };

  useEffect(() => {
    if (show) {
      openModal();
    } else {
      closeModal();
    }
  }, [show]);

  const handleUpdateUsername = () => {
    setUser({
      ...user,
      username: text,
      loadingSaveModalConfig: true,
    });
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: state.opacity,
          transform: [{translateY: state.container}],
        },
      ]}>
      <Animated.View
        style={[
          styles.modal,
          {
            transform: [{translateY: state.modal}],
          },
        ]}>
        <View style={styles.indicator} />

        <S.Title>Alterar usuário selecionado</S.Title>

        <S.BoxInput>
          <S.Label>Nome do usuário</S.Label>
          <S.Input underlineColorAndroid='transparent' onChangeText={onChangeText} />
        </S.BoxInput>
        <View style={{flexDirection: 'row'}}>
          <S.ButtonCancel
            disabled={user.loadingSaveModalConfig}
            onPress={close}>
            <Text style={{color: '#1976D2', fontWeight: '600'}}>CANCELAR</Text>
          </S.ButtonCancel>
          <S.ButtonSave
            disabled={user.loadingSaveModalConfig}
            onPress={handleUpdateUsername}>
            {user.loadingSaveModalConfig ? (
              <ActivityIndicator color="#fff"/>
            ) : (
              <Text style={{color: '#fff', fontWeight: '600'}}>SALVAR</Text>
            )}
          </S.ButtonSave>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '30%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  indicator: {
    width: 30,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 15,
  },
});

export default ModalConfig;
