import {
  Image,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
  useColorScheme,
} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AddTaskImg, notificationImg, profilePic } from '@/theme/images';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import Icon from '@/components/icon';
import Text from '@/components/text';
import { ThemeOptions } from '@/types/theme';
import { useState, useCallback, useMemo } from 'react';
import { memo } from 'react';
import { ProfileHeader } from '@/components/home/ProfileHeader';
import { TaskSummary } from '@/components/home/TaskSummary';
import { TaskList } from '@/components/home/TaskList';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { navigate } = navigation;

  const tasks = [
    {
      id: 4,
      taskName: 'Task 1',
      taskDetails: 'Details of Task 1',
      taskStatus: 'Pending',
    },
    {
      id: 1,
      taskName: 'Task 2',
      taskDetails: 'Details of Task 1',
      myStatus: 'Pending',
    },
    {
      id: 2,
      taskName: 'Task 3',
      taskDetails: 'Details of Task 2',
      myStatus: 'Pending',
    },
    {
      id: 3,
      taskName: 'Task 4',
      taskDetails: 'Details of Task 3',
      myStatus: 'In Progress',
    },
  ];

  const tasksCustom = [
    {
      id: 1,
      taskName: 'Task 1',
      taskDetails: 'Details of Task 1',
      myStatus: 'Pending',
    },
    {
      id: 2,
      taskName: 'Task 2',
      taskDetails: 'Details of Task 2',
      myStatus: 'Pending',
    },
    {
      id: 3,
      taskName: 'Task 3',
      taskDetails: 'Details of Task 3',
      myStatus: 'In Progress',
    },
    {
      id: 9,
      taskName: 'Task 9',
      taskDetails: 'Details of Task 9',
      myStatus: 'Done',
    },
    {
      id: 10,
      taskName: 'Task 9',
      taskDetails: 'Details of Task 9',
      myStatus: 'Done',
    },
    
  ];

  const [filteredTasks, setFilteredTasks] = useState(tasksCustom);
  const [activeTab, setActiveTab] = useState('All');

  const filterTasks = useCallback((myStatus: string | null) => {
    let filtered;
    if (myStatus === 'All' || myStatus === null) {
      filtered = tasksCustom;
    } else {
      filtered = tasksCustom.filter((task) => task.myStatus === myStatus);
    }
    setFilteredTasks(filtered);
    setActiveTab(myStatus || 'All');
  }, []);

  const remainingTasks = useMemo(() => {
    return tasksCustom.filter(task => task.myStatus !== 'Done').length;
  }, [tasksCustom]);

  const progress = useMemo(() => {
    const completedTasks = tasksCustom.filter(task => task.myStatus === 'Done').length;
    return Math.round((completedTasks / tasksCustom.length) * 100);
  }, [tasksCustom]);

  const theme = useColorScheme() as ThemeOptions;
  const styles = useStyles(theme);

  return (
    <View style={styles.main}>
      <SafeAreaView />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ProfileHeader 
          remainingTasks={remainingTasks} 
          theme={theme} 
        />
        <TaskSummary 
          progress={progress} 
          remainingTasks={remainingTasks} 
          theme={theme} 
        />
        <TaskList
          tasks={tasks}
          filteredTasks={filteredTasks}
          activeTab={activeTab}
          onFilterChange={filterTasks}
          theme={theme}
        />
      </ScrollView>
    </View>
  );
}

export const useStyles = (theme: ThemeOptions) => {
  return StyleSheet.create({
    scrollContent: {
      flexGrow: 1,
    },
    main: {
      flex: 1,
      backgroundColor: Colors[theme].background
    },
  });
}
