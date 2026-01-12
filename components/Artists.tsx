import React from 'react';
import { motion } from 'framer-motion';

const Artists: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 group hover:border-pink-500/50 transition-colors"
        >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <i className="fas fa-compact-disc mr-3 text-yellow-500 group-hover:rotate-180 transition-transform duration-700"></i>
              CREATIVE TEAM
            </h3>
            <ul className="space-y-4">
                <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">DJ</span>
                    <span className="font-bold">도베르만</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Photograph</span>
                    <span className="font-bold">푸르니, 수지</span>
                </li>
            </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 group hover:border-pink-500/50 transition-colors"
        >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <i className="fas fa-star mr-3 text-pink-500 group-hover:text-yellow-400 transition-colors"></i>
              PERFORMANCE
            </h3>
            <div className="flex flex-wrap gap-2">
                {['에버라틴 \'럭키비키\'', '라스트댄스 \'씨빌간지\'', '보라초스', '요미레이디'].map((team, idx) => (
                   <motion.span 
                      key={idx}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(219, 39, 119, 0.6)' }}
                      className="bg-pink-900/40 px-3 py-1 rounded-full text-sm border border-pink-500/30 cursor-default"
                   >
                     {team}
                   </motion.span>
                ))}
            </div>
        </motion.div>
    </section>
  );
};

export default Artists;