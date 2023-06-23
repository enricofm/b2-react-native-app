import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgotPassPage from '../pages/ForgotPassPage';

const Stack = createNativeStackNavigator()

export default function AuthRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='LoginPage' component={LoginPage} options={{ headerShown: false }}/>
            <Stack.Screen name='RegisterPage' component={RegisterPage} options={{ headerShown: false }}/>
            <Stack.Screen name='ForgotPassPage' component={ForgotPassPage} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}