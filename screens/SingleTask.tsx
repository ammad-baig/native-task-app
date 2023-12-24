import React from 'react'
import { Text, ToastAndroid, View } from 'react-native'
import rncStyles from 'rncstyles'
import ABButton from '../components/ABButton'
import { deleteData, updateData } from '../config/FirebaseMethods'

export default function SingleTask({ navigation, route }: any) {

    const obj = route.params

    const delTask = () => {
        deleteData('task', obj.id)
            .then(() => {
                ToastAndroid.show('Task deleted successfully', ToastAndroid.SHORT)

                navigation.goBack()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const markAsDone = () => {
        updateData('task', obj.id, { ...obj, isDone: true })
            .then(() => {
                ToastAndroid.show('Task Mark As Done', ToastAndroid.SHORT)
                navigation.goBack()
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={[rncStyles.h100, rncStyles.bgWhite, rncStyles.p3]}>
            <Text style={[rncStyles.fs2, rncStyles.textBlack]}>
                {obj.title}
            </Text>
            <Text style={[rncStyles.fs4, rncStyles.mt2]}>
                {obj.task}
            </Text>
            <View style={[rncStyles.py2, rncStyles.flexRow, rncStyles.justifyContentAround]}>
                <ABButton onPress={markAsDone} label="Mark As Done" />
                <ABButton onPress={delTask} color='error' label="Delete Task" />
            </View>
        </View>
    )
}
