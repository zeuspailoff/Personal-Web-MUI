import Box from '@mui/material/Box';
import logo from '../../../public/Abraham.png'; // Ajusta la ruta de tu imagen de logo
import Tooltip from '@mui/material/Tooltip';
import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', background: '#37474f', height: 100 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Tooltip title="Check my Github" arrow>
                    <a target="_blank" href="https://github.com/zeuspailoff/">
                        <Button size="large">
                            <GitHubIcon style={{ color: 'white', fontSize: 35 }} />
                        </Button>
                    </a>
                </Tooltip>
                <Tooltip title="Check my Linkedin" arrow>
                    <a target="_blank" href="https://www.linkedin.com/in/abrahamdiazgonzalez/">
                        <Button size="large" >
                            <LinkedInIcon style={{ color: 'white', fontSize: 40 }} />
                        </Button>
                    </a>
                </Tooltip>
            </Box>

            <img src={logo} alt="Logo" style={{ width: 100, marginBottom: 10 }} />
            <p style={{ color: '#fff', fontSize: 20, marginRight: 10 }}>Full Stack Developer</p>
        </Box>
    );
};

export default Footer;
