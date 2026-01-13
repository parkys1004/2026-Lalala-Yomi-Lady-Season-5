import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const CopyableExample = ({ label, text }: { label: string; text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }} 
      className="bg-white/5 p-4 rounded-lg border border-dashed border-white/20 relative group"
    >
        <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-pink-500 font-bold">{label}</p>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className={`text-xs px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                  isCopied 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-white/10 hover:bg-white/20 text-gray-300 border border-white/10'
                }`}
            >
                {isCopied ? (
                    <>
                        <i className="fas fa-check"></i> <span>복사됨</span>
                    </>
                ) : (
                    <>
                        <i className="fas fa-copy"></i> <span>복사</span>
                    </>
                )}
            </motion.button>
        </div>
        <code className="text-sm block bg-black/20 p-3 rounded break-all text-gray-200 font-mono">
          {text}
        </code>
    </motion.div>
  );
};

const Ticket: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
    const account = "100086358351";
    navigator.clipboard.writeText(account).then(() => {
        setCopied(true);
        
        // Confetti effect from button center
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;
        
        confetti({
          origin: { x, y },
          particleCount: 50,
          spread: 60,
          colors: ['#db2777', '#f59e0b', '#ffffff']
        });

        setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="register">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden"
        >
            <div className="bg-gradient-to-r from-pink-600 to-yellow-600 px-8 py-6 relative overflow-hidden">
                <motion.div 
                   className="absolute inset-0 bg-white/20"
                   animate={{ x: ['-100%', '100%'] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <h3 className="text-2xl font-bold relative z-10">TICKET & PAYMENT</h3>
            </div>
            
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h4 className="text-lg font-bold mb-4">비용 및 신청 안내</h4>
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>예매 (1/30 밤 12시까지)</span>
                                <span className="text-pink-400 font-bold text-lg">20,000원</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>현장 판매</span>
                                <span className="text-gray-300">25,000원</span>
                            </div>
                        </div>
                        <div className="bg-black/30 p-4 rounded-xl text-sm leading-relaxed border border-yellow-500/20">
                            <p className="text-yellow-500 font-bold mb-1"><i className="fas fa-info-circle mr-1"></i> 꼭 확인해주세요!</p>
                            <p>- 입금 시 반드시 <span className="text-pink-400 font-bold">닉네임</span>으로 입금 부탁드립니다.</p>
                            <p>- 신청은 <span className="underline cursor-pointer hover:text-white transition-colors">라라라 카페</span> 해당 글에 댓글로 해주세요.</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col justify-center items-center bg-white/5 rounded-2xl p-6 border border-white/10 relative">
                        <p className="text-gray-400 text-sm mb-2">입금 계좌 (토스뱅크)</p>
                        <p className="text-2xl font-bold tracking-wider mb-4 font-mono">1000-8635-8351</p>
                        <p className="text-lg font-medium text-yellow-500 mb-4">예금주: 김반진</p>
                        
                        <motion.button 
                            onClick={copyAccount}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 ${copied ? 'bg-green-500 text-white' : 'bg-white/10 hover:bg-white/20'}`}
                        >
                            {copied ? (
                                <span><i className="fas fa-check mr-2"></i>복사 완료!</span>
                            ) : (
                                <span>계좌번호 복사하기</span>
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>

        <div className="mt-12 text-center mb-8">
            <h3 className="text-2xl font-bold">댓글 신청 양식</h3>
            <p className="text-gray-400 mt-2">아래 예시를 복사해서 카페에 댓글을 남겨주세요!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CopyableExample 
                label="예시 1" 
                text="요미/ 라/ 워크샵1번,2번,3번 + 파티/ 입완" 
            />
            <CopyableExample 
                label="예시 2" 
                text="라울/ 로/ 파티만/ 입완" 
            />
        </div>
    </section>
  );
};

export default Ticket;