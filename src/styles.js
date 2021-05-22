import {makeStyles} from "@material-ui/core/styles";

// we create a hook "useStyles" that equals to a f() call of makeStyles()
// cb f() that returns an Object

const useStyles = makeStyles((theme) => ({
    // css-in-js - specific approach of Material UI, instead of having a separate .css file with .css extension
    // good for dynamic styling
    // theme - O, provided by Material UI
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    // if we don't use theme O, then we need to wrap all properties in string
    icon: {
        marginRight: '20px'
    },
    buttons: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' // aspect ratio of  16:9
    },
    cardContent: {
        flexGrow: 1 // how much of the remaining space in the flex container should be assigned to the item
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}));

export default useStyles;
