import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Contacts from './routes/Contacts';
import ContactsDetails from './routes/ContactsDetails';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Contacts />} />
					<Route path="/:id" element={<ContactsDetails />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
