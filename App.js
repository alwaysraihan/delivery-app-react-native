import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ResturantScreen from "./src/screens/ResturantScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BasketScreen from "./src/screens/BasketScreen";
import PreparingOrderScreen from "./src/screens/PreparingOrderScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
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
                        <Stack.Screen
                            name="Basket"
                            component={BasketScreen}
                            options={{
                                presentation: "modal",
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="PreparingOrderScreen"
                            component={PreparingOrderScreen}
                            options={{
                                presentation: "fullScreenModal",
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="Delivery"
                            component={DeliveryScreen}
                            options={{
                                presentation: "fullScreenModal",
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                </TailwindProvider>
            </Provider>
        </NavigationContainer>
    );
}
