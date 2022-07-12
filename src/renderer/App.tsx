import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'tailwindcss/tailwind.css';

const Hello = () => {
  const [state, setState] = useState('NOTHING');

  const getSystemInfo = async () => {
    window.electron.ipcRenderer.sendMessage('system-info', ['ping']);
    window.electron.ipcRenderer.on('system-info', (arg: any) => {
      setState(arg);
      console.log(arg);
    });

    // const response = await window.electron.ipcRenderer.sendMessage(
    //   'system-info',
    //   ['ping']
    // );

    // console.log('>>>', response);
  };

  return (
    // <h1 className="text-3xl font-bold underline text-orange-700">
    //   Hello world!
    // </h1>
    <div className="absolute inset-0 bg-white text-center h-full flex flex-col justify justify-center">
      ERB + TAILWIND = ❤
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
