import { Box } from '@mui/material';
import { status } from './statusStyles';

const Status = ({ title, color }) => {
    return <Box sx={theme => status(theme, { color })}>
        {title}
    </Box>
}

export default Status;
