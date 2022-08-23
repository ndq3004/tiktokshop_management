import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        minWidth: "550px"
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    formControl: {
        width: "100%",
        display: '-webkit-box'
    },
    formControlRight: {
        
    },
    textField: {
        '& > *': {
            margin: theme.spacing(1),
          }
    },
    textFieldCurrency:{
          width: '100px'
    },
    textFieldUnit:{
        width: '100px'
  },
    inputImage: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(2,0,2,0)
    }
}))