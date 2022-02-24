import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Daily Habits, funções inicias:
        -pomodoro timer  (50min FOCO e 10min DESCANSO)
        -task list
        -calendario/agenda
        -notificação/push ups
        -vloqueador de acesso a apps
        -despertador
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
