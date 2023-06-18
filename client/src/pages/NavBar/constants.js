import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const navItems = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Classes",
    to: "/classes",
  },
  {
    label: "Contacts",
    to: "/contacts",
  },
  {
    icon: <FontAwesomeIcon icon={faFacebook} size="lg" />,
    to: "https://www.facebook.com/profile.php?id=100090175178959",
    // target: true,
  },
  {
    icon: <FontAwesomeIcon icon={faInstagram} size="lg" />,
    to: "https://www.instagram.com/charm_makeover/",
    // target: true,
  },
];
