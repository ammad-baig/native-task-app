import React from 'react'
import { Text, TextInput, View } from 'react-native'
import rncStyles from 'rncstyles'

export default function ABTextArea({ placeholder, onChangeText, label, value }: any) {
    return (
        <View style={[rncStyles.py1]}>

            <Text style={[rncStyles.textPrimary, rncStyles.p1]}>{label}</Text>

            <TextInput multiline={true} numberOfLines={4} verticalAlign='top' style={[rncStyles.input, rncStyles.bgWhite, rncStyles.Pill, rncStyles.border1, rncStyles.borderPrimary]}
                value={value} onChangeText={onChangeText} placeholder={placeholder} />
        </View>
    )
}
