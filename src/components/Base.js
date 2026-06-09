import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const nextButtonVarient={
  hidden:{
    x:'-125vw'
  },
  visible:{
    x:0,
    transition:{
      type:'spring',
      delay:0.5,
      stiffness:130,
      damping:50
    }
  },
  hover:{
    scale:1.2,
    boxShadow:'0px 0px 15px rgb(250, 50, 50)',
    transition:{
      yoyo:Infinity,
      duration:0.5
    }
  },
  tap:{
    scale:0.8,
    boxShadow:'0px 0px 15px rgb(250, 50, 50)'
  },
  exit:{
    fontSize:0,
  }
}

const baseContainerVarient={
  hidden:{
    scale:0
  },
  visible:{
    scale:1.5,
    transition:{
      type:'spring',delay:0.5,damping:50,stiffness:120
    }
  },
  exit:{
    fontSize:0,
  }
  
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
    variants={baseContainerVarient}
    initial='hidden'
    animate='visible'
    exit='exit'
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <motion.span className={spanClass}
              whileHover={{fontSize:18,color:'yellow'}}
              >{ base }
              </motion.span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button
            variants={nextButtonVarient}
            initial='hidden'
            animate='visible'
            whileHover='hover'
            whileTap='tap'
            exit='exit'
            >Next</motion.button>
          </Link>
        </div>
      )}

    </motion.div>
  )
}

export default Base;