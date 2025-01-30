import { View, Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Text from '@/components/text';
import Icon from '@/components/icon';
import { Colors } from '@/constants/Colors';
import { ThemeOptions } from '@/types/theme';

interface TaskActionModalProps {
  visible: boolean;
  onClose: () => void;
  onStart?: () => void;
  onEdit?: () => void;
  onDelete: () => void;
  onComplete?: () => void;
  status: string;
  theme: ThemeOptions;
}

interface Action {
  icon: string;
  label: string;
  onPress?: () => void;
  color: string;
}

export const TaskActionModal = ({
  visible,
  onClose,
  onStart,
  onEdit,
  onDelete,
  onComplete,
  status,
  theme
}: TaskActionModalProps) => {
  const renderActions = () => {
    const actions: Action[] = [];
    
    if (status === 'Pending') {
      actions.push(
        { icon: 'play', label: 'Start Task', onPress: onStart, color: 'yellow' },
        { icon: 'create-outline', label: 'Edit Task', onPress: onEdit, color: Colors.main }
      );
    } else if (status === 'In Progress') {
      actions.push(
        { icon: 'checkmark-circle-outline', label: 'Mark Complete', onPress: onComplete, color: 'green' }
      );
    }
    
    actions.push({ icon: 'trash-outline', label: 'Delete Task', onPress: onDelete, color: 'red' });

    return actions.map((action, index) => (
      <TouchableOpacity
        key={action.label}
        style={[
          styles.actionButton,
          { borderBottomWidth: index === actions.length - 1 ? 0 : 1 }
        ]}
        onPress={() => {
          action.onPress?.();
          onClose();
        }}
      >
        <Icon name={action.icon} size={20} color={action.color} />
        <Text style={{ 
          marginLeft: 12,
          fontSize: 16,
          fontWeight: '500',
          color: action.color 
        }}>
          {action.label}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={[styles.modalContent, { backgroundColor: Colors[theme].card }]}>
              <View style={styles.modalHeader}>
                <Text style={{ 
                  fontSize: 18,
                  fontWeight: '600',
                  textAlign: 'center',
                  color: Colors[theme].text 
                }}>
                  Task Actions
                </Text>
              </View>
              {renderActions()}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  }
}); 