import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { getEmptyNavigationOptions, getNavigationOptions } from './HeaderHelper';
import { NavigationStackProp } from 'react-navigation-stack';
import { BackContainer } from './comopnents/BackContainer';
import Video from 'react-native-video';
/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationStackProp<{ userId: string }>;
}

const VIDEO_URL = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";

class HomeScreen extends React.Component<Props> {


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Video source={{ uri: VIDEO_URL }}
                    style={styles.backgroundVideo} />
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

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'blue'
    },
});