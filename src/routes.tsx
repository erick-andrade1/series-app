import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StackNavigationParamsList } from "./types-navigation";

import { Login } from "./pages/Login";

const Stack = createNativeStackNavigator<StackNavigationParamsList>();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;