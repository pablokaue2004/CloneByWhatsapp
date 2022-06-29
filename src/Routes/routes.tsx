import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../components/Main';

function routes() {
  return (
    <Routes>
      <Route path="/" element={Main} />
    </Routes>
  );
}

export default routes;
