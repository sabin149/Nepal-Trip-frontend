import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    makeStyle:{
        fontSize:'100px',
        textAlign:'center',
        // color:'#003c75',
        color:'white',
        fontFamily: 'Kaushan Script,cursive',
        // fontWeight:'bold',

        '@media (max-width:600px)': {
            fontSize:'50px',
            textAlign:'left',

            // .ui.container>h1{
            //     font-family: 'Great Vibes';
            //     color: white;
            //     font-size: 100px;
            //     font-weight: bold;
            //     /* padding-left: 100px; */
            //     text-align: center;
               
            //   }






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
    
            '@media (max-width:600px)': {
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