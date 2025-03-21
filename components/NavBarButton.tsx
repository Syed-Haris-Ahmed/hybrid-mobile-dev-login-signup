import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

interface NavBarButtonProps {
    title?: string
    outline?: boolean
    onPress?: () => void
}

const NavBarButton: React.FC<NavBarButtonProps> = ({ title = "Learn More", outline = false, onPress }) => {
    return (
        <View style={[styles.buttonView, outline && styles.outline]}>
            <Button
                onPress={onPress || (() => alert('Test'))}
                title={title}
                color="#00000000"
                accessibilityLabel="Learn more about this button"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonView: {
        paddingHorizontal: '1%',
        paddingVertical: '0.5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%'
    },
    outline: {
        borderWidth: 1,
        borderColor: 'white',
    }
})

export default NavBarButton
