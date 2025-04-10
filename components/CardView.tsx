import { StyleSheet, Text, View, Image, Button, Platform } from 'react-native'
import styles from './LandingPage.style'

interface CardViewProps {
    number : string,
    title : string
}

const CardView: React.FC<CardViewProps> = ({ number, title }) => {
    return (
        <View style={styles.normalCard}>
            <Text style={styles.masterText}>{number}</Text>
            <Text style={styles.secondText}>{title}</Text>
        </View>
    )
}

export default CardView