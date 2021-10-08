import { Button, Checkbox, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import {React, useState} from 'react';
import { useHistory } from 'react-router';
import { addUser } from '../Service/api';


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

const AddUser = () => {
    const classes=useStyle();
    const [user, setUser]=useState(initialValues);
    const {fullName, department, position, gender, dateOfBirth}=user;
    const history=useHistory();

    const onValueChange=(e)=>{
         console.log(e.target.value);
         setUser({...user,[e.target.name]: e.target.value})
    }

    const addUserDetails= async()=>{
        await addUser(user); 
        history.push('./all')
    }
    return (
     <FormGroup className={classes.container}>
         <Typography variant="h2">Add User</Typography>
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
            
             <Input onChange={ (e)=>onValueChange(e)} name='dateOfBirth' value={dateOfBirth} type="date" id="start"  min="2018-01-01" max="2018-12-31" />
         </FormControl>
         <Button variant="contained" onClick={()=>addUserDetails()} color="primary">Add</Button>
     </FormGroup>
    )
}

export default AddUser;