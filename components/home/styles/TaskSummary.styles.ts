import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ThemeOptions } from '@/types/theme';

export const createStyles = (theme: ThemeOptions) => StyleSheet.create({
  taskSummaryView: {
    backgroundColor: Colors[theme].background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  taskSummaryCard: {
    backgroundColor: Colors[theme].card,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 15,
    padding: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors[theme].text,
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: Colors[theme].border,
    borderRadius: 4,
    marginRight: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.main,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors[theme].text,
  },
  addView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsText: {
    fontSize: 14,
    color: Colors[theme].text,
    fontWeight: '500',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.main,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#fff',
    marginRight: 5,
    fontWeight: '500',
  }
}); 