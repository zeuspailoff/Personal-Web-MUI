import { Button, Grid, Box, Typography } from '@mui/material';
import '../App.css';
import Footer from '../components/Footer/Footer';
import GitHubIcon from '@mui/icons-material/GitHub'; // Importa desde @mui/icons-material
import Tooltip from '@mui/material/Tooltip';

const FirstCv = () => {
    return (
        <div style={{ position: 'absolute', top: '110px', width: '100%', backgroundColor: 'rgb(189, 189, 189)' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '100px', width: '100%' }}>
                {/* First Row: Text on the left, Image on the right */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <Typography variant="h4" fontWeight="fontWeightMedium" color="black" gutterBottom>
                            Welcome to My First CV
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            This is my first CV, designed and developed using HTML, CSS, and Bootstrap. It showcases my skills, experiences, and education in a clean and professional layout.
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            The CV is structured to highlight key sections such as personal information, work experience, education, skills, and projects. Each section is carefully crafted to provide a comprehensive overview of my qualifications and achievements.
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <Typography variant="h4" fontWeight="fontWeightMedium" color="black" gutterBottom>
                            Key Features:
                        </Typography>
                        <Typography variant="body1" color="black" component="ul" sx={{ fontSize: '1.2rem' }}>
                            <li>Clean Design: A neat and professional layout for easy readability.</li>
                            <li>Responsive Layout: Built with Bootstrap to ensure a responsive design across all devices.</li>
                            <li>Personal Information: Includes essential contact information and a brief personal statement.</li>
                            <li>Work Experience: Detailed descriptions of my previous job roles and responsibilities.</li>
                            <li>Education: Information on my academic background and achievements.</li>
                            <li>Skills: A section highlighting my technical and soft skills.</li>
                            <li>Projects: Showcase of my key projects with descriptions and links.</li>
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            <br />
                            This CV is a testament to my dedication and skill in web development, combining modern web technologies to create a polished and effective personal profile. Explore my CV to learn more about my professional journey and capabilities.
                        </Typography>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <img
                            src={`../cvfoto359.png`}
                            alt='game'
                            loading="lazy"
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </Box>
                </Grid>
                {/* Add the GitHub Button */}
                <Grid item xs={12} md={6} >
                    <Tooltip title="check the repository" arrow>
                        <a target="_blank" href="https://github.com/zeuspailoff/Space-game">
                            <Button size="small" style={{ marginBottom: '150px' }}>
                                <GitHubIcon style={{ color: 'Black', fontSize: '2.5rem', marginBottom: '10px' }} />
                            </Button>
                        </a>
                    </Tooltip>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default FirstCv;
