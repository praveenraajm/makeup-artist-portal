import { Header } from "components";
import { Outlet } from 'react-router-dom';

const Basic = ({ children }) => {
    return <div>
        <Header />
        <Outlet />
    </div>
}

export default Basic;
