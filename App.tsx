import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useCallback, useRef, useState } from 'react';
import { ListItem } from './components/ListItem';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';

const TITLES = [
  'first title hello',
  'second title hello',
  'third title hello',
  'fourth title hello',
  'fifth title hello',
  'first title hello',
  'second title hello',
  'third title hello',
  'fourth title hello',
  'fifth title hello',
  'first title hello',
  'second title hello',
  'third title hello',
  'fourth title hello',
  'fifth title hello',
];

export interface TaskInterface {
  title: string;
  index: number;
}

const TASKS: TaskInterface[] = TITLES.map((title, index) => ({ title, index }));

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const scrollRef = useRef(null);

  const onDismiss = useCallback((task: TaskInterface) => {
    setTasks((tasks) => tasks.filter((item) => item.index !== task.index));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <StatusBar style='auto' />
      <ScrollView ref={scrollRef} style={{ flex: 1 }}>
        {tasks.map((task) => {
          return (
            <ListItem
              simultaneousHandlers={scrollRef}
              key={task.index}
              task={task}
              onDismiss={onDismiss}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <App />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 60,
    marginVertical: 20,
    paddingLeft: '5%',
  },
});
