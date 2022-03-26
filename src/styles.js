import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    color: 'black',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
  },
  link: {
    textDecoration: 'none',
    color: 'crimson',
  },
  image: {
    marginLeft: 20,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '1%',
    backgroundColor:'rgb(25,25,25)',
    borderRadius: 10,
    color: 'crimson',
    margin: '0 6px',
    textAlign: 'center',
    height: '20vh',
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logoContainer: {
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
   
  },
  reciterLogo: {
    height: '20vh',
    borderRadius: '15%',
    padding: '0 5%',
    margin: '3% 0',
   
  },
}));