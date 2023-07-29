import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import DisplayContainer from './components/displayContainer';
import Welcome from './scenes/welcome';
import Settings from './scenes/settings';
import Streamers from './scenes/streamers';

export function App() {
  return (
    <Routes>
      <Route element={<DisplayContainer />}>
        <Route path="/" element={<Navigate to="/welcome" replace />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/streamers" element={<Streamers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  );
}
