import React, { useState } from 'react'
import { ScrollView, Text, ToastAndroid, View } from 'react-native'
import rncStyles from 'rncstyles'
import ABInput from '../components/ABInput'
import ABDatePicker from '../components/ABDatePicker'
import { addData } from '../config/FirebaseMethods'
import ABButton from '../components/ABButton'
import ABTextArea from '../components/ABTextArea'

export default function CreateTask() {
    const [model, setModel] = useState<any>({})

    const saveTask = () => {
        addData('task', model)
            .then(() => {
                ToastAndroid.show('Task Added Successfully', ToastAndroid.SHORT)
                setModel('')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <View style={[rncStyles.h100, rncStyles.bgLight, rncStyles.p2]}>
            <ScrollView>
                <View>
                    <ABInput
                        value={model.title}
                        onChangeText={(e: any) => {
                            setModel({ ...model, title: e })
                        }}
                        placeholder='Enter Title'
                        label='Title:' />
                </View>
                <View>
                    <ABTextArea
                        value={model.task}
                        onChangeText={(e: any) => {
                            setModel({ ...model, task: e })
                        }}
                        placeholder='Enter Task'
                        label='Task:' />
                </View>
                <View>
                    <ABDatePicker
                        value={model.date}
                        onChange={(e: any) => {
                            setModel({ ...model, date: e })
                        }} label='Select Task Date' />
                </View>
                <View>
                    <ABButton label='Save' onPress={saveTask} />
                </View>
            </ScrollView>
        </View>
    )
}
