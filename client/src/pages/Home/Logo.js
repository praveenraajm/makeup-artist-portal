import { Box } from "@mui/material";
import black_logo from "../../assets/Logo_black.png";
import { logoAlignStyle } from "./styles";

const Logo = () => {
  return (
    <div>
      <Box sx={logoAlignStyle}>
        <img src={black_logo} alt="charm_makeover_logo" height="100px"></img>
      </Box>
    </div>
  );
};

export default Logo;
