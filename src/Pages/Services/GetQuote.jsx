import React, { useState,useRef,useEffect } from 'react';

import {
    Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Snackbar,
 Alert,
 
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from "axios";



const GetQuote = ({service}) => {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    const [formData, setFormData] = useState({
      name: '',
      city: '',
      location: '',
      mobile: '',
      
      
      
    });
    
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('info');
  const [alertMessage, setAlertMessage] = useState('');
  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [otp, setOtp] = useState('');

  const [timer, setTimer] = useState(180); // Timer in seconds
  const [otpInputs, setOtpInputs] = useState(['', '', '', '', '', '']);
  const countdownIntervalRef = useRef(null);


  const handleOtpDialogOpen = () => {
    setOtp(generateOtp());
    setOtpDialogOpen(true);
    startTimer();
  };

  const handleOtpDialogClose = () => {
    setOtpDialogOpen(false);
    setOtpInputs(['', '', '', '', '', '']);
    resetTimer();
  };

  const generateOtp = () => {
    const otpLength = 6;
    const otpDigits = '0123456789';
    let otp = '';
    for (let i = 0; i < otpLength; i++) {
      otp += otpDigits[Math.floor(Math.random() * otpDigits.length)];
    }
    alert(otp)
    return otp
  };

  const startTimer = () => {
    if (!countdownIntervalRef.current) {
      countdownIntervalRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 0) {
            clearInterval(countdownIntervalRef.current);
            handleOtpDialogClose();
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
  };

  const resetTimer = () => {
    clearInterval(countdownIntervalRef.current);
    countdownIntervalRef.current = null;
    setTimer(180);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,status:'pending',serviceRequired:service.title
    });
  };

  const handleSubmit = () => {
    if ( !formData.name ||
        !formData.city ||
        !formData.location ||
        !formData.mobile) {
            setAlertSeverity('error');
      setAlertMessage('All fields are required');
      setAlertOpen(true);
        

        
      } else {
        setAlertOpen(false);
        handleClose();
        handleOtpDialogOpen();
       
        
        
      }

    



  };

  const handleOtpInputChange = (index, value) => {
    if (value === '' && index > 0) {
        const previousInputRef = otpInputRefs.current[index - 1];
        if (previousInputRef) {
          previousInputRef.focus();
        }
      } else if (value.length === 1 && index < otpInputs.length - 1) {
        const nextInputRef = otpInputRefs.current[index + 1];
        if (nextInputRef) {
          nextInputRef.focus();
        }
      }
    
      const newOtpInputs = [...otpInputs];
      newOtpInputs[index] = value;
    
      setOtpInputs(newOtpInputs);
  };


  const verifyOtp = () => {
    const enteredOtp = otpInputs.join('');
    if (enteredOtp === otp) {
      // Post form data to JSON endpoint using Axios
      axios
        .post('https://lazy-ruby-shawl.cyclic.app/orders', formData)
        .then((response) => {
          // Handle response data as needed
          console.log('Response:', response.data);
          handleOtpDialogClose();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    console.log(formData)
    handleOtpDialogClose()
    setAlertSeverity('success');
      setAlertMessage('Requested successfully');
      setAlertOpen(true);
      setOtpInputs(['', '', '', '', '', '']);
      setFormData({
        name: '',
        city: '',
        location: '',
        mobile: '',
      });


    } else {
        setAlertSeverity('error');
        setAlertMessage('Wrong OTP');
        setAlertOpen(true);
    }
  };


  const handleResendOtp = () => {
    setOtpInputs(['', '', '', '', '', '']);
    setOtp(generateOtp());
    setTimer(180);
  };

  const handleOpen = () => {
    setOpen(true);

  };

 
  const handleAlertClose = () => {
    setAlertOpen(false);
  };


  const otpInputRefs = useRef([]);

  const setOtpInputRef = (index, ref) => {
    otpInputRefs.current[index] = ref;
  };

  useEffect(() => {
    return () => {
      // Cleanup function to clear the interval
      clearInterval(countdownIntervalRef.current);
    };
  }, []);
  

  return (
    <Box width={'20rem'}>
        <Button  sx={{
                display: "block",
                width: "100%",
                maxWidth: "20rem",
                mt: "3rem",
                color: "#343f52",
                borderRadius: "0.625rem",
                padding: "0.875rem",
                fontSize: "1.25rem",
                textTransform: "unset",
                fontWeight: "500",
                boxSizing: "border-box",
                background: "#C1FF72",
                transition: "all 300ms ease 0s",
                ":hover":{background: "#9acc5b"}
              }} size={'large'} variant="contained" onClick={handleOpen}>
        Get a Quote
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} >
        <Box sx={{bgcolor:'#fefefe',maxWidth:'500px'}}>
        <DialogTitle>Get a Quote for <Box component="span" color={'#FF914D'} fontSize={'22px'} fontWeight={700}>{service.title}</Box> </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            label="Name"
            name='name'
            fullWidth
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="City"
            name='city'
            fullWidth
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <TextField
            margin="dense"
            label="Location"
            fullWidth
            name='location'
            value={formData.location}
            onChange={handleInputChange}
            required
          />
          <TextField
          
            margin="dense"
            label="Mobile Number"
            name='mobile'
            fullWidth
            value={formData.mobile}
            onChange={handleInputChange}
            required
            inputProps={{
              maxLength: 10,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{
                display: "block",
                width: "100%",
                maxWidth: "6rem",
              
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
              }} size={'large'} variant="contained" onClick={handleClose} >
            Cancel
          </Button>
          <Button sx={{
                display: "block",
                width: "100%",
                maxWidth: "6rem",
              
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
              }} size={'large'} variant="contained" onClick={handleSubmit} >
            Submit
          </Button>
        </DialogActions>

        </Box>
        
      </Dialog>
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={handleAlertClose}
        
      ><Alert onClose={handleAlertClose} severity={alertSeverity} sx={{ width: '100%' }}>
     {alertMessage}
    </Alert></Snackbar>

    <Dialog  fullScreen={fullScreen} open={otpDialogOpen} onClose={handleOtpDialogClose}>
        <DialogTitle>Enter OTP</DialogTitle>
        <DialogContent>
          <Box display="flex" columnGap={'10px'} justifyContent="center">
            {otpInputs.map((input, index) => (
              <TextField
                key={index}
                value={input}
                onChange={(e) => handleOtpInputChange(index, e.target.value)}
                inputProps={{
                  maxLength: 1,
                  style: { width: '40px', height: '40px', textAlign: 'center' },
                }}
                inputRef={(ref) => setOtpInputRef(index, ref)}
              />
            ))}
          </Box>
          <p>Time Remaining: {timer} seconds</p>

          <Button sx={{
                display: "block",
                width: "100%",
                maxWidth: "6rem",
              
                color: "#343f52",
                borderRadius: "0.625rem",
                padding: "0.875rem",
                fontSize: "1rem",
                textTransform: "capitalize",
                fontWeight: "500",
                boxSizing: "border-box",
                background: "#C1FF72",
                transition: "all 300ms ease 0s",
                ":hover":{background: "#9acc5b"}
              }} size={'large'} variant="contained" onClick={handleResendOtp}>Resend</Button>
        </DialogContent>
        <DialogActions>
          <Button sx={{
                display: "block",
                width: "100%",
                maxWidth: "6rem",
              
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
              }} size={'large'} variant="contained" onClick={handleOtpDialogClose}>Cancel</Button>
          <Button sx={{
                display: "block",
                width: "100%",
                maxWidth: "6rem",
              
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
              }} size={'large'} variant="contained" onClick={verifyOtp}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default GetQuote