import React from 'react';
import { View, StyleSheet } from 'react-native';

const TableArea = () => {
  const renderGridCells = () => {
    const cells = [];
    // Create 10x10 grid
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        cells.push(<View key={`${i}-${j}`} style={styles.gridCell}></View>);
      }
    }
    return cells;
  };

  return (
    <View style={styles.tableArea}>
      {renderGridCells()}
    </View>
  );
};

const styles = StyleSheet.create({
  tableArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 350, 
    height: 350, 
    borderWidth: 1,
    borderColor: '#000',
  },
  gridCell: {
    width: '10%',
    height: '10%', 
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default TableArea;
