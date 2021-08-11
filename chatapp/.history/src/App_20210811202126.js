import logo from './logo.svg';
import './App.css';
import * as Db from './createDB';
import React, { useEffect } from 'react';
import '@babel/polyfill';
import { useForm } from "react-hook-form";
import insertMessage from "./insertMessages";
import { ToastContainer } from 'react-toastify';
import Message from './showMessage';

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
      <Message />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('message')} />
        <input type="submit" />
      </form>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
