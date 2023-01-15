import { Box, Typography, Link, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box sx={{
      padding: "50px 20px 5px",
      borderTop: "solid 2px grey"
    }}>
      <Box>
        <Typography variant="caption" component="span">
          email. gooday6983@gmail.com | tel. 010-2728-6983
        </Typography>
        <Link href="https://github.com/good-jinu" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <GitHubIcon fontSize="small" />
            </IconButton>
        </Link>
      </Box>
      <Box>
        <Typography variant="caption">
          &copy; {new Date().getFullYear()} 이진우
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer;