import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Text from '@/components/text';
import Icon from '@/components/icon';
import { Colors } from '@/constants/Colors';
import { ThemeOptions } from '@/types/theme';
import { router } from 'expo-router';
import { createStyles } from './styles/TaskSummary.styles';

interface TaskSummaryProps {
  progress: number;
  remainingTasks: number;
  theme: ThemeOptions;
}

export const TaskSummary = ({ progress, remainingTasks, theme }: TaskSummaryProps) => {
  const styles = createStyles(theme);
  return (
    <View style={styles.taskSummaryView}>
      <View style={styles.taskSummaryCard}>
        <Text style={styles.summaryTitle}>Today's Task Summary</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
          <Text style={styles.progressText}>{progress}%</Text>
        </View>
        <View style={styles.addView}>
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>Tasks Remaining: {remainingTasks}</Text>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => router.push('/AddTask')}
          >
            <Text style={styles.addButtonText}>Add Task</Text>
            <Icon name={'add-circle-outline'} size={30} color={Colors[theme].text} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}; 