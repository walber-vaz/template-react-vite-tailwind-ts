import { Home } from '@/pages/Home';
import { Route, Routes } from 'react-router-dom';

export const App = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
