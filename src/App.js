import { Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';


function App() {

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-900 ">
      <Routes>
        <Route path='/*' element={<Page1 />} />
        <Route path='/chatbot' element={<Page2 />} />
        <Route path='/detail' element={<Page3 />} />
      </Routes>
    </div>
  );
}

export default App;
