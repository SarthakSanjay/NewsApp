import './App.css';
import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {

const App = () => {

  const [progress , setProgress]  = useState(0)
  
  
const pageSize = 10;
const apikey = process.env.REACT_APP_NEWS_API
 
    return (
     <div>
       <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
       
      <Navbar />
      
      <Routes>
        <Route  path="/" element = {<News setProgress={setProgress} apikey={apikey} key='general' pageSize={pageSize} category='general' country="in" />} />
        <Route  path='/business' element = {<News setProgress={setProgress} apikey={apikey} key='business' pageSize={pageSize} category='business' country="in" />}  />
        <Route  path='/entertainment' element = {<News setProgress={setProgress} apikey={apikey} key='entertainment' pageSize={pageSize} category='entertainment' country="in" />}  />
        <Route  path='/general' element = {<News setProgress={setProgress} apikey={apikey} key='general' pageSize={pageSize} category='general' country="in" />}  />
        <Route  path='/health' element = {<News setProgress={setProgress} apikey={apikey} key='health' pageSize={pageSize} category='health' country="in" />}  />
        <Route  path='/science' element = {<News setProgress={setProgress} apikey={apikey} key='science' pageSize={pageSize} category='science' country="in" />}  />
        <Route  path='/sports' element = {<News setProgress={setProgress} apikey={apikey} key='sports' pageSize={pageSize} category='sports' country="in" />}  />
        <Route  path='/technology' element = {<News setProgress={setProgress} apikey={apikey} key='technology' pageSize={pageSize} category='technology' country="in" />} />
      </Routes>  
      
   
     </div>
    )
  }

  export default App

