import { motion } from 'framer-motion';

const hackathons = ['Lakshay CTF', 'Google CTF', 'Dragon CTF'];
const ctf = ['PlaidCTF', 'RuCTF', 'picoCTF', 'DEFCON CTF'];

const ThreatAlertEffect = () => {
  return (
    <div className="h-[300px] bg-black/40 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6 relative overflow-hidden">
      <h3 className="text-xl font-semibold text-blue-400 mb-6">
        Participate in CTF
      </h3>

      <div className="space-y-10">
        {/* First flow: Right to Left (with seamless loop) */}
        <motion.div
          className="flex"
          animate={{ x: ['100%', '-100%'] }} // Scroll effect from right to left
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Duplicate the items to ensure continuous scrolling */}
          {[...ctf, ...ctf].map((ctfItem, index) => (
            <div
              key={index}
              className="ml-3 bg-blue-500/5 border border-blue-500/10 p-1 rounded-sm text-sm sm:text-base w-[120px] h-[50px] flex justify-center items-center flex-shrink-0"
            >
              {ctfItem}
            </div>
          ))}
        </motion.div>

        {/* Second flow: Left to Right (with seamless loop) */}
        <motion.div
          className="flex"
          animate={{ x: ['-100%', '100%'] }} // Scroll effect from left to right
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Duplicate the items to ensure continuous scrolling */}
          {[...hackathons, ...hackathons].map((ctfItem, index) => (
            <div
              key={index}
              className="ml-3 bg-blue-500/5 border border-blue-500/10 p-1 rounded-sm text-sm sm:text-base w-[120px] h-[50px] flex justify-center items-center flex-shrink-0"
            >
              {ctfItem}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ThreatAlertEffect;
