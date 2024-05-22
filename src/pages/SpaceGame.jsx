import { Button, Grid, Box, Typography } from '@mui/material';
import { Icon } from '@material-ui/core';
import '../App.css';
import Footer from '../components/Footer/Footer';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@mui/material/Tooltip';

const SpaceGame = () => {
    return (
        <div style={{ position: 'absolute', top: '110px', width: '100%', backgroundColor: 'rgb(189, 189, 189)' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '10px', width: '100%' }}>
                {/* First Row: Text on the left, Image on the right */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <Typography variant="h4" fontWeight="fontWeightMedium" color="black" gutterBottom>
                            Embark on an exhilarating journey with Space Game, a dynamic 2D asteroid-themed adventure.
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            In this game, players face relentless waves of enemies that increase in intensity as the game progresses. Each enemy defeated rewards the player with points, driving the primary objective of achieving the highest score possible.
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            Developed in the IntelliJ development environment using the Java language, Space Game harnesses the capabilities of the ModelAndView object to deliver a seamless gaming experience. The project integrates advanced graphics to create an engaging visual environment, realistic physics to simulate accurate object behaviors, and responsive keyboard and mouse controls for intuitive user interaction.
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <Typography variant="h4" fontWeight="fontWeightMedium" color="black" gutterBottom>
                            Key Features:
                        </Typography>
                        <Typography variant="body1" color="black" component="ul" sx={{ fontSize: '1.2rem' }}>
                            <li>Challenging Gameplay: Navigate through progressively difficult waves of enemies.</li>
                            <li>Scoring System: Earn points for each defeated enemy to achieve high scores.</li>
                            <li>Advanced Graphics: Enjoy an appealing visual experience with detailed graphics.</li>
                            <li>Realistic Physics: Experience lifelike object behavior and interactions within the game environment.</li>
                            <li>Responsive Controls: Utilize keyboard and mouse inputs for precise and smooth gameplay.</li>
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            <br />
                            Space Game combines classic arcade excitement with modern development techniques to offer players an immersive and challenging experience. Dive into the action and see how high you can score!
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <img
                            src={`../public/spacegif1.gif`}
                            alt='game'
                            loading="lazy"
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </Box>
                </Grid>



                <Grid item xs={12} md={6} >
                    <Tooltip title="check the repository" arrow>
                        <a target="_blank" href="https://github.com/zeuspailoff/Space-game">
                            <Button size="small" style={{ marginBottom: '150px' }}>
                                <Icon style={{ color: 'Black', fontSize: '2.5rem', marginBottom: '10px' }} component={GitHubIcon} />
                            </Button>
                        </a>
                    </Tooltip>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default SpaceGame;
