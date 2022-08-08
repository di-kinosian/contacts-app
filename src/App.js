import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './config/store';
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Contacts from './routes/Contacts';
import ContactsDetails from './routes/ContactsDetails';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Contacts />} />
					<Route path="/:id" element={<ContactsDetails />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
