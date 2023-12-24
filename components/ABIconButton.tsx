import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import ABIcon from './ABIcon'
import rncStyles from 'rncstyles'

export default function ABIconButton({ onPress, name, size }: any) {
    return (
        <View>
            <TouchableOpacity style={[rncStyles.roundedPill, rncStyles.bgWhite, rncStyles.shadow1, rncStyles.flexCenter, { width: 50, height: 50 }]} onPress={onPress}>
                <ABIcon name={name} />
            </TouchableOpacity>
        </View>
    )
}
