import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { nextButtonVarient as orderButtonVarient } from './Base';


const toppingContainer={
  hidden:{
    scale:0,
  },
  visible:{
    scale:1,
    transition:{
      type:'spring',
      stiffness:120,
      damping:50,
      delay:1
    }
  },
  exit:{
    scale:0
  }
}
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <div className="toppings container">
      
      <motion.h3
      variants={toppingContainer}
      initial='initial'
      animate='visible'
      >Step 2: Choose Toppings
      </motion.h3>

      <motion.ul
      variants={toppingContainer}
      initial='initial'
      animate='visible'
      >
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <motion.span className={spanClass}
              whileHover={{
                fontSize:20,
                color:'red'
              }}
              >{ topping }</motion.span>
            </li>
          )
        })}
      </motion.ul>

      <Link to="/order">
        <motion.button
        variants={orderButtonVarient}
        initial='hidden'
        animate='visible'
        whileHover='hover'
        whileTap='tap'
        exit='exit'
        >
          Order
        </motion.button>
      </Link>

    </div>
  )
}

export default Toppings;