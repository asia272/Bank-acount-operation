import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div className='home'
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >


      <h1>The React-Redux Bank</h1>

      <p>The React-Redux Bank allows users to create new customers by entering basic info. It uses Redux to manage state and React for building a simple and interactive UI.</p>
      <h3>
        <Link to={"/signup"}> Create New Customer</Link>
      </h3>

    </motion.div>
  )
}

export default Home
