import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
// import Portfolio from './pages/portfolio/Portfolio';
import MyPortfolio from './pages/portfolio/MyPortfolio';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import TodoMain
 from "../src/projects/ToDoApp/TodoMain";
 import { Provider } from "react-redux";
 import store from "../src/assets/store";
import WeatherMain from "../src/projects/WeatherApp/WeatherMain";
import QuizMain from "../src/projects/QuizApp/QuizMain";
import CryptocurrencyMain from "../src/projects/CryptocurrencyApp/CryptocurrencyMain";
import NotesMain from "../src/projects/NotesApp/NotesComponents/NotesMain";
import PwdGenerator from "../src/projects/PasswordGenratorApp/PwdGenerator";
import Main from "../src/projects/PokemonApp/Main";
import RandomQuoteMain from "../src/projects/RandomQuote/RandomQuoteMain";
import ScreenShotMain from '../src/projects/ScreenshotApp/ScreenShotMain';
import Themes from "./components/Themes";

function App() {
  return (
    <>
    <Provider store={store}>
<BrowserRouter>
<Navbar/>
<Themes/>
<Routes>
  <Route index element={<Home/>}/>
  <Route path="about" element={<About/>}/>
  <Route path="contact" element={<Contact/>}/>
  <Route path="portfolio" element={<MyPortfolio/>}/>
    
  <Route path="notes" element={<NotesMain/>}/>
  <Route path="weather" element={<WeatherMain/>}/>
  <Route path="pwdgen" element={<PwdGenerator/>}/>
  <Route path="pokemon" element={<Main/>}/>
  <Route path="quotes" element={<RandomQuoteMain/>}/>
  <Route path="screenshot" element={<ScreenShotMain/>}/>
  <Route path="quiz" element={<QuizMain/>}/>
  <Route path="crypto" element={<CryptocurrencyMain/>}/>
  
    <Route path="todo" element={<TodoMain/>}/>
  
  
</Routes>
</BrowserRouter>
</Provider>
    </>
  );
}

export default App;
