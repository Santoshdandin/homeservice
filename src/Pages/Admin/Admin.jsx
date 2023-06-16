import { Box, Button, Link } from '@mui/material'
import React from 'react'

const Admin = () => {

  return (
   <Box display={'flex'} justifyContent={'center'} columnGap={'50px'} height={'450px'} alignItems={'center'} bgcolor={'#f1f5fd'}>
   <Link href="/admin/editservices" color="inherit" underline="none"> <Button sx={{
                display: "block",
                
                width: "10rem",
              
                color: "#343f52",
                borderRadius: "0.625rem",
                padding: "10px",
                fontSize: "1rem",
                textTransform: "capitalize",
                fontWeight: "500",
                boxSizing: "border-box",
                background: "#C1FF72",
                transition: "all 300ms ease 0s",
                ":hover":{background: "#9acc5b"}
              }} size={'large'} variant="contained"  >
           Edit Services
          </Button> </Link>

          <Link href="/admin/orders" color="inherit" underline="none"> <Button sx={{
                display: "block",
                
                width: "10rem",
              
                color: "#343f52",
                borderRadius: "0.625rem",
                padding: "10px",
                fontSize: "1rem",
                textTransform: "capitalize",
                fontWeight: "500",
                boxSizing: "border-box",
                background: "#C1FF72",
                transition: "all 300ms ease 0s",
                ":hover":{background: "#9acc5b"}
              }} size={'large'} variant="contained"  >
           Orders
          </Button> </Link>
   </Box>
  )
}

export default Admin