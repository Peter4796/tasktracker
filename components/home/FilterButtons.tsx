import { View, TouchableOpacity } from 'react-native';
import Text from '@/components/text';
import { Colors } from '@/constants/Colors';
import { ThemeOptions } from '@/types/theme';
import { createStyles } from './styles/TaskList.styles';

interface FilterButtonsProps {
  activeTab: string;
  onFilterChange: (status: string | null) => void;
}

export const FilterButtons = ({ activeTab, onFilterChange }: FilterButtonsProps) => {
  const styles = createStyles('light');
  
  return (
    <View style={styles.filterContainer}>
      {['All', 'Pending', 'In Progress', 'Done'].map((status) => (
        <TouchableOpacity
          key={status}
          onPress={() => onFilterChange(status === 'All' ? null : status)}
          style={[
            styles.filterButton,
            activeTab === status && styles.activeFilterButton,
          ]}
        >
          <Text>{status}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}; 