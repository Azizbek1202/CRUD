import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'


const useStyle=makeStyles({
    header:{
        background: '#111111'
    },
    tabs:{
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight: 100,
        fontSize: 30
    }
})
const Navbar = () => {
    const classes=useStyle();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="./">Code for interview</NavLink>
                <NavLink className={classes.tabs} to="all">All users</NavLink>
                <NavLink className={classes.tabs} to="add">Add user</NavLink>
            </Toolbar>
        </AppBar>
    )
}


export default Navbar