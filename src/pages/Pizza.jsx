import { Button, Grid, Box, Typography } from '@mui/material';
import '../App.css';
import Footer from '../components/Footer/Footer';
import GitHubIcon from '@material-ui/icons/GitHub'; // Importa desde @material-ui/icons
import Tooltip from '@mui/material/Tooltip';

const Pizza = () => {
    return (
        <div style={{ position: 'absolute', top: '110px', width: '100%', backgroundColor: 'rgb(189, 189, 189)' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '10px', width: '100%' }}>
                {/* First Row: Text on the left, Image on the right */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <Typography variant="h4" fontWeight="fontWeightMedium" color="black" gutterBottom>
                            Welcome to PizzaQuiz!
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            Dive into a world of pizza-themed trivia with PizzaQuiz. Test your knowledge of toppings, dough, and pizza history in this exciting quiz game.
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            PizzaQuiz is designed with HTML, CSS, and JavaScript to offer an interactive and fun user experience. Challenge your friends, earn achievements, and become the ultimate pizza expert.
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <Typography variant="h4" fontWeight="fontWeightMedium" color="black" gutterBottom>
                            Key Features:
                        </Typography>
                        <Typography variant="body1" color="black" component="ul" sx={{ fontSize: '1.2rem' }}>
                            <li>Trivia Questions: Challenge your knowledge about all things pizza.</li>
                            <li>Multiplayer: Compete against your friends and see who knows more.</li>
                            <li>Achievements: Earn achievements as you play and showcase your expertise.</li>
                            <li>Interactive Interface: Enjoy a smooth and engaging user experience.</li>
                            <li>Built with HTML, CSS, and JavaScript: Utilizes modern web technologies for optimal performance.</li>
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            <br />
                            PizzaQuiz combines fun and learning in an interactive platform. Start playing today and find out how much you really know about pizza!
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <img
                            src={`/pizzaquiz.gif`}
                            alt='game'
                            loading="lazy"
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </Box>
                </Grid>

                {/* Button to check repository */}
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

export default Pizza;
