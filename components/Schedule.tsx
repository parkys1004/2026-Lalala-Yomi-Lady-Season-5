import React from 'react';
import { motion } from 'framer-motion';

const Schedule: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
        <div className="inline-block glass-card p-10 w-full hover:shadow-[0_0_30px_rgba(219,39,119,0.3)] transition-shadow duration-500">
            <h3 className="text-3xl font-bold mb-8 gradient-text">PARTY SCHEDULE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left space-y-6">
                    <motion.div 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 bg-white/5 p-4 rounded-xl"
                    >
                        <span className="bg-pink-600 w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold shadow-lg shadow-pink-600/50">P</span>
                        <div>
                            <p className="text-gray-400 text-sm">Party Open</p>
                            <p className="text-xl font-semibold">PM 09:30 - AM 02:00</p>
                        </div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 bg-white/5 p-4 rounded-xl"
                    >
                        <span className="bg-yellow-600 w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold shadow-lg shadow-yellow-600/50">S</span>
                        <div>
                            <p className="text-gray-400 text-sm">Performance Time</p>
                            <p className="text-xl font-semibold text-yellow-400">PM 10:30 START</p>
                        </div>
                    </motion.div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <p className="text-lg italic text-pink-200">"전국 최고의 댄서들이 한자리에 모이는 밤,<br/>함께 춤추며 최고의 에너지를 느껴보세요!"</p>
                    <p className="mt-4 text-sm text-gray-400">- Host 요미 -</p>
                </div>
            </div>
        </div>
    </motion.section>
  );
};

export default Schedule;