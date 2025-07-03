import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            backgroundColor: '#fff',
            height:76,
            borderTopWidth:0
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'cart',
          tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" size={28} color={color} />,
        }}
      />
       <Tabs.Screen
        name="search"
        options={{
          title: 'search',
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
