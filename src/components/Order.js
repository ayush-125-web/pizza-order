import React,{useState,useEffect}from 'react';
import { motion,AnimatePresence} from 'framer-motion';

const orderVarient={
  hidden:{
    scale:0
  },
  visible:{
    scale:1.4,
    rotate:360,
    transition:{
      type:'spring',
      damping:50,
      delay:0.5,
      when:'beforeChildren'
    }
  }
}

const childVarient={
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{
      type:'tween',
      duration:0.9
    }
  }
}



const Order = ({ pizza }) => {

  const [notify,setNotify]=useState(false);
  
  useEffect(() => {
    

    const showTimer = setTimeout(() => {
      setNotify(true);
    }, 2000);

    const timer = setTimeout(() => {
      setNotify(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(showTimer);
    }

  }, []);

  return (
    <motion.div className="container order"
    variants={orderVarient}
    initial='hidden'
    animate='visible'
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      <motion.div
       variants={childVarient}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
      <AnimatePresence initial={false}>
        {notify && (
          <motion.div
              initial={{y:250,opacity:0}}
              animate={{y:25,opacity:1}}
              exit={{y:250}}
              inherit={false}
            >Do NOT FORGET TO TAKE YOUR ORDER
          </motion.div> 
        )}
        
      </AnimatePresence>
      
    </motion.div>
  )
}

export default Order;