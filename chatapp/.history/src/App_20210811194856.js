import logo from './logo.svg';
import './App.css';
import Db from './createDB';
import React, { useEffect } from 'react';
import '@babel/polyfill';
import { useForm } from "react-hook-form";
import insertMessage from "./insertMessages";

function App() {
  const { handleSubmit, register } = useForm();
  useEffect(() => {
    Db();
    // DB.get();

  }, [])
  const onSubmit = (data, e) => {
    e.preventDefault();
    insertMessage(data);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('message')} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
