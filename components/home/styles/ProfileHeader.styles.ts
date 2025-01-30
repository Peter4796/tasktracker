import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ThemeOptions } from '@/types/theme';

export const createStyles = (theme: ThemeOptions) => StyleSheet.create({
  homeView: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.main,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center'
  },
  profileView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  details: {
    paddingLeft: 15
  },
  userProfileImg: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  tasksText: {
    color: Colors[theme].text,
    fontWeight: '500'
  },
  mesText: {
    fontSize: 20,
    color: Colors[theme].text,
    fontWeight: 'bold'
  }
}); 