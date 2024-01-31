import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import BookTicketForm from './components/BookTicketForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path='/show/:showId' element={<ShowDetails />} />
        <Route path='/book-ticket/:showName' element={<BookTicketForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
