import { View, Text as TextComp, TextStyle, useColorScheme } from 'react-native'
import React, { FC, ReactNode } from 'react'
import {Colors} from '../constants/Colors'
import { ThemeOptions } from '../types/theme'

interface Props {
    children: ReactNode
    numberOfLines?: number
    style?: TextStyle;
    onPress?: () => void;
    onLayout?: () => void;
}
const Text: FC<Props> = ({
    children,
    style,
    ...rest
}) => {
    const theme = useColorScheme() as ThemeOptions
    return (
        <View>
            <TextComp style={[
                {
                    color: Colors[theme].text,
                    fontSize: 16
                },
                style
            ]}
                {...rest}>{children}</TextComp>
        </View>
    )
}

export default Text