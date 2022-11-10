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
  console.log(favorites);
  return (
    <S.Container>
      {user.loading ? (
        <View style={{
          padding: 20,
        }}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={favorites}
          renderItem={(favorite) => {
            return (
              <CardRepository
                id={favorite.item.id}
                username={favorite.item.username.split('/')[0]}
                repository={favorite.item.repository.split('/')[1]}
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
      )}
    </S.Container>
  );
}

export default Favorites;
