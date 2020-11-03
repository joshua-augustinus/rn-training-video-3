/**
 * Container that contains a back button
 */

import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { NavigationStackProp } from "react-navigation-stack";

interface Props {
    navigation: NavigationStackProp<{}>;
}

const BackContainer = (props: Props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => { props.navigation.goBack(); }}>
                <Text>Go back</Text>
            </TouchableOpacity>

        </View>
    )
}

export { BackContainer }