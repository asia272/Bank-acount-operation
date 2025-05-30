import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>

        <h1>The React-Redux Bank</h1>

      <p>The React-Redux Bank allows users to create new customers by entering basic info. It uses Redux to manage state and React for building a simple and interactive UI.</p>
      <h3>
        <Link to={"/signup"}> Create New Customer</Link>
      </h3>

    </div>
  )
}

export default Home
