import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

interface Task {
  name: string;
  status: boolean;
}

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({tasks, setTasks}) => {
  const toggleTaskStatus = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = !updatedTasks[index].status;
    setTasks(updatedTasks);
  };
  const handleDelete = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        renderItem={({item, index}) => (
          <View style={styles.listRow}>
            <View style={styles.listItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <TouchableOpacity onPress={() => toggleTaskStatus(index)}>
                <Icon
                  name={item.status ? 'checkbox-active' : 'checkbox-passive'}
                  size={25}
                  color={'black'}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => handleDelete(index)}>
                <Text style={styles.deleteButton}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  itemName: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    marginRight: 10,
  },
  deleteButton: {
    color: 'black',
    fontSize: 12,
  },
  listContainer: {
    backgroundColor: '#9DEADC',
    height: 600,
    marginTop: 25,
  },
});

export default TaskList;
