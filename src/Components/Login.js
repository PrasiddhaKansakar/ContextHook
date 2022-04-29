import React, {useContext} from 'react'
import {LoginContext} from "../Contexts/LoginContext"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from '@mui/material/Box'
import {styles} from '../Constants/StyleConstants'

export default function Login() {
    const {setUsername, setShowProfile} = useContext(LoginContext);

    return (
            <Box sx={{width: 400, height: 400}} style={styles.Box}>
            <h1 className='Heading'>Login Component</h1>
            <TextField style={styles.TextField} fullWidth id="outlined-basic" label="Username" variant="outlined" onChange={(e) => {setUsername(e.target.value)}}/>
            <TextField style={styles.TextField} fullWidth id="outlined-basic" label="Password" variant="outlined"/>
            <Button style={styles.Button} variant="contained" color="success" onClick={() =>{setShowProfile(true)}}>
                LOGIN
            </Button>
            </Box>
    )
}
