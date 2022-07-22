import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ResturantScreen from "./src/screens/ResturantScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <TailwindProvider>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen
                            name="Resturant"
                            component={ResturantScreen}
                        />
                    </Stack.Navigator>
                </TailwindProvider>
            </Provider>
        </NavigationContainer>
    );
}
