import {useEffect, useState, useContext} from 'react';
import UserContext from '../../contexts/user';
import axios from 'axios';
import {View, ActivityIndicator, Alert} from 'react-native';
import {FlatList} from 'react-native';
import {CardRepository} from '../../components';

import * as S from './styles';

const Repositories: React.FC = () => {
  const {user, setUser} = useContext(UserContext);
  const [repositories, setRepositories] = useState([]);

  async function handleRepositories() {
    try {
      const response = await axios({
        method: 'GET',
        url: `https://api.github.com/users/${user.username}/repos`,
      });
      console.log(response.data);
      if (response.data) {
        setRepositories(response.data);
        setUser({
          ...user,
          loading: false,
          modalConfig: false,
          loadingModalConfig: false,
          loadingSaveModalConfig: false,
        });
      }
    } catch {
      Alert.alert(
        'Perfil não encontrado',
        'Verifique o perfil informado e tente novamente',
        [
          {
            text: 'Cencelar',
            onPress: () => {
              setUser({
                ...user,
                loading: false,
                modalConfig: false,
                loadingModalConfig: false,
                loadingSaveModalConfig: false,
              });
            },
            style: 'cancel',
          },
          {
            text: 'Tentar novamente',
            onPress: () => {
              setUser({
                ...user,
                loading: false,
                modalConfig: true,
                loadingModalConfig: false,
                loadingSaveModalConfig: false,
              });
            },
          },
        ],
      );
    }
  }

  useEffect(() => {
    handleRepositories();
  }, []);

  useEffect(() => {
    handleRepositories();
  }, [user.username]);

  return (
    <S.Container>
      {user.loading ? (
        <View
          style={{
            padding: 20,
          }}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={repositories}
          renderItem={(repository: {
            item: {
              id: number;
              full_name: string;
              description: string;
              owner: {
                avatar_url: string;
              };
              stargazers_count: number;
              language: string;
              html_url: string;
            };
          }) => {
            return (
              <CardRepository
                id={repository.item.id}
                username={repository.item.full_name.split('/')[0]}
                repository={repository.item.full_name.split('/')[1]}
                description={repository.item.description}
                avatarUrl={repository.item.owner.avatar_url}
                stargazersCount={repository.item.stargazers_count}
                language={repository.item.language}
                htmlUrl={repository.item.html_url}
                viewButtonFavorite
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      )}
    </S.Container>
  );
};

export default Repositories;
