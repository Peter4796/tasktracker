import { StyleSheet, Platform } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ThemeOptions } from '@/types/theme';

export const createStyles = (theme: ThemeOptions) => StyleSheet.create({
  upComings: {
    paddingHorizontal: 5,
    marginTop: 15
  },
  upcoingText: {
    fontSize: 18,
    color: Colors[theme].text,
    marginHorizontal: 5,
    fontWeight: 'bold'
  },
  taskContainer: {
    marginHorizontal: 5,
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: Colors[theme].background,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
    }),
  },
  taskName: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  taskDetails: {
    fontSize: 12,
    fontWeight: '500'
  },
  taskListView: {
    paddingHorizontal: 5,
    marginTop: 15
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors[theme].card,
    marginHorizontal: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  activeFilterButton: {
    backgroundColor: Colors.main,
  },
  taskListScroll: {
    maxHeight: 400,
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    color: Colors[theme].text,
  }
}); 