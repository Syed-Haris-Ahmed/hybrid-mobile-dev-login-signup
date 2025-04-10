// LandingPage.styles.js
import { StyleSheet } from 'react-native'

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
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '10%',
  },
  backgroundBlack: {
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

export default styles
