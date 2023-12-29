import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

function PrivateRouter({ children }) {

  const isAuthenticated = true;

  return (
    <Routes>
      <Route
        path="/*"
        element={isAuthenticated ? children : <Navigate to="/login" replace />}
      />
    </Routes>
  );
}

export default PrivateRouter;