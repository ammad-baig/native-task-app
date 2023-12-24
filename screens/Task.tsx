import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { getData } from '../config/FirebaseMethods'
import rncStyles from 'rncstyles'
import ABInput from '../components/ABInput'
import ABIconButton from '../components/ABIconButton'
import ABIcon from '../components/ABIcon'

export default function Task({ navigation }: any) {

    const [taskList, setTaskList] = useState<any>([])
    const [filterList, setFilterList] = useState<any>([])

    const get = () => {
        getData('task')
            .then((res: any) => {
                setTaskList([...res])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            get()
        });

        return unsubscribe;
    }, [])
    return (
        <View style={[rncStyles.h100, rncStyles.p2]}>
            <View>
                {/* For Seacrh */}
                <ABInput
                    onChangeText={(e: any) => {
                        if (!e) {
                            setFilterList([])
                            return
                        }
                        let arr: any = taskList.filter((x: any) => {
                            if ((x.title.toLowerCase()).includes(e.toLowerCase())) {
                                return x
                            } else if ((x.task.toLowerCase()).includes(e.toLowerCase())) {
                                return x
                            }
                        })
                        setFilterList([...arr])
                    }}
                    placeholder='Search' />
            </View>
            <ScrollView>
                {filterList.length > 0

                    ? filterList.map((x: any, i: any) => <View style={[rncStyles.bgWhite, rncStyles.my1, rncStyles.p2, rncStyles.rounded, rncStyles.shadow2]} key={i}>
                        <View>
                            <Text style={[rncStyles.fs4, rncStyles.textBold, rncStyles.textBlack]}>
                                {x.title}
                            </Text>
                            <Text style={[rncStyles.fs5, rncStyles.textSecondary]}>
                                {x.task}
                            </Text>
                        </View>
                    </View>)

                    : taskList.map((x: any, i: any) => <View style={[rncStyles.bgWhite, rncStyles.my1, rncStyles.p2, rncStyles.rounded, rncStyles.shadow2]} key={i}>
                        <View>
                            <Text style={[rncStyles.fs4, rncStyles.textBold, rncStyles.textBlack]}>
                                {x.title}
                            </Text>
                            <Text numberOfLines={2} style={[rncStyles.fs5, rncStyles.textSecondary]}>
                                {x.task}
                            </Text>
                            <View style={[rncStyles.flexRow, rncStyles.pt1]}>
                                <ABIconButton name='delete' />
                                <ABIconButton onPress={() => {
                                    navigation.navigate('SingleTask', x)
                                }} name='info' />
                                {x.isDone && <ABIcon name='check' />}
                            </View>
                        </View>
                    </View>)}
            </ScrollView>
        </View>
    )
}
