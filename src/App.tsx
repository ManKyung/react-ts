import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './ContextSample';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(name);
  };
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div className="App">
      <header className="App-header">
        <SampleProvider>
          <ReducerSample />
        </SampleProvider>
        <MyForm onSubmit={onSubmit} />
        <img src={logo} className="App-logo" alt="logo" />
        <Greetings name={'mk.jung'} onClick={onClick} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />
      </header>
    </div>
  );
};

export default App;
