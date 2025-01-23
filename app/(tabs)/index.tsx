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
import { useState } from 'react';

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

  const CustomTaskItem = ({ taskName, taskDetails, myStatus }: any) => {
    let statusColor;

    switch (myStatus) {
      case 'Pending':
        statusColor = 'red';
        break;
      case 'In Progress':
        statusColor = 'yellow';
        break;
      case 'Done':
        statusColor = 'green';
        break;
      default:
        statusColor = 'gray';
    }

    return (
      <View style={[styles.taskContainer, { borderColor: statusColor }]}>
        <Text style={styles.taskName}>{taskName}</Text>
        <Text style={styles.taskDetails}>{taskDetails}</Text>
        <Text>Status: {myStatus}</Text>
      </View>
    );
  };

  const TaskItem = ({ taskName, taskDetails, taskStatus }: any) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{taskName}</Text>
      <Text style={styles.taskDetails}>{taskDetails}</Text>
      <Text>Status: {taskStatus}</Text>
    </View>
  );

  const [filteredTasks, setFilteredTasks] = useState(tasksCustom);
  const [activeTab, setActiveTab] = useState('All');

  const filterTasks = (myStatus: string | null) => {
    let filtered;
    if (myStatus === 'All' || myStatus === null) {
      filtered = tasksCustom;
    } else {
      filtered = tasksCustom.filter((task) => task.myStatus === myStatus);
    }
    setFilteredTasks(filtered);
    setActiveTab(myStatus || 'All');
  };

  const theme = useColorScheme() as ThemeOptions;
  const styles = useStyles(theme);

  return (
    <View style={styles.main}>
      <SafeAreaView />
      <View style={styles.homeView}>
        <View style={styles.profileView}>
          <View>
            <Image source={profilePic} style={styles.userProfileImg} />
          </View>
          <View style={styles.details}>
            <Text style={styles.mesText}>Good morning John</Text>
            <Text style={styles.tasksText}>4 Tasks remaining</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name={'notifications-outline'} size={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.taskSummaryView}>
        <View style={styles.taskSummaryCard}>
          <Text style={{ paddingHorizontal: 5 }}>Today Task Summary</Text>
          <View style={styles.addView}>
            <View style={{ flexDirection: 'row' }}>
              <Text>Progress:</Text>
              <Text>85%</Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                router.push('/AddTask');
              }}
            >
              <Text style={{ padding: 5 }}>Add Task</Text>
              <Icon name={'add-circle-outline'} size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
        <ScrollView>
          <View style={styles.taskListView}>
            <Text style={styles.upcoingText}>My Task List</Text>
            <View style={styles.filterContainer}>
              {['All', 'Pending', 'In Progress', 'Done'].map((status) => (
                <TouchableOpacity
                  key={status}
                  onPress={() => filterTasks(status === 'All' ? null : status)}
                  style={[
                    styles.filterButton,
                    activeTab === status && styles.activeFilterButton,
                  ]}
                >
                  <Text>{status}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {filteredTasks.map((item) => (
              <CustomTaskItem
                key={item.id}
                taskName={item.taskName}
                taskDetails={item.taskDetails}
                myStatus={item.myStatus}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export const useStyles = (theme: ThemeOptions) => {
  return StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: Colors[theme].background
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      backgroundColor: Colors[theme].background
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
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
    notiImg: {
      width: 25,
      height: 25
    },
    tasksText: {
      color: Colors[theme].text,
      fontWeight: '500'
    },
    mesText: {
      fontSize: 20,
      color: Colors[theme].text,
      fontWeight: 'bold'
    },
    taskSummaryView: {
      backgroundColor: Colors[theme].background,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginTop: -20,
    },
    taskText: {
      fontSize: 14,
      padding: 10,
      color: 'black',
      fontWeight: '500',
    },
    taskSummaryCard: {
      backgroundColor: 'green',
      marginTop: 20,
      marginHorizontal: 10,
      borderRadius: 10,
      paddingBottom: 10
    },
    addTaskImg: {
      width: 30,
      height: 30,
    },
    addView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      alignItems: 'center'
    },
    percentageText: {
      color: 'black',
      fontWeight: '500',
    },
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
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      backgroundColor: Colors.secondary,
    },
    filterText: {
      color: 'black',
      fontWeight: '500'


    },
    activeFilterButton: {
      backgroundColor: Colors.main
    },
    activeFilterText: {
      color: '#fff',
      fontWeight: '500'
    },
    statusCircle: {
      flexDirection: 'row',
      justifyContent: "space-between"
    },
    pendingTask: {
      width: 15,
      height: 15,
      backgroundColor: "red",
      borderRadius: 25
    },
    statusDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });
}
