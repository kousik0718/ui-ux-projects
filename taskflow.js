import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    setLoading(true);
    setMessage('Sending reset link...');

    // In a real application, you would make an API call here
    // to your backend to initiate the password reset process.
    // Example API call (replace with your actual API endpoint):
    // try {
    //   const response = await fetch('/api/forgot-password', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email }),
    //   });
    //   const data = await response.json();
    //   if (response.ok && data.message) {
    //     setMessage(data.message);
    //     Alert.alert('Password Reset', data.message);
    //   } else {
    //     setMessage(data.error || 'Failed to send reset link.');
    //     Alert.alert('Error', data.error || 'Failed to send reset link.');
    //   }
    // } catch (error) {
    //   setMessage('Network error. Please try again.');
    //   Alert.alert('Error', 'Network error. Please try again.');
    // } finally {
    //   setLoading(false);
    // }

    // Simulate a successful response for this UI example
    setTimeout(() => {
      setLoading(false);
      setMessage('A password reset link has been sent to your email address.');
      Alert.alert('Password Reset', 'A password reset link has been sent to your email address.');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        editable={!loading}
      />
      <Button
        title={loading ? 'Sending...' : 'Reset Password'}
        onPress={handleForgotPassword}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  message: {
    marginBottom: 15,
    color: 'green',
    textAlign: 'center',
  },
});

export default ForgotPasswordScreen;