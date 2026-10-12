
import { NavigationContainer } from "@react-navigation/native";
import AppTabBar from "./tabBar.router";
export default function Layout(){
    return(
        <NavigationContainer>
            <AppTabBar/>
        </NavigationContainer>
    )
}