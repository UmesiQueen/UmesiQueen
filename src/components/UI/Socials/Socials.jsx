import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Socials.css";

const Socials = () => {
  return (
    <div className="icons">
      <a
        href="https://github.com/UmesiQueen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://twitter.com/UmesiQueen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://www.instagram.com/qu_een_cee/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/queen-umesi-ba4b34243/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default Socials;
