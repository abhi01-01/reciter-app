import { makeStyles } from '@mui/styles';

export default makeStyles({
    media: {
        height: 250,
        width:"100%" 
    },
    border:{
        border:'solid',
    },
    fullHeightCard:{
        height:'100%',
    },
    card:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        borderBottom:'10px solid white',
    },
    activeCard:{
        borderBottom:'10px solid crimson',
        border:'1px solid crimson',
    },
    grid:{
        display:'flex',
    },
    details:{
        display:'flex',
        justifyContent:'space-between',
        margin:'20px',
    },
    title:{
        padding:'0 16px',
    },
    cardActions:{
        padding:'0 16px 8px 16px',
        display:'flex',
        justifyContent:'space-between',
    },
});