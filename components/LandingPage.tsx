import { StyleSheet, Text, View, Image, Button } from 'react-native'
import NavBarButton from './NavBarButton'
import bg1 from '../assets/images/bg1.jpg'

export default function LandingPage() {
    return (
        <>
            <Image style={styles.background} source={bg1} />

            <View style={styles.container}>
                <View style={styles.navBar}>
                    <View>Logo</View>
                    <View style={styles.navBarButtons}>
                        <NavBarButton title="About" />
                        <NavBarButton title="Sign up" />
                        <NavBarButton title="Login" outline={true} />
                    </View>
                </View>

                <Text>
                    We are a fully integrated digital agency.
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    navBarButtons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '50%',
        // backgroundColor: 'green'
    },
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // gap: '2%',
        width: '100%',
        height: '10%',
        // backgroundColor: 'green'
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      color: 'white',
    },
    root: {
        color: 'white',
    }
})