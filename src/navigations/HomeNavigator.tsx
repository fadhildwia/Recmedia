import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens";
import { NAVIGATION } from "../constants";
import DetailMovie from "../screens/DetailMovie/DetailMovie";

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name={NAVIGATION.home} component={Home} />
      <Stack.Screen name={NAVIGATION.detailMovie} component={DetailMovie} />
    </Stack.Navigator>
  );
}
