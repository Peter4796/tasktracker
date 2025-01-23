import { Platform, View, useColorScheme } from 'react-native'
import React, { FC } from 'react'
import { ThemeOptions } from '../types/theme'
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Colors } from '../constants/Colors'

interface Props {
    color?: string
    name: string
    size?: number
    material?: boolean
}
const platformName = Platform.OS
const platformAbr: 'md' | 'ios' = platformName === 'android' ? 'md' : 'ios'
const Icon: FC<Props> = ({
    color,
    name,
    size,
    material
}) => {
    const theme = useColorScheme() as ThemeOptions
    return (
        material ? <MaterialIcon
            name={name}
            size={size}
            color={Colors[theme].defaultIcon}
        /> :
            <IonIcons
                name={name}
                size={size}
                color={Colors[theme].defaultIcon} />
    )
}

export default Icon