import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import '../App.css';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Footer from "../components/Footer/Footer";


const Home = () => {

    return (
        <div style={{ position: 'absolute', top: '126px', width: '100%' }}>

            <Grid container spacing={2} justifyContent="center" style={{ background: '#37474f' }} >
                <Grid item xs={12} className="banner" >
                    <Typography align="center"></Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', background: '#37474f', height: 125 }} style={{ background: '#bdbdbd' }}>
                    <Typography align="center" fontWeight="fontWeightBold" variant="h3" component='h1'>Portfolio Showcase: Exploring My Creations</Typography>
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
                    <Card sx={{ maxWidth: '90%', margin: 'auto' }} align="center">
                        <CardMedia
                            sx={{ height: 340 }}
                            image="/spacegif1.gif"
                            title="Space game gif"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Space-Game
                            </Typography>
                            <Typography variant="body1" fontWeight="fontWeightMedium" color="text.secondary">
                                Embark on an exciting space adventure in Cosmic Cascade! This Asteroids-style game challenges you to navigate asteroid fields, dodge enemies, and unleash laser chaos.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Tooltip title="check the repository" arrow>
                                <a target="_blank" href="https://github.com/zeuspailoff/Space-game">
                                    <Button size="small">
                                        <GitHubIcon style={{ color: 'Black' }} />
                                    </Button>
                                </a>
                            </Tooltip>
                            <Link to="/SpaceGame">
                                <Button size="small">Learn More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
                    <Card sx={{ maxWidth: '90%', margin: 'auto' }} align="center">
                        <CardMedia
                            sx={{ height: 340 }}
                            image="/restauranteAbuela.png"
                            title="Description Casa Abuela"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Restaurants Website
                            </Typography>
                            <Typography variant="body1" fontWeight="fontWeightMedium" color="text.secondary">
                                Discover and vote for your favorite restaurants with our interactive template! Join a community of food lovers, explore new cuisines, and share your culinary experiences with ease.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Tooltip title="check the repository" arrow>
                                <a target="_blank" href="https://github.com/zeuspailoff/zeuspailoff.github.com">
                                    <Button size="small">
                                        <GitHubIcon style={{ color: 'Black' }} />
                                    </Button>
                                </a>
                            </Tooltip>
                            <Link to="/Restaurant">
                                <Button size="small">Learn More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
                    <Card sx={{ maxWidth: '90%', margin: 'auto' }} align="center">
                        <CardMedia
                            sx={{ height: 340 }}
                            image="/ThunderPeque.png"
                            title="Image Text Editor"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Text Editor
                            </Typography>
                            <Typography variant="body1" fontWeight="fontWeightMedium" color="text.secondary">
                                Meet Thunder-Edit: the text editor designed for efficiency. With its intuitive interface and innovative anchor feature, Thunder-Edit streamlines your editing process, keeping you focused and productive.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Tooltip title="check the repository" arrow>
                                <a target="_blank" href="https://github.com/zeuspailoff/Editor-de-texto">
                                    <Button size="small">
                                        <GitHubIcon style={{ color: 'Black' }} />
                                    </Button>
                                </a>
                            </Tooltip>
                            <Link to="/Editor">
                                <Button size="small">Learn More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
                    <Card sx={{ maxWidth: '90%', margin: 'auto' }} align="center">
                        <CardMedia
                            sx={{ height: 340 }}
                            image="/pizzaquiz.gif"
                            title="Image PizzaQuiz"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                PizzaQuiz
                            </Typography>
                            <Typography variant="body1" fontWeight="fontWeightMedium" color="text.secondary">
                                PizzaQuiz: Dive into a world of pizza-themed trivia with PizzaQuiz! Test your knowledge of toppings, dough, and pizza history in this exciting quiz game. Challenge your friends, earn achievements, and become the ultimate pizza expert!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Tooltip title="check the repository" arrow>
                                <a target="_blank" href="https://github.com/zeuspailoff/QuizGame">
                                    <Button size="small">
                                        <GitHubIcon style={{ color: 'Black' }} />
                                    </Button>
                                </a>
                            </Tooltip>
                            <Tooltip title="Try the game" arrow>
                                <a target="_blank" href="https://pizza-quiz.netlify.app/">
                                    <Button size="small">
                                        <VisibilityIcon style={{ color: 'Black' }} />
                                    </Button>
                                </a>
                            </Tooltip>
                            <Link to="/Pizza">
                                <Button size="small">Learn More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
                    <Card sx={{ maxWidth: '90%', margin: 'auto' }} align="center">
                        <CardMedia
                            sx={{ height: 340 }}
                            image="/Home.png"
                            title="IneedUp"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                I Need Up
                            </Typography>
                            <Typography variant="body1" fontWeight="fontWeightMedium" color="text.secondary">
                                Welcome to Ineddup, where you can ask questions, find answers. Much like Stack Overflow, Ineddup provides a collaborative environment for users to seek knowledge, share expertise, and connect with others in their fields of interest
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Tooltip title="check the repository" arrow>
                                <a target="_blank" href="https://github.com/zeuspailoff/Portal-de-necesidades-front">
                                    <Button size="small">
                                        <GitHubIcon style={{ color: 'Black' }} />
                                    </Button>
                                </a>
                            </Tooltip>
                            <Tooltip title="Check IneedUp" arrow>
                                <a target="_blank" href="https://ineedup.com.es/">
                                    <Button size="small">
                                        <VisibilityIcon style={{ color: 'Black' }} />
                                    </Button>
                                </a>
                            </Tooltip>
                            <Link to="/Ineed">
                                <Button size="small">Learn More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
                    <Card sx={{ maxWidth: '90%', margin: 'auto', marginBottom: '30px' }} align="center">
                        <CardMedia
                            sx={{ height: 340 }}
                            image="/cvfoto.png"
                            title="My First CV"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                My First CV
                            </Typography>
                            <Typography variant="body1" fontWeight="fontWeightMedium" color="text.secondary">
                                A comprehensive showcase of my skills, experiences, and achievements. This digital resume provides a glimpse into my professional journey, highlighting my expertise in various fields and demonstrating my commitment to personal and professional development.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Tooltip title="check the repository" arrow>
                                <a target="_blank" href="https://github.com/zeuspailoff">
                                    <Button size="small">
                                        <GitHubIcon style={{ color: 'Black' }} />
                                    </Button>
                                </a>
                            </Tooltip>
                            <Link to="/FirstCv">
                                <Button size="small">Learn More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
            <Grid item xs={12} sx={{ height: "auto", display: "flex", justifyContent: "center", alignItems: "center", background: '#bdbdbd' }}>
                <Card sx={{ maxWidth: '90%', margin: '50px' }} align="center">
                    <CardContent style={{ marginTop: '10px' }}>
                        <Typography gutterBottom variant="h3" fontWeight="fontWeightBold" component="div">
                            Who am I?
                        </Typography>
                        <Typography variant="body1" fontWeight="fontWeightMedium" color="text.secondary" style={{ textAlign: 'start' }}>
                            I am someone who finds their identity in the world of technology and programming. My studies in git, HTML, Java, JavaScript, Python, Node.js, Spring Boot, CSS, and Material UI not only constitute a solid foundation of technical knowledge but also reflect my commitment to continuous learning and personal improvement.
                            <br /><br />
                            I consider honesty to be fundamental in all my interactions, both in my work and personal life. I believe in transparency and integrity as pillars of any relationship or project I engage in.
                            <br /><br />
                            My interest in technology goes beyond mere curiosity; it is a passion that drives my desire to explore new solutions and contribute to the advancement of society through technological innovation. I value personal growth both professionally and personally, and I constantly seek opportunities to expand my skills and knowledge, as well as to grow as an individual.
                            <br /><br />


                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Footer />


        </div>
    );
};

export default Home;
