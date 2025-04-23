import { Text, Image, View, ImageBackground, ScrollView, Animated, TextInput, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import NavBarButton from './NavBarButton'
import CardView from './CardView'
import bg1 from '../assets/images/bg1 - mobile.jpg'
import logo from '../assets/images/Logo-NBG.png'

import styles from './LandingPage.mobile.style'

export default function LandingPageMobile() {

    const [fadeAnim] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, [])

    return (
        <>
            <View style={styles.backgroundBlack}>
                <ImageBackground
                    source={bg1}
                    style={styles.background}
                    imageStyle={styles.imageStyle}
                    blurRadius={3}
                >

                </ImageBackground>
            </View>

            <ScrollView
                contentContainerStyle={{ flexGrow: 1, alignItems: 'center', rowGap: 50 }}
            >
                <Animated.View style={{ flex: 1, opacity: fadeAnim, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={styles.logo}
                        source={logo}
                    />
                </Animated.View>

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

                <TextInput
                    style={styles.textInput}
                    placeholder="Username"
                    placeholderTextColor="#FFFFFF"
                    keyboardType="ascii-capable"
                />

                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    placeholderTextColor="#FFFFFF"
                    secureTextEntry={true}
                />

                <NavBarButton title="Login" outline={true} />

                <NavBarButton title="Sign up" />

                <NavBarButton title="About" />
            </ScrollView>
        </>
    )
}
