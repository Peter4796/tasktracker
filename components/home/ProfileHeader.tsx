import { View, Image, TouchableOpacity } from 'react-native';
import Text from '@/components/text';
import Icon from '@/components/icon';
import { profilePic } from '@/theme/images';
import { Colors } from '@/constants/Colors';
import { ThemeOptions } from '@/types/theme';
import { createStyles } from './styles/ProfileHeader.styles';

interface ProfileHeaderProps {
  remainingTasks: number;
  theme: ThemeOptions;
}

export const ProfileHeader = ({ remainingTasks, theme }: ProfileHeaderProps) => {
  const styles = createStyles(theme);
  return (
    <View style={styles.homeView}>
      <View style={styles.profileView}>
        <View>
          <Image source={profilePic} style={styles.userProfileImg} />
        </View>
        <View style={styles.details}>
          <Text style={styles.mesText}>Good morning John</Text>
          <Text style={styles.tasksText}>{remainingTasks} Tasks remaining</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Icon name={'notifications-outline'} size={35} />
      </TouchableOpacity>
    </View>
  );
}; 