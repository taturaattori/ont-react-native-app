import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AddTask, {Task} from '../components/AddTask';
import TaskList from '../components/TaskList';
import ClearTasks from '../components/ClearTasksButton';

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {name: 'Siivous', status: false},
    {name: 'Treeni', status: false},
    {name: 'Kauppa', status: true},
    {name: 'Opiskelu', status: false},
    {name: 'Roskat', status: true},
  ]);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsView}>
        <AddTask onAddTask={addTask} />
        <ClearTasks onClearTasks={clearTasks} />
      </View>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
  },
});

export default Home;
