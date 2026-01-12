import React from 'react';
import { motion } from 'framer-motion';

const Invitation: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center bg-gradient-to-b from-transparent to-pink-900/20 py-16 rounded-3xl relative overflow-hidden"
    >
        <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        
        <h3 className="text-3xl font-bold mb-6 italic relative z-10">"협찬은 사랑입니다 ♥"</h3>
        <p className="text-lg mb-10 text-gray-300 relative z-10">
            무엇이든 감사히 받겠습니다🙏<br/>
            전국의 댄서분들, 시샵님들 모두 초대합니다!
        </p>
        
        <div className="flex justify-center gap-6 relative z-10">
            <motion.a 
                href="tel:010-0000-0000" 
                whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(219, 39, 119, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-10 py-4 rounded-full font-bold text-lg shadow-lg flex items-center gap-2"
            >
                <i className="fas fa-phone-alt"></i> 연락주세요 🙏
            </motion.a>
        </div>
    </motion.section>
  );
};

export default Invitation;