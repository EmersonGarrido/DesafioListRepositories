import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FavoriteProps {
  id: number;
  username: string;
  repository: string;
  avatarUrl: string;
  description: string;
  stargazersCount: number;
  language: string;
  htmlUrl: string;
  favorite: boolean;
}

interface UserProps {
  username: string;
  loading: boolean;
  details: {
    id: number;
    username: string;
    repository: string;
    avatarUrl: string;
    description: string;
    stargazersCount: number;
    language: string;
    htmlUrl: string;
    favorite: boolean;
  };
  modalConfig: boolean;
  loadingModalConfig: boolean;
  loadingSaveModalConfig: boolean;
  modalDetails: boolean;
}

interface UserContextProps {
  user: UserProps;
  setUser: (user: UserProps) => void;
  favorites: FavoriteProps[];
  handleUpdateFavorites: (favorite: FavoriteProps) => void;
  handleRemoveFavorites: (favorite: FavoriteProps) => void;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

interface ReactProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<ReactProps> = ({children}) => {
  const [favorites, setFavorites] = useState<FavoriteProps[]>([]);

  const initialUser: UserProps = {
    username: 'EmersonGarrido',
    loading: true,
    modalConfig: false,
    loadingModalConfig: false,
    loadingSaveModalConfig: false,
    modalDetails: false,
    details: {
      id: 0,
      username: '',
      repository: '',
      description: '',
      avatarUrl: '',
      stargazersCount: 0,
      language: '',
      htmlUrl: '',
      favorite: false,
    },
  };

  const [user, setUser] = useState<UserProps>(initialUser);

  async function handleUpdateFavorites(Favorite: FavoriteProps) {
    const saveFavorite = [
      ...favorites,
      {
        ...Favorite,
      },
    ];
    setFavorites([...saveFavorite]);

    await AsyncStorage.setItem('@wefit-favorite', JSON.stringify(saveFavorite));
  }

  async function handleRemoveFavorites(Favorite: FavoriteProps) {
    const resultFilterFavorites = favorites.filter(
      item => item.id !== Favorite.id,
    );

    const saveFavorite = [...resultFilterFavorites];
    setFavorites([...saveFavorite]);

    await AsyncStorage.setItem('@wefit-favorite', JSON.stringify(saveFavorite));
  }

  async function handleGetFavorites() {
    const response = await AsyncStorage.getItem('@wefit-favorite');
    if (response !== null) {
      setFavorites(JSON.parse(response));
    }
  }

  useEffect(() => {
    handleGetFavorites();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        favorites,
        handleUpdateFavorites,
        handleRemoveFavorites,
      }}>
      {children}
    </UserContext.Provider>
  );
};;;

export default UserContext;
