import React from 'react';
import AppProvider, { UserContext } from './src/context/app.context';
import Router from './src/routers';

export default function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}
