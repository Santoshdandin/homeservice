import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid, Card, CardContent, CardMedia,CardActions, Snackbar } from '@mui/material';
import { Alert } from '@mui/lab';

const HomeServiceList = () => {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedPrice, setEditedPrice] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    // Fetch the services data from the JSON file
    const fetchServices = async () => {
      try {
        const response = await fetch('/data/services.json');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchServices();
  }, []);

  const handleEdit = (service) => {
    setEditingService(service);
    setEditedName(service.name);
    setEditedDescription(service.description);
    setEditedPrice(service.price);
    setOpenDialog(true);
  };

  const handleUpdate = () => {
    if (!editingService) return;

    const updatedServices = services.map((service) => {
      if (service.id === editingService.id) {
        return {
          ...service,
          name: editedName,
          description: editedDescription,
          price: editedPrice,
        };
      }
      return service;
    });

    // Update the JSON file with the updated services data
    // Replace this code with your method of updating the JSON file
    // For example, if you're using Node.js, you can write the updated data to the JSON file using fs module
    console.log('Updated services:', updatedServices);

    setServices(updatedServices);
    setEditingService(null);
    setEditedName('');
    setEditedDescription('');
    setEditedPrice('');
    setOpenDialog(false);
  };

  const handleDelete = (service) => {
    const updatedServices = services.filter((item) => item.id !== service.id);

    // Update the JSON file with the updated services data
    // Replace this code with your method of updating the JSON file
    // For example, if you're using Node.js, you can write the updated data to the JSON file using fs module
    console.log('Updated services:', updatedServices);

    setServices(updatedServices);
  };

  const handleAddNewService = () => {
    setOpenDialog(true);
  };

  const handleAddService = () => {
    // Add your logic to save the new service to the JSON file or update the state as needed
    // Replace the following code with your own implementation

    const newService = {
      id: services.length + 1,
      name: editedName,
      description: editedDescription,
      price: editedPrice,
    };

    const updatedServices = [...services, newService];
    console.log('Updated services:', updatedServices);

    setServices(updatedServices);
    setOpenDialog(false);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <h2>Home Services List</h2>
      <Button variant="contained" color="primary" onClick={handleAddNewService} style={{ position: 'fixed', top: 100, right: 20 }}>
        Add Service
      </Button>

      <Grid container spacing={2}>
        {services.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.name}
              />
              <CardContent>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <p>Price: {service.price}</p>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleEdit(service)}>Edit</Button>
                <Button onClick={() => handleDelete(service)}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{editingService ? 'Edit Service' : 'Add New Service'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            fullWidth
            margin="normal"
            multiline
          />
          <TextField
            label="Price"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={editingService ? handleUpdate : handleAddService} variant="contained" color="primary">
            {editingService ? 'Save' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          New service added successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default HomeServiceList;
