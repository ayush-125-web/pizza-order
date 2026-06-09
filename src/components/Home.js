import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVarient={
  init:{
    y:'250vw'
  },
  hover:{
    scale:1.3,
    boxShadow:'0px 0px 15px rgb(250, 50, 50)',
    textShadow:'0px,0px,18px, rgb(255,255,0)',
    transition:{
      duration:0.5,
      yoyo:Infinity,
    }
  },
  tap:{
    scale:0.8,
    boxShadow:'0px 0px 15px rgb(250, 50, 50)',
    textShadow:'0px,0px,18px, rgb(255,255,0)'
  },
  final:{
    fontSize:40,
    color:'red',
    y:20,
    transition:{
      type:'spring',
      delay:0.5,
      stiffness:120,
      damping:50
    }
  },
  exit:{
    scale:0,
  }
}

const containerVarient={
  hidden:{
    opacity:0,
    y:'-250vw'
  },
  visible:{
    fontSize:50,
    color:'yellow',
    y:-20,
    opacity:1,
    transition:{
      type:'spring',
      delay:0.5,
      stiffness:120,
      damping:50
    }
  },
  exit:{
    fontSize:0,
   
  }
}

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        variants={containerVarient}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
        variants={buttonVarient}
        initial='init'
        whileTap='tap'
        whileHover='hover'
        animate='final'
        exit='exit'
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;