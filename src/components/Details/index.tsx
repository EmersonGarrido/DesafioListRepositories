import { useEffect, useState, useContext, useCallback } from 'react';
import UserContext from '../../contexts/user';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Linking,
} from 'react-native';

import * as S from './styles';

const {height} = Dimensions.get('window');

interface DetailsProps {
  show: boolean;
  close: () => void;
}

const Details: React.FC<DetailsProps> = ({ show, close }) => {
  const {user, favorites, handleUpdateFavorites, handleRemoveFavorites} =
    useContext(UserContext);
  const [activeButtonFavorite] = useState(user.details.favorite);
  const [loading, setLoading] = useState(false);
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

  const handlePress = useCallback(async () => {
    await Linking.openURL(user.details.htmlUrl);
  }, [user.details.htmlUrl]);

  function handleFavorite() {
    setLoading(true);
    if (user.details.favorite) {
      handleRemoveFavorites(user.details);
    } else {
      handleUpdateFavorites(user.details);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (show) {
      openModal();
    } else {
      closeModal();
    }
  }, [show]);

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
        <View style={styles.container}>
          <View>
            <S.Header>
              <S.Button onPress={close}>
                <IconIonicons name="arrow-back" size={24} color="#FFF" />
              </S.Button>
              <S.Title>Detalhes</S.Title>
            </S.Header>

            <S.CardInfos>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <S.Username>{user.details.username}</S.Username>
                <S.Repository numberOfLines={1} ellipsizeMode="tail">
                  /{user.details.repository}
                </S.Repository>
              </View>

              <S.BoxDescription>
                <S.Description>
                  {user.details?.description
                    ? user.details.description
                    : 'Sem descrição no momento'}
                </S.Description>
              </S.BoxDescription>

              <S.BoxLanguage>
                <S.ColorLanguage />
                <S.TextLanguage>
                  {user.details.language
                    ? user.details.language
                    : 'Linguagem Indisponível'}
                </S.TextLanguage>
              </S.BoxLanguage>
            </S.CardInfos>
          </View>
        </View>

        <S.FooterActions>
          <S.ButtonViewRepository onPress={handlePress}>
            <S.TitleButtonViewRepository>
              VER REPOSITÓRIO
            </S.TitleButtonViewRepository>
            <IconIonicons name="link" size={20} color="#1976D2" />
          </S.ButtonViewRepository>

          <S.ButtonFavorite
            style={{
              border: activeButtonFavorite ? 0 : 0,
              backgroundColor: activeButtonFavorite ? '#fff' : '#FFD02C',
            }}
            onPress={handleFavorite}
            disabled={loading}>
            <S.TitleButtonFavorite>
              {activeButtonFavorite ? 'DESFAVORITAR' : 'FAVORITAR'}
            </S.TitleButtonFavorite>
            <IconIonicons name="star" size={20} color="#000" />
          </S.ButtonFavorite>
        </S.FooterActions>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '100%',
    backgroundColor: '#F6F6F5',
    width: '100%',
  },
});

export default Details;
