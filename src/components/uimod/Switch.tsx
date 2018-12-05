import React from 'react'
import { Switch } from 'react-native'
import styles from './Style'
const SwitchTab = ({onValueChange, tintColor, onTintColor, thumbTintColor, state }) => {
    const { switchStyle } = styles
    return (
        <Switch
            tintColor={tintColor}
            style={switchStyle}
            thumbTintColor={thumbTintColor}
            onTintColor={onTintColor}
            value = {state}
            onValueChange={onValueChange}
        />
    )
}
export { SwitchTab }
