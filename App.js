import './App.css';
import { Header } from './Users/jilanhusen/Desktop/Intership project/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './Users/jilanhusen/Desktop/Intership project/homepage';
import ProjectContainer from './Users/jilanhusen/Desktop/Intership project/homepage/project';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project" element={<ProjectContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;