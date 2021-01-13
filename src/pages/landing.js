import Head from "next/head";
import {makeStyles} from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core";

import Header from "../components/Header";

const useStyles = makeStyles(theme =>({
    root:{
        minHeight:"100vh",
        backgroundImage:`url(/assets/images/forest.jpg)`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }
}))

export default function Landing({children}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline /> 
        <Header />
        {children}

        </div>
    )
}
