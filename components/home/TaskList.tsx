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
  onStartTask: (taskId: number) => void;
  onCompleteTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
  onEditTask: (taskId: number) => void;
}

export const TaskList = ({ 
  tasks, 
  filteredTasks, 
  activeTab, 
  onFilterChange,
  theme = 'light',
  onStartTask,
  onCompleteTask,
  onDeleteTask,
  onEditTask,
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
            theme={theme}
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
              id={item.id}
              taskName={item.taskName}
              taskDetails={item.taskDetails}
              myStatus={item?.myStatus || ''}
              onStart={() => onStartTask(item.id)}
              onComplete={() => onCompleteTask(item.id)}
              onDelete={() => onDeleteTask(item.id)}
              onEdit={() => onEditTask(item.id)}
              theme={theme}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}; 