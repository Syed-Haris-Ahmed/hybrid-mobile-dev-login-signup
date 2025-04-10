import { StyleSheet, Text, View, Image, Button, Platform } from 'react-native'
import NavBarButton from './NavBarButton'
import CardView from './CardView'
import bg1 from '../assets/images/bg1.jpg'
import logo from '../assets/images/Logo-NBG.png'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import styles from './LandingPage.style'

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

                    <CardView number="02" title="User Experience Design" />
            
                    <CardView number="03" title="User Interface Design" />
            
                    <CardView number="04" title="Usability Testing" />

                    <CardView number='05' title="Interaction Design" />                   

                    <CardView number='06' title="Front-end Development" />                   
                </View>
            </View>
        </>
    )
}