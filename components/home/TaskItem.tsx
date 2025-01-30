import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '@/components/text';
import Icon from '@/components/icon';
import { Colors } from '@/constants/Colors';
import { ThemeOptions } from '@/types/theme';
import { memo, useMemo, useState } from 'react';
import { TaskActionModal } from './TaskActionModal';

interface TaskItemProps {
  taskName: string;
  taskDetails: string;
  taskStatus?: string;
  theme: ThemeOptions;
}

interface CustomTaskItemProps {
  taskName: string;
  taskDetails: string;
  myStatus: string;
  onStart?: () => void;
  onEdit?: () => void;
  onDelete: () => void;
  onComplete?: () => void;
  id: number;
  theme: ThemeOptions;
}

const defaultTheme: ThemeOptions = 'light';

export const TaskItem = memo(({ taskName, taskDetails, taskStatus, theme = defaultTheme }: TaskItemProps) => {
  const styles = createStyles(theme);
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{taskName}</Text>
      <Text style={styles.taskDetails}>{taskDetails}</Text>
      <Text style={styles.statusText}>Status: {taskStatus}</Text>
    </View>
  );
});

export const CustomTaskItem = memo(({ 
  taskName, 
  taskDetails, 
  myStatus,
  onStart,
  onEdit,
  onDelete,
  onComplete,
  theme = defaultTheme,
}: CustomTaskItemProps) => {
  const styles = createStyles(theme);
  const [modalVisible, setModalVisible] = useState(false);
  
  const statusColor = useMemo(() => {
    switch (myStatus) {
      case 'Pending': return 'red';
      case 'In Progress': return 'yellow';
      case 'Done': return 'green';
      default: return 'gray';
    }
  }, [myStatus]);

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
      setModalVisible(false);
    }
  };

  return (
    <>
      <View style={[styles.taskContainer, { borderColor: statusColor }]}>
        <View style={styles.taskContent}>
          <Text style={styles.taskName}>{taskName}</Text>
          <Text style={styles.taskDetails}>{taskDetails}</Text>
          <View style={styles.statusContainer}>
            <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
            <Text style={styles.statusText}>Status: {myStatus}</Text>
          </View>
        </View>
        <TouchableOpacity 
          style={styles.moreButton}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="ellipsis-vertical" size={20} color={Colors[theme].text} />
        </TouchableOpacity>
      </View>

      <TaskActionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        status={myStatus}
        onStart={onStart}
        onEdit={onEdit}
        onDelete={handleDelete}
        onComplete={onComplete}
        theme={theme}
      />
    </>
  );
});

const createStyles = (theme: ThemeOptions) => StyleSheet.create({
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
    flexDirection: 'row',
    alignItems: 'center',
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
  taskContent: {
    flex: 1,
    marginRight: 8,
  },
  moreButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 