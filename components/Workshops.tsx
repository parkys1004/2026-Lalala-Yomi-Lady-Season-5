import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const Workshops: React.FC = () => {
  return (
    <section>
        <motion.h3 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center"
        >
          <i className="fas fa-graduation-cap mr-3 text-pink-500"></i>
          SPECIAL WORKSHOPS
        </motion.h3>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
            <motion.div variants={item} className="glass-card p-6 workshop-item hover:bg-pink-900/20 transition-colors">
                <span className="text-pink-500 font-bold">Session 01 | 18:00</span>
                <h4 className="text-xl font-bold mt-2">시니 & 세라</h4>
                <p className="text-gray-400 mt-1">살사 샤인</p>
            </motion.div>
            
            <motion.div variants={item} className="glass-card p-6 workshop-item hover:bg-pink-900/20 transition-colors">
                <span className="text-pink-500 font-bold">Session 02 | 19:00</span>
                <h4 className="text-xl font-bold mt-2">가츠 & 허니</h4>
                <p className="text-gray-400 mt-1">바차타</p>
            </motion.div>
            
            <motion.div variants={item} className="glass-card p-6 workshop-item hover:bg-pink-900/20 transition-colors">
                <span className="text-pink-500 font-bold">Session 03 | 20:00</span>
                <h4 className="text-xl font-bold mt-2">마몽 & 요미</h4>
                <p className="text-gray-400 mt-1">살사 패턴</p>
            </motion.div>
        </motion.div>
    </section>
  );
};

export default Workshops;