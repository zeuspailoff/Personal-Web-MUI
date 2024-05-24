/* eslint-disable react/no-unescaped-entities */
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Footer from "../components/Footer/Footer";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userID = import.meta.env.VITE_EMAILJS_USER_ID;



const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            serviceID,
            templateID,
            formData,
            userID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <div style={{ display: 'flex', backgroundColor: 'rgb(189, 189, 189)', flexDirection: 'column', minHeight: '100vh', minWidth: '100vw' }}>
            <div style={{ display: 'flex', bgcolor: 'rgb(189, 189, 189)', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingTop: '110px', width: '100%' }}>
                <Box sx={{
                    p: 4, bgcolor: 'white', width: { xs: '90%', sm: '70%', md: '50%', lg: '40%' }
                    , minHeight: '90%', borderRadius: '25px', boxShadow: '3px 2px 10px black'
                }}>
                    <Typography variant="h4" fontWeight="fontWeightMedium" color="black" gutterBottom>
                        Contact Me
                    </Typography>
                    <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                        If you have any questions, feel free to reach out to me through the form below. I'll get back to you as soon as possible! Don't forget to include a contact method so I can respond to you.
                    </Typography>
                    <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    variant="outlined"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="subject"
                                    label="Subject"
                                    name="subject"
                                    autoComplete="subject"
                                    variant="outlined"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="message"
                                    label="Message"
                                    name="message"
                                    autoComplete="message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3 }}
                        >
                            Send Message
                        </Button>
                    </Box>
                </Box>
            </div>

            <Footer style={{ position: 'relative', width: '100%' }} />
        </div>
    );
};

export default Contact;
