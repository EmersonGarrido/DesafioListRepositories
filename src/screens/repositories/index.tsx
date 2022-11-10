import { useEffect, useState, useContext } from 'react';
import UserContext from '../../contexts/user';
import axios from 'axios';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import { FlatList } from 'react-native';
import {CardRepository} from '../../components';

import * as S from './styles';

const Repositories: React.FC = () => {
  const {user, setUser} = useContext(UserContext);
  const [repositories, setRepositories] = useState([]);

  async function handleRepositories() {
    const response = await axios({
      method: 'GET',
      url: `https://api.github.com/users/${user.username}/repos`,
    });
    setRepositories(response.data);

    setUser({
      ...user,
      loading: false,
      modalConfig: false,
      loadingModalConfig: false,
      loadingSaveModalConfig: false,
    });
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
        <View style={{
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
                }
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
