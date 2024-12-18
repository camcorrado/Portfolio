import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons";

const Socials = [
  {
    id: 0,
    name: "Email",
    icon: faEnvelope,
    link: "mailto:camcorrado@gmail.com",
    ariaLabel: "Send email",
  },
  {
    id: 1,
    name: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/camcorrado/",
    ariaLabel: "LinkedIn profile",
  },
  {
    id: 2,
    name: "Vimeo",
    icon: faVimeo,
    link: "https://vimeo.com/camcorrado",
    ariaLabel: "Vimeo profile",
  },
  {
    id: 3,
    name: "GitHub",
    icon: faGithub,
    link: "https://github.com/camcorrado",
    ariaLabel: "GitHub profile",
  },
];

export default Socials;
