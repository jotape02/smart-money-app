import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import useBalance from '../../hooks/useBalance';

import Colors from '../../styles/Colors';

const BalanceLabel = () => {
  const [balance] = useBalance();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>

      <LinearGradient
        style={styles.panel}
        colors={[Colors.amethyst, Colors.peterRiver]}>
        <Text style={styles.value}>{balance}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  label: {
    fontSize: 15,
    color: Colors.white,
    marginTop: 30,
  },
  panel: {
    borderRadius: 10,
    minWidth: 200,
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  value: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default BalanceLabel;
