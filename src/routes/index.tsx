import { useContext } from 'react';
import UserContext from '../contexts/user';
import {ModalConfig, Details} from '../components';

import {NavigationContainer} from '@react-navigation/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import {Repositories, Favorites} from '../screens';

const Routes: React.FC = () => {
  const {user, setUser} = useContext(UserContext);

  const handleOpenOrCloseModalConfig = (status: boolean) => {
    setUser({
      ...user,
      modalConfig: status
    })
  }

  const handleOpenOrCloseModalDetails = (status: boolean) => {
    setUser({
      ...user,
      modalDetails: status
    })
  }

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'Repositórios') {
                return <IconAntDesign name="github" size={20} color={color} />;
              } else if (route.name === 'Favoritos') {
                return <IconFontAwesome name="star" size={20} color={color} />;
              }
            },
            tabBarActiveTintColor: '#1976D2',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Repositórios" component={Repositories} />
          <Tab.Screen name="Favoritos" component={Favorites} />
        </Tab.Navigator>
      </NavigationContainer>
      <ModalConfig show={user.modalConfig} close={() => handleOpenOrCloseModalConfig(!user.modalConfig)} />
      <Details show={user.modalDetails} close={() => handleOpenOrCloseModalDetails(!user.modalDetails)} />
    </>
  );
};

export default Routes;
