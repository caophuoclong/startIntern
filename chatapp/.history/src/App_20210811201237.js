import logo from './logo.svg';
import './App.css';
import * as Db from './createDB';
import React, { useEffect } from 'react';
import '@babel/polyfill';
import { useForm } from "react-hook-form";
import insertMessage from "./insertMessages";
import { ToastContainer } from 'react-toastify';

function App() {
  const { handleSubmit, register } = useForm();
  useEffect(() => {
    Db.get();
    // DB.get();

  }, [])
  const onSubmit = (data, e) => {
    e.preventDefault();
    insertMessage(data.message);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('message')} />
        <input type="submit" />
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;
