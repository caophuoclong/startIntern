import logo from './logo.svg';
import './App.css';
import Db from './createDB';
import React, { useEffect } from 'react';
import '@babel/polyfill';
import { useForm } from "react-hook-form";

function App() {
  const { handleSubmit, register } = useForm();
  useEffect(() => {
    Db();
    // DB.get();

  }, [])
  const onSubmit = (data, e) => {
    e.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('message')} />
      </form>
    </div>
  );
}

export default App;
