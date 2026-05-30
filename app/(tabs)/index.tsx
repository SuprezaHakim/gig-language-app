import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import * as Speech from 'expo-speech'; //imported the speech library here

export default function App() {

  // This is the function that controls the hardware voice
  const speakPhrase = (textToSay: string) => {
    Speech.stop(); // Stops any current audio
    Speech.speak(textToSay, {
      language: 'en-US',
      rate: 0.9, // Slightly slower for language learners
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Shift Prep</Text>
        <Text style={styles.subtitle}>DoorDash Driver Track</Text>
      </View>

      {/* 80/20 Daily Mission Card - Now clickable! */}
      <TouchableOpacity 
        style={styles.missionCard}
        onPress={() => speakPhrase("How is your day going?")}
      >
        <Text style={styles.missionTitle}>Today's Mission</Text>
        <Text style={styles.missionText}>Ask one restaurant worker: "How is your day going?"</Text>
        <Text style={styles.hintText}>Tap card to listen 🔊</Text>
      </TouchableOpacity>

      {/* Main Action Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Shift Simulation</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>My Saved Phrases</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// The Styling Engine
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 24,
    justifyContent: 'center', 
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A202C',
  },
  subtitle: {
    fontSize: 18,
    color: '#718096',
    marginTop: 8,
  },
  missionCard: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, 
    marginBottom: 40,
  },
  missionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E53E3E',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  missionText: {
    fontSize: 18,
    color: '#2D3748',
    lineHeight: 26,
    fontWeight: '500',
  },
  hintText: { 
    fontSize: 14, 
    color: '#3182CE', 
    marginTop: 15, 
    fontWeight: '600' 
  },
  button: {
    backgroundColor: '#3182CE', 
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#EDF2F7',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#4A5568',
    fontSize: 18,
    fontWeight: '600',
  },
});