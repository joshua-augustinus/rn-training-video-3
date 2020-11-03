import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { getEmptyNavigationOptions, getNavigationOptions } from './HeaderHelper';
import { NavigationStackProp } from 'react-navigation-stack';
import { BackContainer } from './comopnents/BackContainer';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationStackProp<{ userId: string }>;
}

class HomeScreen extends React.Component<Props> {


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("SecondScreen", { userId: '1234' }) }}>
                        <Text>Home Screen</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>

        );
    }
}

const SecondScreen = (props: Props) => {
    const userId = props.navigation.getParam('userId', 'defaultUserId');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>{userId}</Text>
            <BackContainer navigation={props.navigation} />
        </SafeAreaView>
    )
}

const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => {
            return getNavigationOptions(navigation);
        }
    },
    SecondScreen: {
        screen: SecondScreen,
        navigationOptions: ({ navigation }) => {
            return getEmptyNavigationOptions(navigation);
        }
    }
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export { AppContainer };