import {makeStyles} from "@material-ui/core/styles"
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { SortOutlined } from "@material-ui/icons";

const useStyles = makeStyles(theme =>({
    appbar:{
        background:"none",
    },
    appbarWrapper:{
        width:"80%",
        margin:"0 auto"
    },
    appbarTitle:{
        flexGrow:"1"
    },
    icon: {
        color:"#fff",
        fontSize:"2rem",
    }
}))

export default function Header() {
    const classes = useStyles();
    return (
    <>
        <AppBar className={classes.appbar} elevation={0} >
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}  >MyIsland</h1>
                <IconButton>
                    <SortOutlined className={classes.icon} />
                </IconButton>
            </Toolbar>
        </AppBar>
        </>
    )
}
