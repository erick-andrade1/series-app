import {View, Text} from 'react-native';
import { ScreenNavigationProps } from "../types-navigation";


interface ILoginProps {
    navigation: ScreenNavigationProps
}

export const Login = ({navigation}: ILoginProps) => {
    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}