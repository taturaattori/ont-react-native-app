import React, {useState} from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export interface Task {
  name: string;
  status: boolean;
}

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

const AddTask: React.FC<AddTaskProps> = ({onAddTask}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask: Task = {name: task, status: false};
      onAddTask(newTask);
      setTask('');
      setModalVisible(false); // Close the modal after adding task
    }
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Enter task"
              value={task}
              onChangeText={text => setTask(text)}
            />
            <View style={styles.buttonView}>
              <Button title="Add Task" onPress={addTask} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.button}>
          <Text style={{color: 'black'}}>Add a task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: 250,
    height: 150,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#9DEADC',
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 15,
  },
  buttonView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    width: 190,
  },
});

export default AddTask;
