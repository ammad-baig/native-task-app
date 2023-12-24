import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import rncStyles from 'rncstyles'

export default function ABButton({ label, onPress, color }: any) {
    return (
        <View style={rncStyles.py1}>

            <TouchableOpacity onPress={onPress}
                style={color == 'info' ? rncStyles.btnInfo
                    : color == 'error' ? rncStyles.btnDanger
                        : rncStyles.btnPrimary}>
                <Text style={[rncStyles.textWhite, rncStyles.textCenter]}>
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
