
import { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import rncStyles from 'rncstyles'
import ABInput from '../components/ABInput'
import ABButton from '../components/ABButton'
import { login } from '../config/FirebaseMethods'
import { useDispatch } from 'react-redux'
import { add } from '../config/redux/reducers/LoginSlice'

export default function Login({ navigation }: any) {

    const [model, setModel] = useState<any>({})
    const dispatch = useDispatch()

    const loginUser = () => {
        login(model)
            .then((res: any) => {
                dispatch(add({ ...res }))
                navigation.navigate('Home')
            })
    }

    return <>
        <View
            style={[
                rncStyles.h100,
                rncStyles.bgWhite
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
                    >Login</Text>
                    <Text
                        style={[
                            rncStyles.fs5,
                            rncStyles.textSecondary
                        ]}
                    >Please Sign in to continue.</Text>
                </View>
                <View>
                    <ABInput
                        value={model.email}
                        onChangeText={(e: any) => {
                            setModel({ ...model, email: e })
                        }}
                        placeholder="Enter Email"
                        label="Email"
                    />
                    <ABInput
                        value={model.password}
                        onChangeText={(e: any) => {
                            setModel({ ...model, password: e })
                        }}
                        placeholder="Enter Password"
                        label="Password"
                    />

                    <View
                        style={rncStyles.py1}
                    >
                        <TouchableOpacity>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.textBold,
                                    rncStyles.fs5,
                                    rncStyles.textEnd
                                ]}
                            >Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={rncStyles.py2}
                    >
                        <ABButton onPress={loginUser} label='Login' />
                    </View>
                </View>
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
                    >Not Registerar yet?</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('SignUp')
                    }}>
                        <Text
                            style={[
                                rncStyles.textBold,
                                rncStyles.fs5,
                                rncStyles.ms1,
                                rncStyles.textPrimary
                            ]}
                        >Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

