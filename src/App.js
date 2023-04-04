import { Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';

import { getAccessToken, getSessionDetails } from 'utils/localStorage';
import { setSessionDetails } from './actions/session';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ----------------------------------------------------------------------

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const session = useSelector((state) => state.session);

  useEffect(() => {
    if (session.isAuthenticated) {
      navigate('/home');
    }
  }, [session]);

  return (
    <ThemeConfig>
      <Suspense fallback={<div>Loading...</div>}>
        <Router />
      </Suspense>
      <ToastContainer />
    </ThemeConfig>
  );
}
