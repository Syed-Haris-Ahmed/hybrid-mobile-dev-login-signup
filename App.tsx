import LandingPage from './components/LandingPage'
import LandingPageMobile from './components/LandingPageMobile'
import '@expo/metro-runtime'
import { Platform } from 'react-native'

const FinalLandingPage = Platform.select({
    ios: () => LandingPageMobile,
    android: () => LandingPageMobile,
    web: () => LandingPage,
    default: () => LandingPage,
})()

export default function App() {
    return (
        <FinalLandingPage />
    )
}