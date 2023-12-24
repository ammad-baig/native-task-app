import { View, Text, Image } from "react-native"
import ABButton from "../components/ABButton"
import rncStyles from "rncstyles"
import logo from '../assets/logo.png'
import ABIconButton from "../components/ABIconButton"
import { useSelector } from "react-redux"

export default function Home({ navigation }: any) {

    const user = useSelector((a: any) => a.login)
    // console.log(user)
    return (
        <View style={[rncStyles.h100, rncStyles.p2, rncStyles.bgLight]}>
            <View style={[rncStyles.flexRow, rncStyles.justifyContentEnd]}>
                {user.auth ?
                    <ABButton
                        onPress={() => {
                            navigation.navigate('Profile')
                        }}
                        label={user.loginData.fullName} />
                    : <ABIconButton
                        onPress={() => {
                            navigation.navigate('Login')
                        }}
                        name='person'
                    />}
            </View>
            <View style={[rncStyles.flexCenter, rncStyles.p4]}>
                <Image style={{ width: 80, height: 80 }} resizeMode="contain" source={logo} />
                <Text style={[rncStyles.fs2, rncStyles.textBlack, rncStyles.textCenter]}>NotePoint</Text>
            </View>
            <View style={[rncStyles.bgWhite, rncStyles.shadow3, rncStyles.rounded, rncStyles.p3, rncStyles.my2]}>
                <Text style={[rncStyles.fs3, rncStyles.textBlack]}>Total Teams</Text>
                <Text style={[rncStyles.fs2, rncStyles.textPrimary, rncStyles.textBold]}>786</Text>
            </View>
            <View>
                <ABButton onPress={() => {
                    navigation.navigate('CreateTask')
                }} label='Add Task' />
            </View>
            <View>
                <ABButton onPress={() => {
                    navigation.navigate('Task')
                }} label='My Task' />
            </View>
        </View>

    )
}