import { createDrawerNavigator } from "@react-navigation/drawer";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import MyTabBar from "./MyTabBer";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          backgroundColor: "red",
          marginHorizontal: "4%",
          marginBottom: 20,
          position: "absolute",
          borderRadius: 10,
        },
      }}
    >
      <Tab.Screen name="Categories1" component={CategoriesScreen} />
      <Tab.Screen name="Categories2" component={CategoriesScreen} />
      <Tab.Screen name="Categories3" component={CategoriesScreen} />
    </Tab.Navigator>
  );
}
