import { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native'
import rncStyles from 'rncstyles'
import ABInput from '../components/ABInput'
import ABButton from '../components/ABButton'
import { singUp } from '../config/FirebaseMethods'
import { useDispatch } from 'react-redux'
import { add } from '../config/redux/reducers/LoginSlice'

export default function SignUp({ navigation }: any) {

    const [model, setModel] = useState<any>({})
    const dispatch = useDispatch()

    const signUpUser = () => {
        singUp(model)
            .then((res: any) => {
                dispatch(add({ ...res }))
                navigation.navigate('Home')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return <>
        <View
            style={[
                rncStyles.h100,
                rncStyles.bgLight
            ]}>
            <View
                style={[
                    rncStyles.h100,
                    rncStyles.p2,
                    rncStyles.justifyContentCenter
                ]}>
                <View
                    style={rncStyles.py5}>
                    <Text
                        style={[
                            rncStyles.fs1,
                            rncStyles.textPrimary,
                            rncStyles.textBold,
                            rncStyles.mb1
                        ]}
                    >Sign Up</Text>
                    <Text
                        style={[
                            rncStyles.fs5,
                            rncStyles.textSecondary
                        ]}
                    >Please Enter Your Information and create Acount.</Text>
                </View>
                <ScrollView>
                    <View>
                        <ABInput
                            value={model.fullName}
                            onChangeText={(e: any) => {
                                setModel({ ...model, fullName: e })
                            }}
                            label="Full Name"
                            placeholder='Enter Full Name'
                        />
                        <ABInput
                            value={model.email}
                            onChangeText={(e: any) => {
                                setModel({ ...model, email: e })
                            }}
                            label="Email"
                            placeholder="Enter Email"
                        />
                        <ABInput
                            value={model.Password}
                            onChangeText={(e: any) => {
                                setModel({ ...model, password: e })
                            }}
                            label="Password"
                            placeholder="Enter 6 Digit Password"
                        />
                        <View style={rncStyles.py2}>
                            <ABButton onPress={signUpUser} label='Sign Up' />
                        </View>
                    </View>
                </ScrollView>
                <View
                    style={[
                        rncStyles.py2,
                        rncStyles.flexRow,
                        rncStyles.justifyContentCenter
                    ]}
                >
                    <Text
                        style={[
                            rncStyles.textBold,
                            rncStyles.textSecondary,
                            rncStyles.fs5
                        ]}
                    >Have an Account?</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Login')
                    }}>
                        <Text
                            style={[
                                rncStyles.textBold,
                                rncStyles.fs5,
                                rncStyles.ms1,
                                rncStyles.textPrimary
                            ]}
                        >Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

