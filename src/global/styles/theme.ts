import { RFValue } from 'react-native-responsive-fontsize';

export default {
  fonts: {
    light: 'Inter_300Light',
    regular: 'Inter_400Regular',
    semibold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },
  typography: {
    title: RFValue(24),
    subtitle: RFValue(16),
    normal: RFValue(16),
    small: RFValue(14),
    tiny: RFValue(12)
  },
  colors: {
    primary: {
      main: '#FFD02C',
      hover: '#1976D2',
      pressed: 'rgba(0, 79, 199, 1)',
      disabled: 'rgba(47, 129, 255, .3)',
    },
    secondary: {
      main: '#FAF3DC'
    },
    error: {
      main: 'rgba(255, 42, 122, 1)'
    },
    success: {
      main: 'rgba(111, 207, 151, 1)',
    },
    info: {
      main: 'rgba(43, 147, 242, 1)',
    },
    warning: {
      main: 'rgba(255, 194, 76, 1)'
    },
    black: 'rgba(35, 35, 35, 1)',
    gray: {
      20: 'rgba(119, 128, 160, .2)',
      40: 'rgba(119, 128, 160, .4)',
      60: 'rgba(119, 128, 160, .6)',
      80: 'rgba(119, 128, 160, .8)',
      100: 'rgba(119, 128, 160, 1)'
    },
    white: {
      main: '#fff'
    },
    background: '#E5E5E5',
  },
}
