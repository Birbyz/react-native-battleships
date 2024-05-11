import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TableArea from '../../components/TableArea.component';

const TableScreen = () => {
  return (
    <View style={styles.container}>
      <TableArea />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TableScreen;
