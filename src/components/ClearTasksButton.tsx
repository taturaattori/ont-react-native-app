import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  onClearTasks: () => void;
}

const ClearTasks: React.FC<Props> = ({onClearTasks}) => {
  const handleClearTasks = () => {
    onClearTasks();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClearTasks} style={styles.button}>
        <Text style={{color: 'black'}}>Clear all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#9DEADC',
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
  },
  container: {
    padding: 15,
  },
});

export default ClearTasks;
