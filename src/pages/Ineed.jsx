import { Button, Grid, Box, Typography } from '@mui/material';
import '../App.css';
import Footer from '../components/Footer/Footer';
import GitHubIcon from '@mui/icons-material/GitHub'; // Importa desde @mui/icons-material
import Tooltip from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Importa desde @mui/icons-material

const Ineed = () => {
    return (
        <div style={{ position: 'absolute', top: '110px', width: '100%', backgroundColor: 'rgb(189, 189, 189)' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '10px', width: '100%' }}>
                {/* First Row: Text on the left, Image on the right */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, borderRadius: '10px', width: '100%', height: '100%', marginBottom: '20px' }}>
                        <Typography variant="h4" fontWeight="fontWeightMedium" color="black" gutterBottom>
                            Welcome to Ineddup
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            Welcome to Ineddup, where you can ask questions and find answers. Much like Stack Overflow, Ineddup provides a collaborative environment for users to seek knowledge, share expertise, and connect with others in their fields of interest.
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            Ineddup is built using React for the front-end, Node.js with Express for the back-end, and MySQL for the database. This combination ensures a robust, efficient, and scalable platform.
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            The platform also incorporates email sending functionality for registration validation and password recovery, ensuring a secure and user-friendly experience.
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, borderRadius: '10px', width: '100%', height: '100%' }}>
                        <Typography variant="h4" fontWeight="fontWeightMedium" color="black" gutterBottom>
                            Key Features:
                        </Typography>
                        <Typography variant="body1" color="black" component="ul" sx={{ fontSize: '1.2rem' }}>
                            <li>Question and Answer Platform: Ask questions and get answers from the community.</li>
                            <li>Collaborative Environment: Share knowledge and expertise with other users.</li>
                            <li>React Front-End: Enjoy a dynamic and responsive user interface.</li>
                            <li>Node.js and Express Back-End: Benefit from a powerful and efficient server-side framework.</li>
                            <li>MySQL Database: Reliable and scalable database management.</li>
                            <li>Email Functionality: Secure email validation for registration and password recovery.</li>
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            <br />
                            Ineddup combines modern web technologies to provide a seamless and effective platform for knowledge sharing and community engagement. Join us today and start connecting with others in your field of interest!
                        </Typography>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <img
                            src={`/Home.png`}
                            alt='game'
                            loading="lazy"
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </Box>
                </Grid>
                {/* Add the GitHub and Website Buttons */}
                <Grid item xs={12} md={6} >
                    <Tooltip title="check the repository" arrow>
                        <a target="_blank" href="https://github.com/zeuspailoff/Space-game">
                            <Button size="small" style={{ marginBottom: '160px' }}>
                                <GitHubIcon style={{ color: 'Black', fontSize: '2.5rem', marginBottom: '10px' }} />
                            </Button>
                        </a>
                    </Tooltip>
                    <Tooltip title="Check IneedUp" arrow>
                        <a target="_blank" href="https://ineedup.com.es/">
                            <Button size="small" style={{ marginBottom: '170px' }}>
                                <VisibilityIcon style={{ color: 'Black', fontSize: '3rem', marginBottom: '10px' }} />
                            </Button>
                        </a>
                    </Tooltip>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default Ineed;
