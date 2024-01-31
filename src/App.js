import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path='/show/:showId' element={<ShowDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
