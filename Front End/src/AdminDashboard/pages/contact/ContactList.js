


import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function ContactList() {
    const [contactlist, setContactList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/admin/contact-index')
            .then(res => {
                setContactList(res.data.contactindex)
            })
            .catch()
    }, [])
    const ContactDelete = (id) => {
            const confirm=window.confirm('Are Sure Want Delete Contact?')
            if(confirm){
                fetch('http://localhost:8000/api/admin/contact-delete/'+id,{
                    method: 'DELETE',
                })
                .then()
                setTimeout(()=>{
                        window.location.reload(true)
                },1000
                )
            }
    }
    var contactDetails = ''
    contactDetails = contactlist.map((items, index) => {
        return (
            <TableRow>
                <TableCell>{items.id}</TableCell>
                <TableCell>{items.fullname}</TableCell>
                <TableCell>{items.email}</TableCell>
                <TableCell>{items.phone}</TableCell>
                <TableCell>{items.subject}</TableCell>
                <TableCell>
                    <Button onClick={()=>ContactDelete(items.id)} variant='contained' color='warning'>Delete </Button>
                </TableCell>
            </TableRow>
        )
    })

    const HandleDelete = (id) => {
        const confirm = window.confirm('Are Sure Want Delete?')
        if (confirm) {
            axios.delete("http://localhost:8000/api/admin/contact-delete/" + id)
                .then(res => console.log(res))
                .catch()
        }
    }
    return (
        <section>
           
            <div className='container' style={{ marginTop: '70px' }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>FullName</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone </TableCell>
                                <TableCell>Message</TableCell>
                                <TableCell>Delete</TableCell>
                                <TableCell>Approve</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {contactDetails}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    )
}
