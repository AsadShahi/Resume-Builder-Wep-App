import { FunctionsOutlined } from '@mui/icons-material'
import { Button, Card, CardContent, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminNavbar from '../../admin/AdminNavbar'

export default function CoverLatterEdit() {
    const navigate=useNavigate();
    const [inputs,setInputs]=useState([])
    const [myImage,setImage]=useState('')
    const [message,setMessage]=useState('')
    const {id}=useParams();
    useEffect(()=>{
            getData()
    },[])
function getData(){
    axios.get('http://localhost:8000/api/admin/cover-sample-show/'+id)
    .then(res=>setInputs(res.data.show))
}
const HandleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value
    setInputs(values=>({...values,[name]:value}));
}
const UploadCover=async()=>{
//   alert('success')
const data=new FormData()
data.append('_method','PUT')
data.append('name',inputs.name)
data.append('image',myImage)
const response =await axios.post('http://localhost:8000/api/admin/cover-sample-edit/'+id,data,{
    headers:{'Content-Type':'multipart/form-data'}
})
if(response){
    console.log(response)
}
setMessage(response.data.message)
setTimeout(()=>{
        navigate('/admin/cover-sample-list')
},1000)
}
const SubmitForm=async(event)=>{
    event.preventDefault()
    await UploadCover()
}
  return (
    <section>
    <AdminNavbar />
    <div className='container' style={{ marginTop: '70px' }}>
        <Card>
            <CardContent>
                <Grid>
                    <form onSubmit={SubmitForm} >
                        <Grid>
                            <TextField type='text'
                             name='title' 
                            fullWidth
                            required
                            value={inputs.title}
                            onChange={HandleChange}
                             />
                        </Grid>
                        <Grid>
                            <img src={`http://127.0.0.1:8000/api/storage/${inputs.image}`}width={50}height={50} alt=''/>
                            <TextField type='file' name='image'onChange={(e)=>setImage(e.target.files[0])}/>
                        </Grid>
                        <Grid style={{ padding: '2px' }}>
                            <Button type='submit' variant='contained'>Register</Button>
                            &nbsp;
                            &nbsp;

                            <Button type='reset' variant='contained'>Reset</Button>
                        </Grid>
                    </form>
                </Grid>
            </CardContent>
        </Card>
    </div>
</section>
  )
}
