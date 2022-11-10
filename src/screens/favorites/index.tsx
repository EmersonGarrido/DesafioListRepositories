import {useContext} from 'react';
import UserContext from '../../contexts/user';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native';
import {CardRepository} from '../../components';
import * as S from './styles';

const Favorites: React.FC = () => {
  const {user, favorites} = useContext(UserContext);
  return (
    <S.Container>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={favorite => {
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
      ) : (
        <S.BoxEmptyList>
          <Text
            style={{
              textAlign: 'center',
            }}>
            Você ainda não possui uma lista de favoritos
          </Text>
        </S.BoxEmptyList>
      )}
    </S.Container>
  );
};

export default Favorites;
