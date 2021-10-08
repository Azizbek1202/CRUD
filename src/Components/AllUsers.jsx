import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import {React, useEffect, useState} from 'react'
import { getUsers, deleteUser } from '../Service/api'
import { Link } from 'react-router-dom';
const useStyle = makeStyles({
    table:{
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead:{
        '&>*':{
            background: '#000000',
            color: '#FFFFFF',
           
        }
    }
});
const AllUsers = () => {
    const [users, setUsers]=useState([])
    const classes=useStyle();
    useEffect(() => {
        getAllUsers();
    },[])
    const getAllUsers= async ()=>{
       const response = await getUsers();
       console.log(response.data);
       setUsers(response.data);
    }

    const deleteUserData= async(id)=>{
         await deleteUser(id);
         getAllUsers();
    }
    return (
       <Table className={classes.table}>
           <TableHead>
               <TableRow className={classes.thead}>
                   <TableCell>Id</TableCell>
                   <TableCell>FullName</TableCell>
                   <TableCell>Department</TableCell>
                   <TableCell>Position</TableCell>
                   <TableCell>Gender</TableCell>
                   <TableCell>Date of birth</TableCell>
                   <TableCell></TableCell>
               </TableRow>
           </TableHead>
           <TableBody>               
                   {
                       users.map(user=>(
                           <TableRow>
                               <TableCell>{user.id}</TableCell>
                               <TableCell>{user.fullName}</TableCell>
                               <TableCell>{user.department}</TableCell>
                               <TableCell>{user.position}</TableCell>
                               <TableCell>{user.gender}</TableCell>
                               <TableCell>{user.dateOfBirth}</TableCell>
                               <TableCell>
                                   <Button variant='contained' color='primary' style={{marginRight: 10}} component={Link} to={`edit/${user.id}`}>Edit</Button>
                                   <Button variant='contained' color='secondary' onClick={()=>deleteUserData(user.id)}>Delete</Button>
                               </TableCell>
                           </TableRow>
                       ))
                   }
           </TableBody>
       </Table>
    )
}

export default AllUsers;