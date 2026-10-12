

import Home from "../screen/home";
import Profile from "../screen/profile";
import Plus from "../screen/plus";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  TabBarElastic } from "../components/reanimedTabBar";



const Tab= createBottomTabNavigator()

export default function AppTabBar(){
    return(
        <Tab.Navigator
             tabBar={(props) => <TabBarElastic {...props} />}
              screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#FF872C",
                tabBarInactiveTintColor: "#999999",
      }}
        >
            <Tab.Screen 
                options={{ title: 'home' }}
                name="Home"
                component={Home}/>

            <Tab.Screen 
                options={{ title: 'plus' }}
                name="plus"
                component={Plus}/>

            <Tab.Screen 
                options={{ title: 'perfil' }}
                name="Profile"
                component={Profile}/>
        </Tab.Navigator>
    )
}