import React from 'react';
import { HashRouter, Routes, Route} from "react-router-dom";
import Table from './pages/Table';
import Form from './pages/Form';

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<Table></Table>}></Route>
        <Route path='/form' element={<Form></Form>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
