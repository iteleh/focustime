import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';


// You can import from local files
import { Focus } from './src/features/Focus'
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
    {!currentSubject ? (
      <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history} />
      </>

    ): (
        <Timer
        focusSubject={currentSubject}
        onTimerEnd={(subject) => {
          setHistory([...history, subject])
        }}
        clearSubject={()=>setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'andriod' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue
  }
});
