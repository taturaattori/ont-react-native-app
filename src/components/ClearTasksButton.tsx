import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

interface Props {
  onClearTasks: () => void;
}

const ClearTasks: React.FC<Props> = ({onClearTasks}) => {
  const handleClearTasks = () => {
    onClearTasks();
  };

  return (
    <View style={styles.button}>
      <Button title="Clear all" onPress={handleClearTasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
  },
});

export default ClearTasks;
