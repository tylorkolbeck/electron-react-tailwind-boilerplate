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

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
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
