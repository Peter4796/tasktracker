import { View, StyleSheet } from 'react-native';
import Text from '@/components/text';
import { Colors } from '@/constants/Colors';
import { ThemeOptions } from '@/types/theme';
import { memo, useMemo } from 'react';

interface TaskItemProps {
  taskName: string;
  taskDetails: string;
  taskStatus?: string;
}

interface CustomTaskItemProps {
  taskName: string;
  taskDetails: string;
  myStatus: string;
}

export const TaskItem = memo(({ taskName, taskDetails, taskStatus }: TaskItemProps) => {
  const styles = useStyles('light');
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{taskName}</Text>
      <Text style={styles.taskDetails}>{taskDetails}</Text>
      <Text>Status: {taskStatus}</Text>
    </View>
  );
});

export const CustomTaskItem = memo(({ taskName, taskDetails, myStatus }: CustomTaskItemProps) => {
  const styles = useStyles('light');
  
  const statusColor = useMemo(() => {
    switch (myStatus) {
      case 'Pending': return 'red';
      case 'In Progress': return 'yellow';
      case 'Done': return 'green';
      default: return 'gray';
    }
  }, [myStatus]);

  return (
    <View style={[styles.taskContainer, { borderColor: statusColor }]}>
      <Text style={styles.taskName}>{taskName}</Text>
      <Text style={styles.taskDetails}>{taskDetails}</Text>
      <View style={styles.statusContainer}>
        <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
        <Text style={styles.statusText}>Status: {myStatus}</Text>
      </View>
    </View>
  );
});

const useStyles = (theme: ThemeOptions) => StyleSheet.create({
  taskContainer: {
    marginHorizontal: 5,
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: Colors[theme].background,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskName: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: Colors[theme].text,
  },
  taskDetails: {
    fontSize: 14,
    color: Colors[theme].text,
    opacity: 0.8,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
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
    opacity: 0.7,
  },
}); 