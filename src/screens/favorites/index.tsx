import { useEffect, useState, useContext } from 'react';
import UserContext from '../../contexts/user';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import { FlatList } from 'react-native';
import { CardRepository } from '../../components';
import * as S from './styles'

const Favorites: React.FC = () => {
  const { user, favorites } = useContext(UserContext);
  return (
    <S.Container>
      <FlatList
          data={favorites}
          renderItem={(favorite) => {
            return (
              <CardRepository
                key={favorite.item.id}
                id={favorite.item.id}
                username={favorite.item.username}
                repository={favorite.item.repository}
                description={favorite.item.description}
                avatarUrl={favorite.item.avatarUrl}
                stargazersCount={favorite.item.stargazersCount}
                language={favorite.item.language}
                htmlUrl={favorite.item.htmlUrl}
                viewButtonFavorite={false}
              />
            );
          }}
      />
    </S.Container>
  );
}

export default Favorites;
