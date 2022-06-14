import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    makeStyle:{
        fontSize:'100px',
        textAlign:'center',
        color:'white',
        ['@media (max-width:600px)']: {
            fontSize:'50px',
            textAlign:'left',
          },
    },
    headerSearch:{
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'spaceAround',
            padding: '10px 0px',
            borderRadius: '5px',
            position: 'relative',
            bottom: '-25px',
            width: '100%',
            maxWidth: '1024px',
            height: 'auto',
            margin: '0 auto',
            padding: '10px',
            ['@media (max-width:600px)']: {
                maxWidth:'300px',
                alignItems:'left',
                justifyContent:'initial',
                display:'block',
                position:'relative',
                left:'10px',
                buttom:'2px',
                width:'50%',
                margin:'2px',
              },
    },
    headerSearchItem:{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding:'10px',
        justifyContent:'center',
        alignContent:'center'
    }

}))