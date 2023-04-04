import { Typography } from '@mui/material';
import './feature.scss';

const Section = ({ title, children }) => {
    return <div className='section-container'>
        <Typography variant="h4">{title}</Typography>
        <div className='section-children'>{children}</div>
    </div>
}

export default Section;
