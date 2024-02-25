import React from 'react'
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";


export default function YourResume() {
  return (
    <div className="container" style={{ marginTop: "80px" }}>
    <Card>
      <h2>News Letter</h2>
      <CardContent>
        <Table>
          <TableRow>
            <TableHead>
              <TableCell>ID</TableCell>
              <TableCell>Email as</TableCell>
              <TableCell>Delete</TableCell>
            </TableHead>
            <TableBody>
              


            </TableBody>
          </TableRow>
        </Table>
      </CardContent>
    </Card>
  </div>
  )
}
