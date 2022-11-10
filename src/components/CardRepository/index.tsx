import React, { useContext } from 'react';
import UserContext from '../../contexts/user'
import {Image, View} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import * as S from './styles';

interface CardRepositoryProps {
  fullName: string;
  description: string;
  owner: {
    avatarUrl: string;
  };
  stargazersCount: number;
  language: string;
  htmlUrl: string;
}

const CardRepository: React.FC<CardRepositoryProps> = ({
  username,
  repository,
  description,
  owner,
  stargazersCount,
  language,
  htmlUrl,
}) => {
  const { user, setUser, favorites, setFavorites } = useContext(UserContext);

  const handleOpenDetails = () => {
    setUser({
      ...user,
      details: {
        username,
        repository,
        owner,
        description,
        stargazersCount,
        language,
        htmlUrl,
      },
      modalDetails: !user.modelDetails,
    })
  };

  return (
    <S.Container onPress={handleOpenDetails}>
      <S.HeaderCard>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <S.Username>{username}</S.Username>
          <S.Repository numberOfLines={1} ellipsizeMode='tail'>/{repository}</S.Repository>
        </View>
        <Image
          source={{
            uri: owner,
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

      <S.Description numberOfLines={1} ellipsizeMode='tail'>{description ? description : 'Sem descrição no momento'}</S.Description>

      <S.FooterCard>
        <S.TouchableOpacity>
          <IconFontAwesome name="star" size={16} color="#FFD02C" />
          <S.TitleButton>Favoritar</S.TitleButton>
        </S.TouchableOpacity>
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
          <S.TextLanguage numberOfLines={1} ellipsizeMode='tail'>{language ? language : 'Linguagem Indisponivel'}</S.TextLanguage>
        </S.BoxLanguage>
      </S.FooterCard>
    </S.Container>
  );
};

export default CardRepository;
