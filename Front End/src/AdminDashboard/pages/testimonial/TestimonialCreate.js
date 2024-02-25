


import React, { useState, useEffect } from 'react'

import { Card, CardContent, Typography, Grid, TextField, Button } from '@material-ui/core'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function TestimonialCreate() {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const [message, setMessage] = useState('')
    const navigate=useNavigate()


    const uplodateForm = async () => {
        const data = new FormData();
        data.append('name', name); // Add this line to set the 'name' field
        data.append('lastname', lastname);
        data.append('title', title);
        data.append('body', body)
        data.append('image', image)
        const Testimonial = await axios.post('http://localhost:8000/api/admin/test-create', data, {
          headers: { "Content-Type": "multipart/form-data" }
          
        });
        if (Testimonial) {
          console.log(Testimonial)
          setMessage(Testimonial.message)
          console.log('ok')
        }
       console.log(Testimonial)
    }



    const SubmitTestForm = async (e) => {
        e.preventDefault();
        await uplodateForm();
    }
    return (
        <div>
           
            <section className="testimonial-create container" style={{ marginTop: '80px', margin: '0 auto' }}>
                <Card >
                    <Typography gutterBottom variant='h3'>Add testimonial</Typography>
                    <CardContent container>
                        <form onSubmit={SubmitTestForm}>
                            <Grid container spacing={1} style={{}}>

                            <Grid item style={{ width: "50%", padding: "3px" }}>
                  <TextField
                    name="name"
                    variant="filled"
                    label="Name"
                    placeholder="Name..."
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                  />
                </Grid>{" "}
                <Grid item style={{ width: "50%", padding: "3px" }}>
                  <TextField
                    name="lastname"
                    variant="filled"
                    label="Lastname"
                    placeholder="lastname"
                    onChange={(e) => setLastname(e.target.value)}
                    fullWidth
                  />
                </Grid>
                



                                <Grid item style={{ width: '700px', padding: '3px' }} >
                                    <TextField name='title' variant='filled' label='Title' placeholder='Title'
                                        onChange={(e) => setTitle(e.target.value)} fullWidth />
                                </Grid>
                                <Grid item xs={12} style={{ width: '700px', padding: '3px' }}>
                                    <TextField name='body' variant='filled' multiline rows={5} label='Content' placeholder='Content'

                                        onChange={(e) => setBody(e.target.value)} fullWidth />
                                </Grid>
                                <Grid xs={12} item style={{ width: '700px', padding: '3px' }}>
                                    <TextField name='image' type='file'
                                        onChange={(e) => setImage(e.target.files[0])} fullWidth />
                                </Grid>
                                <Grid xs={12}>
                                    <Button type='submit' variant='contained' color='primary'>Add User</Button>
                                    <Button varinat='contained' color='info' type='reset'>Reset</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}
