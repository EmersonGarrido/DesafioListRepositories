import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Favorite {
  id: number;
  username: string;
  repository: string;
  owner: string;
  description: string;
  stargazersCount: number;
  language: string;
  htmlUrl: string;
}

interface UserProps {
  username: string;
  loading: boolean;
  details: {
    username: string;
    repository: string;
    owner: string;
    description: string;
    stargazersCount: number;
    language: string;
    htmlUrl: string;
  };
  modalConfig: boolean;
  loadingSaveModalConfig: boolean;
  modalDetails: boolean;
}

interface UserContextProps {
  user: UserProps;
  setUser: (user: UserProps) => void;
  favorites: Favorite[];
  setFavorite: (favorite: Favorite) => void;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

interface ReactProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<ReactProps> = ({children}) => {
  const [favorites, setFavorite] = useState<Favorite[]>([]);

  const initialUser: UserProps = {
    username: 'EmersonGarrido',
    loading: true,
    modalConfig: false,
    loadingSaveModalConfig: false,
    modalDetails: false,
    details: {
      username: '',
      repository: '',
      description: '',
      owner: '',
      stargazersCount: 0,
      language: '',
      htmlUrl: '',
    },
  };

  const [user, setUser] = useState<UserProps>(initialUser);

  return (
    <UserContext.Provider
      value={{
        user,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
