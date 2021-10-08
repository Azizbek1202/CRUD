import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import {React, useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router';
import { editUser, getUsers } from '../Service/api';


const useStyle=makeStyles({
    container:{
        width: '50%',
        margin: '5% 0 0 25%',
        '&>*':{
            marginTop: 20
        }
    }
});

const initialValues ={
    fullName: '',
    department: '',
    position: '',
    gender: '',
    dateOfBirth: ''
}

const EditUser = () => {
    const classes=useStyle();
    const [user, setUser]=useState(initialValues);
    const {fullName, department, position, gender, dateOfBirth}=user;
    const { id }=useParams();
    const history=useHistory();
    useEffect(()=>{
        loadUserData();
    }, []);

    const loadUserData= async()=>{
          const response = await getUsers('http://localhost:3003/users'+id);
          console.log(response.data);
    }

    const onValueChange=(e)=>{
         console.log(e.target.value);
         setUser({...user,[e.target.name]: e.target.value})
    }

    const editUserDetails= async()=>{
        await editUser(id, user); 
        history.push("./");
    }
    return (
     <FormGroup className={classes.container}>
         <Typography variant="h2">Edit User</Typography>
         <FormControl>
             <InputLabel>FullName</InputLabel>
             <Input onChange={ (e)=>onValueChange(e)} name='fullName' value={fullName}/>
         </FormControl>
         <FormControl>
             <InputLabel>Department</InputLabel>
             <Input onChange={ (e)=>onValueChange(e)} name='department' value={department}/>
         </FormControl>
         <FormControl>
             <InputLabel>Position</InputLabel>
             <Input onChange={ (e)=>onValueChange(e)} name='position' value={position}/>
         </FormControl>
         <FormControl>
             <InputLabel>Gender</InputLabel>
             <Input onChange={ (e)=>onValueChange(e)} name='gender' value={gender}/>
         </FormControl>
         <FormControl>
             <InputLabel>Date</InputLabel>
             <Input onChange={ (e)=>onValueChange(e)} name='dateOfBirth' value={dateOfBirth}/>
         </FormControl>
         <Button variant="contained" onClick={()=>editUserDetails()} color="primary">Edit</Button>
     </FormGroup>
    )
}

export default EditUser;