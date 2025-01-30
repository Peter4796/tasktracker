import { View, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native';
import Text from '@/components/text';
import { Colors } from '@/constants/Colors';
import { ThemeOptions } from '@/types/theme';
import { Task } from '@/types/task';
import { createStyles } from './styles/TaskList.styles';
import { TaskItem, CustomTaskItem } from './TaskItem';
import { FilterButtons } from './FilterButtons';
interface TaskListProps {
  tasks: Task[];
  filteredTasks: Task[];
  activeTab: string;
  onFilterChange: (status: string | null) => void;
  theme: ThemeOptions;
}

export const TaskList = ({ 
  tasks, 
  filteredTasks, 
  activeTab, 
  onFilterChange,
  theme 
}: TaskListProps) => {
  const styles = createStyles(theme);

  return (
    <View style={styles.upComings}>
      <Text style={styles.upcoingText}>Upcoming Task</Text>
      <FlatList
        data={tasks}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TaskItem
            taskName={item.taskName}
            taskDetails={item.taskDetails}
            taskStatus={item.taskStatus}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.taskListView}>
        <Text style={styles.upcoingText}>My Task List</Text>
        <FilterButtons activeTab={activeTab} onFilterChange={onFilterChange} />
        <ScrollView 
          style={styles.taskListScroll}
          showsVerticalScrollIndicator={false}
        >
          {filteredTasks.map((item) => (
            <CustomTaskItem
              key={item.id}
              taskName={item.taskName}
              taskDetails={item.taskDetails}
              myStatus={item?.myStatus || ''}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}; 