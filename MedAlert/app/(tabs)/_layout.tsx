import { Text, View } from "react-native";
import React, { Component } from "react";
import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons} from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen 
        name="medicinas" 
        options={{
            title:"Medicinas", 
            tabBarIcon:({color, size}) =>(
                <MaterialCommunityIcons name="pill" size={size} color={color} />
            )
        }} />
      <Tabs.Screen
       name="historial"
       options={{
        title: 'Historial',
        tabBarIcon:({color,size}) =>(
            <MaterialCommunityIcons name="calendar-clock" size={size} color={color} />
        )
       }}
      
      />
      <Tabs.Screen 
        name="user"
        options={{
            title:'Usuario',
            tabBarIcon:({color,size})=>(
                <FontAwesome name="user-md" size={size} color={color}/>
            )
        }}

      />
    </Tabs>
  );
}
