import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "./HomeNavigator";
import { TABS } from "../constants";

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Tab.Screen name={TABS.home} component={HomeNavigator} />
    </Tab.Navigator>
  );
}