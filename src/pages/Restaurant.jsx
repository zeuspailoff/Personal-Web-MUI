/* eslint-disable react/no-unescaped-entities */
import { Button, Grid, Box, Typography } from '@mui/material';
import '../App.css';
import Footer from '../components/Footer/Footer';
import GitHubIcon from '@material-ui/icons/GitHub'; // Importa desde @material-ui/icons
import Tooltip from '@mui/material/Tooltip';

const Restaurant = () => {
    return (
        <div style={{ position: 'absolute', top: '110px', width: '100%', backgroundColor: 'rgb(189, 189, 189)' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '10px', width: '100%' }}>
                {/* First Row: Text on the left, Image on the right */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <Typography variant="h4" fontWeight="fontWeightMedium" color="black" gutterBottom>
                            Discover and vote for the best restaurants on our website.
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            On our platform, you'll find a selection of exceptional restaurants, each with detailed descriptions, locations, opening hours, and specialties. From cozy local bistros to elegant gourmet restaurants, there's a dining experience for every taste.
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            Users can vote for their favorite restaurants, helping to highlight the most popular and recommended places. You can also leave your reviews and experiences to provide valuable information for other visitors.
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <Typography variant="h4" fontWeight="fontWeightMedium" color="black" gutterBottom>
                            Key Features:
                        </Typography>
                        <Typography variant="body1" color="black" component="ul" sx={{ fontSize: '1.2rem' }}>
                            <li>Restaurant Listings: Detailed information about each restaurant.</li>
                            <li>Voting System: Vote for your favorite places.</li>
                            <li>Image Gallery: High-quality images of interiors and dishes.</li>
                            <li>Reviews and Comments: Space for user opinions and experiences.</li>
                            <li>Search Filters: Search by cuisine type, location, and price range.</li>
                        </Typography>
                        <Typography variant="body1" color="black" paragraph sx={{ fontSize: '1.2rem' }}>
                            <br />
                            Our goal is to offer an intuitive and visually pleasing platform where food lovers can discover new dining places and share their opinions. Explore and find the perfect restaurant for your next meal!
                        </Typography>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, bgcolor: 'rgb(189, 189, 189)', width: '100%', height: '100%' }}>
                        <img
                            src={`/restauranteAbuela.png`}
                            alt='game'
                            loading="lazy"
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </Box>
                </Grid>

                {/* Button to check repository */}
                <Grid item xs={12} md={6} >
                    <Tooltip title="check the repository" arrow>
                        <a target="_blank" href="https://github.com/zeuspailoff/Pagina">
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

export default Restaurant;
