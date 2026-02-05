import { motion } from 'framer-motion'; 
import { ArrowUpRight, Star, Instagram, MessageCircle, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const cardVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
  hover: { 
    y: -8, 
    transition: { duration: 0.3 } 
  }
};

export function ProductCards() {
  const socialLinks = [
    { id: 'instagram', icon: <Instagram size={24} />, link: 'https://www.instagram.com/in_techstore/', color: 'hover:text-pink-500' },
    { id: 'whatsapp', icon: <MessageCircle size={24} />, link: 'https://wa.me/+5583994189699', color: 'hover:text-green-500' },
    { id: 'email', icon: <Mail size={24} />, link: 'mailto:iran-netonobrega@hotmail.com', color: 'hover:text-blue-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      <motion.div 
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <div className="lg:col-span-2 space-y-6">
          <motion.div 
            variants={cardVariants}
            className="bg-white/40 backdrop-blur-xl rounded-[40px] p-8 lg:p-12 shadow-2xl border border-white/20 overflow-hidden relative"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.2 }} 
                  className="text-sm text-blue-600 mb-4 font-bold tracking-widest uppercase"
                >
                  IN Tech Store
                </motion.p>
                <h1 className="text-4xl lg:text-6xl mb-6 font-black leading-tight text-slate-900">
                  Tecnologia que você procura...
                </h1>
                <p className="text-xl mb-8 text-slate-600 font-medium">Qualidade que você merece!</p>
                <motion.a
                  href="https://vitrine-virtual-psi.vercel.app/produtos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-900 text-white px-8 py-4 rounded-full flex items-center gap-3 font-bold shadow-xl hover:bg-blue-600 transition-colors cursor-pointer inline-flex"
                >
                  Ver Produtos
                  <ArrowUpRight className="w-5 h-5" />
                </motion.a>
              </div>
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
              >
                <ImageWithFallback
                  src="https://res.cloudinary.com/dqkpkmicx/image/upload/v1770125768/logo_in_tech_vietfc.png"
                  alt="Destaque"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={cardVariants} whileHover="hover" className="h-73 bg-blue-600 rounded-[32px] p-6 text-white flex flex-col justify-center items-center text-center shadow-lg">
              <h2 className="text-4xl font-black italic">500+</h2>
              <p className="opacity-80 font-bold uppercase text-[10px] tracking-tighter">Clientes Satisfeitos</p>
              <div className="flex gap-1 mt-2 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor"/>)}
              </div>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="h-73 bg-white/40 backdrop-blur-md rounded-[32px] overflow-hidden border border-white/20 relative group">
                <ImageWithFallback src="https://res.cloudinary.com/dqkpkmicx/image/upload/v1770151200/banner_1_intech_j9s5mv.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="h-73 bg-white/40 backdrop-blur-md rounded-[32px] overflow-hidden border border-white/20 relative group">
                <ImageWithFallback src="https://res.cloudinary.com/dqkpkmicx/image/upload/v1770151211/banner_2_in_tech_aarwbr.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </motion.div>
          </div>
        </div>

        <div className="space-y-6">
          <motion.div variants={cardVariants} className="bg-white/60 backdrop-blur-xl rounded-[32px] p-6 border border-white/30 shadow-lg">
            <h3 className="mb-6 font-black text-slate-800 uppercase text-[10px] tracking-[0.2em] text-center">Contatos e Redes Sociais</h3>
            <div className="flex justify-around items-center">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-white/50 rounded-2xl shadow-sm border border-white/80 transition-colors ${social.color} text-slate-700`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div 
            variants={cardVariants} 
            whileHover="hover"
            className="h-[648px] bg-white/40 backdrop-blur-md rounded-[40px] overflow-hidden border border-white/20 relative group cursor-pointer shadow-xl"
          >
            <ImageWithFallback src="https://res.cloudinary.com/dqkpkmicx/image/upload/v1770151149/Pagamentos_ojoztp.png" alt="Pagamentos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1">Formas de</p>
                <h2 className="text-3xl font-black">Pagamento</h2>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}