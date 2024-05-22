import { Button, Grid, Box, Typography } from '@mui/material';
import '../App.css';
import Footer from '../components/Footer/Footer';
import GitHubIcon from '@mui/icons-material/GitHub'; // Importa desde @mui/icons-material
import Tooltip from '@mui/material/Tooltip';

const Editor = () => {
    return (
        <div style={{ position: 'absolute', top: '110px', width: '100%', backgroundColor: 'rgb(189, 189, 189)' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '10px', width: '100%' }}>
                {/* First Row: Text on the left, Image on the right */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <Typography variant="h4" fontWeight="fontWeightMedium" color="black" gutterBottom>
                            Welcome to our Java Text Editor
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            Our text editor, developed in Java using the IntelliJ development environment, offers a powerful and user-friendly text editing experience. Designed for both novice and professional users, this editor provides all the tools needed to manage your documents efficiently.
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            Among its standout features is the ability to pin the editor window to your desired position on the screen, allowing you to customize your workspace and keep the editor accessible at all times.
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <Typography variant="h4" fontWeight="fontWeightMedium" color="black" gutterBottom>
                            Key Features:
                        </Typography>
                        <Typography variant="body1" color="black" component="ul" sx={{ fontSize: '1.2rem' }}>
                            <li>Intuitive Interface: Easy to use with a clean and organized interface.</li>
                            <li>Pinning Function: Pin the editor window to any position on your screen.</li>
                            <li>Multiple Format Support: Compatible with various text file formats.</li>
                            <li>Advanced Editing Features: Includes tools such as search and replace, syntax highlighting, and more.</li>
                            <li>Developed in Java: Leverages the robustness and portability of the Java language.</li>
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            <br />
                            This text editor combines advanced functionality with a straightforward design to offer you an efficient and effective tool for all your text editing needs. Try our editor and enhance your workflow today!
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <img
                            src={`/gifThunderEdit.gif`}
                            alt='game'
                            loading="lazy"
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </Box>
                </Grid>
                {/* Add the GitHub Button */}
                <Grid item xs={12} md={6} >
                    <Tooltip title="check the repository" arrow>
                        <a target="_blank" href="https://github.com/zeuspailoff/Editor-de-texto">
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

export default Editor;
