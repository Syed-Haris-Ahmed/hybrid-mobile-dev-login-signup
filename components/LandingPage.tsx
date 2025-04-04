import { StyleSheet, Text, View, Image, Button } from 'react-native'
import NavBarButton from './NavBarButton'
import bg1 from '../assets/images/bg1.jpg'
import logo from '../assets/images/Logo-NBG.png'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function LandingPage() {
    return (
        <>
            <View style={styles.backgroundBlack}>
                <Image style={styles.background} source={bg1} />
            </View>

            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Image
                        style={styles.logo}
                        source={logo}
                    />
                    <View style={styles.navBarButtons}>
                        <NavBarButton title="About" />
                        <NavBarButton title="Sign up" />
                        <NavBarButton title="Login" outline={true} />
                    </View>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        We are a fully integrated <Text style={styles.titleSpan}>digital agency.</Text>
                    </Text>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.masterCard}>
                        <Text style={styles.masterText}>01</Text>
                        <Text style={styles.secondText}>User Research</Text>
                        <Text style={styles.thirdText}>Through our collaborative research and discovery process, we establish a shared vision and make sure the right product gets built for the right audience.</Text>
                    </View>

                    <View style={styles.normalCard}>
                        <Text style={styles.masterText}>02</Text>
                        <Text style={styles.secondText}>User Experience Design</Text>
                    </View>
                    
                    <View style={styles.normalCard}>
                        <Text style={styles.masterText}>03</Text>
                        <Text style={styles.secondText}>User Interface Design</Text>
                    </View>

                    <View style={styles.normalCard}>
                        <Text style={styles.masterText}>04</Text>
                        <Text style={styles.secondText}>Usability Testing</Text>
                    </View>

                    <View style={styles.normalCard}>
                        <Text style={styles.masterText}>05</Text>
                        <Text style={styles.secondText}>Interaction Design</Text>
                    </View>

                    <View style={styles.normalCard}>
                        <Text style={styles.masterText}>05</Text>
                        <Text style={styles.secondText}>Front-end Development</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    thirdText: {
        color: 'white',
        fontSize: 15
    },
    secondText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    masterText: {
        color: '#FFFFFF80',
        fontSize: 30
    },
    normalCard: {
        width: 270,
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        paddingStart: 30,
        paddingEnd: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF10',
        borderRadius: 8,
        shadowColor: 'black',
        elevation: 15
    },
    masterCard: {
        width: 280,
        height: 250,
        display: 'flex',
        flexDirection: 'column',
        paddingStart: 30,
        paddingEnd: 20,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFFFFF10',
        borderRadius: 8,
        shadowColor: 'black',
        elevation: 15
    },
    cardContainer: {
        /* backgroundColor: 'green', */
        width: '90%',
        height: '30%',
        marginTop: 230,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly'
    },
    titleSpan: {
        color: 'blue',
        fontWeight: '400'
    },
    title: {
        color: 'white',
        fontSize: 70,
        fontWeight: '100'
    },
    titleContainer: {
        width: '35%',
        height: '16%',
        // backgroundColor: 'green',
        marginTop: 150,
        marginEnd: 750
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: 20
    },
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
    backgroundBlack : {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.2
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