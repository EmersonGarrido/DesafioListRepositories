import {useContext, useEffect, useState} from 'react';
import UserContext from '../../contexts/user';
import {Image, View} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import * as S from './styles';

interface CardRepositoryProps {
  id: number;
  username: string;
  repository: string;
  description: string;
  avatarUrl: string;
  stargazersCount: number;
  language: string;
  htmlUrl: string;
  viewButtonFavorite?: boolean;
}

const CardRepository: React.FC<CardRepositoryProps> = ({
  id,
  username,
  repository,
  description,
  avatarUrl,
  stargazersCount,
  language,
  htmlUrl,
  viewButtonFavorite,
}) => {
  const {
    user,
    setUser,
    favorites,
    handleUpdateFavorites,
    handleRemoveFavorites,
  } = useContext(UserContext);
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpenDetails = () => {
    setUser({
      ...user,
      details: {
        id,
        username,
        repository,
        avatarUrl,
        description,
        stargazersCount,
        language,
        htmlUrl,
        favorite,
      },
      modalDetails: !user.modalDetails,
    });
  };

  function handleFavorite() {
    setLoading(true);

    const item = {
      id,
      username,
      repository,
      description,
      avatarUrl,
      stargazersCount,
      language,
      htmlUrl,
      favorite: favorite,
    };
    if (favorite) {
      handleRemoveFavorites(item);
    } else {
      handleUpdateFavorites(item);
    }

    setUser({
      ...user,
      details: {
        ...user.details,
        favorite: !user.details.favorite,
      },
    });
    setLoading(false);
  }

  useEffect(() => {
    const find = favorites.find(item => item.id === id);
    if (find) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, []);

  useEffect(() => {
    const find = favorites.find(item => item.id === id);
    if (find) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [favorites]);

  return (
    <S.Container onPress={handleOpenDetails}>
      <S.HeaderCard>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <S.Username>{username}</S.Username>
          <S.Repository numberOfLines={1} ellipsizeMode="tail">
            /{repository}
          </S.Repository>
        </View>
        <Image
          source={{
            uri: avatarUrl,
          }}
          style={{
            width: 29,
            height: 29,
            borderRadius: 29 / 2,
            overflow: 'hidden',
          }}
          resizeMode={'cover'}
        />
      </S.HeaderCard>
      <S.Line />

      <S.Description numberOfLines={1} ellipsizeMode="tail">
        {description ? description : 'Sem descri????o no momento'}
      </S.Description>

      <S.FooterCard>
        {viewButtonFavorite && (
          <S.TouchableOpacity
            onPress={handleFavorite}
            style={{
              backgroundColor: favorite ? '#fff' : '#FAF3DC',
            }}>
            <IconFontAwesome
              name="star"
              size={16}
              color={favorite ? '#000' : '#FFD02C'}
            />
            <S.TitleButton
              style={{
                color: favorite ? '#000' : '#FFD02C',
              }}>
              {favorite ? 'Desfavoritar' : 'Favoritar'}
            </S.TitleButton>
          </S.TouchableOpacity>
        )}

        <S.BoxFavorite>
          <IconFontAwesome
            name="star"
            size={16}
            color="#FFD02C"
            style={{marginRight: 5}}
          />
          <S.TextCountFavorites>{stargazersCount}</S.TextCountFavorites>
        </S.BoxFavorite>

        <S.BoxLanguage>
          <S.ColorLanguage />
          <S.TextLanguage numberOfLines={1} ellipsizeMode="tail">
            {language ? language : 'Linguagem Indisponivel'}
          </S.TextLanguage>
        </S.BoxLanguage>
      </S.FooterCard>
    </S.Container>
  );
};

export default CardRepository;
