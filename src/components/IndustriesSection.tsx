'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Droplet,
  GlassWater,
  Pill,
  Settings,
  Car,
  Paintbrush,
  FlaskConical,
  Combine,
  Filter,
  Home,
  Sparkles,
  Package,
  Fingerprint,
  CheckCircle2,
  Zap,
  Leaf,
  Globe,
  Users,
  Heart,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const industries = [
  {
    name: 'Edible Oil Industry',
    icon: Droplet,
    color: 'from-amber-500/10 to-yellow-500/10 text-amber-500',
    description: 'Bespoke cap geometries with tear-off pull rings and anti-drip pouring spouts.',
  },
  {
    name: 'Food & Beverage',
    icon: GlassWater,
    color: 'from-emerald-500/10 to-teal-500/10 text-emerald-500',
    description: 'Food-grade certified closures preserving freshness and carbonation limits.',
  },
  {
    name: 'Pharmaceutical',
    icon: Pill,
    color: 'from-blue-500/10 to-indigo-500/10 text-blue-500',
    description: 'Secured child-resistant and tamper-evident caps complying with healthcare standards.',
  },
  {
    name: 'Lubricants',
    icon: Settings,
    color: 'from-red-500/10 to-orange-500/10 text-orange-500',
    description: 'Rigid closures designed to resist petroleum breakdown and guarantee high sealing torques.',
  },
  {
    name: 'Automotive Oil',
    icon: Car,
    color: 'from-slate-500/10 to-zinc-500/10 text-slate-500',
    description: 'Press-fit spouts and crimp-on caps facilitating smooth, direct engine pours.',
  },
  {
    name: 'Paint Industry',
    icon: Paintbrush,
    color: 'from-purple-500/10 to-pink-500/10 text-purple-500',
    description: 'Robust airtight locks avoiding skinning and evaporation of chemical paints.',
  },
  {
    name: 'Chemical Industry',
    icon: FlaskConical,
    color: 'from-cyan-500/10 to-blue-500/10 text-cyan-500',
    description: 'Vented caps managing pressure changes when storing volatile solvents and corrosives.',
  },
  {
    name: 'Adhesives',
    icon: Combine,
    color: 'from-violet-500/10 to-purple-500/10 text-violet-500',
    description: 'Airtight caps with precision nozzles for controlled, drop-by-drop fluid dispensing.',
  },
  {
    name: 'Solvent Industry',
    icon: Filter,
    color: 'from-sky-500/10 to-cyan-500/10 text-sky-500',
    description: 'Heavy-duty closure systems preventing gas escape and external degradation.',
  },
  {
    name: 'Home Care Products',
    icon: Home,
    color: 'from-teal-500/10 to-green-500/10 text-teal-500',
    description: 'Dispensing flip-tops and screw caps optimized for domestic chemical bottles.',
  },
  {
    name: 'Personal Care Products',
    icon: Sparkles,
    color: 'from-rose-500/10 to-pink-500/10 text-rose-500',
    description: 'High-aesthetic flip-top caps and pumps offering smooth cream and gel dispensing.',
  },
  {
    name: 'Industrial Packaging',
    icon: Package,
    color: 'from-indigo-500/10 to-violet-500/10 text-indigo-500',
    description: 'Threaded Jerry can plugs and heavy-drum adapters with tamper-evident seals.',
  },
];

export default function IndustriesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="industries"
      className="pt-8 pb-20 lg:pt-12 lg:pb-28 bg-gradient-to-b from-blue-50/20 via-transparent to-transparent dark:from-slate-950/40 dark:via-slate-900/20 dark:to-transparent relative overflow-hidden z-10"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#40A4D6]/10 rounded-full blur-[80px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#6EC482]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Block */}
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl mb-20 w-full grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-slate-900 border border-slate-200/65 dark:border-slate-800/85">
          {/* Left Side: HTML content overlay */}
          <div className="lg:col-span-6 p-6 sm:p-10 md:p-12 xl:p-16 flex flex-col justify-between space-y-8 relative bg-white dark:bg-slate-900">
            <div className="absolute inset-0 cap-pattern-overlay opacity-[0.04] pointer-events-none" />
            
            <div className="relative space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Closures That <span className="block text-[#E54B00] dark:text-orange-500">Complete</span> the Package
              </h2>
              
              <div className="w-16 h-1 bg-[#E54B00] dark:bg-orange-500 rounded-full" />
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                Engineered for performance. Designed for perfection. Our closures ensure safety, freshness, and reliability across every industry.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-4">
                {/* Point 1 */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-[#E54B00] dark:text-orange-500 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Secure & Leak-Proof</h4>
                    <p className="text-xs text-slate-550 dark:text-slate-400 font-light leading-relaxed">
                      Advanced sealing technology to protect your product integrity.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-[#E54B00] dark:text-orange-500 shrink-0">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Precision Engineered</h4>
                    <p className="text-xs text-slate-550 dark:text-slate-400 font-light leading-relaxed">
                      Built with high-quality materials for consistent performance.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-[#E54B00] dark:text-orange-500 shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Sustainable Choice</h4>
                    <p className="text-xs text-slate-550 dark:text-slate-400 font-light leading-relaxed">
                      Recyclable and eco-friendly solutions for a better tomorrow.
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-[#E54B00] dark:text-orange-500 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Versatile Applications</h4>
                    <p className="text-xs text-slate-550 dark:text-slate-400 font-light leading-relaxed">
                      Ideal for food, beverage, pharma, cosmetics, and industrial packaging.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 relative">
              <button
                onClick={() => {
                  const el = document.getElementById('versatility-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#E54B00] hover:bg-[#C84200] text-white font-extrabold text-xs sm:text-sm tracking-wider rounded-xl uppercase transition-all duration-350 transform hover:scale-[1.03] shadow-md shadow-orange-600/15 active:scale-95 cursor-pointer group"
              >
                Know More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Side: Closures Photo */}
          <div className="lg:col-span-6 min-h-[300px] sm:min-h-[400px] lg:min-h-full relative overflow-hidden bg-white dark:bg-slate-950/40 flex items-center justify-center">
            <Image
              src="/images/industries_banner_right_v3.png"
              alt="Tailored Closures Presentation"
              fill
              className="object-contain p-2 sm:p-4 lg:p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Section: Versatility Across Industries (12 cards) */}
        <div id="versatility-grid" className="scroll-mt-24 text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-dark dark:text-white">
            Versatility Across Industries
          </h2>
          <p className="text-text-light dark:text-slate-400 font-light max-w-2xl mx-auto">
            Our closures are built for a wide range of products, making them perfect for various sectors, including food, beverages, cosmetics, and healthcare.
          </p>
        </div>

        {/* 12 Industry Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.name}
              variants={itemVariants}
              className="group glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-4 hover:shadow-xl hover:shadow-primary-blue/5 dark:hover:shadow-primary-green/5 dark:hover:border-primary-green/20 hover:border-primary-blue/20"
            >
              {/* Icon wrap */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ind.color} flex items-center justify-center transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 shadow-inner`}>
                <ind.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-text-dark dark:text-white group-hover:text-primary-blue dark:group-hover:text-primary-green transition-colors duration-200">
                {ind.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-text-light dark:text-slate-400 font-light leading-relaxed">
                {ind.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Separator */}
        <div className="border-t border-slate-200/10 dark:border-slate-800/30 my-20" />

        {/* Designed for Ease Section with Photos */}
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-blue/10 dark:bg-primary-green/10 border border-primary-blue/20 dark:border-primary-green/20 text-xs font-semibold tracking-wider uppercase text-primary-blue dark:text-primary-green">
              <Sparkles className="w-3.5 h-3.5" />
              <span>User-Centric Innovation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-dark dark:text-white">
              Designed for Ease, Built for Convenience
            </h2>
            <p className="text-text-light dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              We engineer our closure systems with the end-user in mind. From effortless flip-top opening to precision pouring, our designs ensure a premium experience while maintaining absolute container integrity.
            </p>
          </div>

          {/* Two-Column Showcase with Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Card 1: Effortless Use */}
            <div className="group glass-card rounded-3xl overflow-hidden flex flex-col hover:border-primary-blue/25 dark:hover:border-primary-green/25 hover:shadow-2xl hover:shadow-primary-blue/5 transition-all duration-500">
              <div className="relative aspect-[16/10] w-full overflow-hidden flex flex-col items-center justify-center p-6 border-b border-slate-200/60 dark:border-slate-800/80">
                <Image
                  src="/images/range_lotion_v2.jpg"
                  alt="Precision Caps & Closures in use (Ergonomic Flow)"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <span className="px-2.5 py-1 rounded-md bg-primary-blue/90 text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm">
                    Ergonomic Flow
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4 bg-white/50 dark:bg-slate-900/40">
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-text-dark dark:text-white group-hover:text-primary-blue transition-colors">
                    Effortless Flipping
                  </h3>
                  <p className="text-sm text-text-light dark:text-slate-400 font-light leading-relaxed">
                    Designed with ergonomic hinge mechanics and finger-slots that allow consumers to open and close packaging with single-handed ease, creating a satisfying and zero-friction experience.
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-2 text-xs font-semibold text-primary-blue dark:text-primary-green">
                  <span>Smooth Hinge System</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <span>Single Hand Open</span>
                </div>
              </div>
            </div>

            {/* Card 2: Perfect Pouring */}
            <div className="group glass-card rounded-3xl overflow-hidden flex flex-col hover:border-primary-blue/25 dark:hover:border-primary-green/25 hover:shadow-2xl hover:shadow-primary-blue/5 transition-all duration-500">
              <div className="relative aspect-[16/10] w-full overflow-hidden flex flex-col items-center justify-center p-6 border-b border-slate-200/60 dark:border-slate-800/80">
                <Image
                  src="/images/range_oil_v2.jpg"
                  alt="Anti-Spill Technology in use"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <span className="px-2.5 py-1 rounded-md bg-primary-green/90 text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm">
                    Anti-Spill Tech
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4 bg-white/50 dark:bg-slate-900/40">
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-text-dark dark:text-white group-hover:text-primary-green transition-colors">
                    Perfect Pouring
                  </h3>
                  <p className="text-sm text-text-light dark:text-slate-400 font-light leading-relaxed">
                    Engineered pouring spouts featuring precise cut-offs and anti-drip rims. Prevents messy spills, controls fluid discharge, and keeps container necks clean for food products, cosmetics, and oils.
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-2 text-xs font-semibold text-primary-blue dark:text-primary-green">
                  <span>Anti-Drip Lip</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <span>Controlled Flow Rate</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-slate-200/10 dark:border-slate-800/30 my-20" />

        {/* Machinery Factory Video Section */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-dark dark:text-white">
              Precision Machinery in Action
            </h2>
            <p className="text-text-light dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              Explore our automated manufacturing floor, equipped with high-speed injection molding machines and assembly lines operating at micrometer precision to deliver consistent quality at scale.
            </p>
          </div>

          <div className="relative group max-w-5xl mx-auto w-full">
            {/* Decorative background glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary-blue to-primary-green rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            {/* Framed video wrapper */}
            <div className="relative glass-card rounded-2xl overflow-hidden p-2 bg-slate-100/50 dark:bg-slate-900/50">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 shadow-inner">
                <Image
                  src="/images/gallery_fanuc_molding.jpg"
                  alt="Virtual Factory Tour Preview"
                  fill
                  className="absolute inset-0 w-full h-full object-cover filter blur-[1px] brightness-40 group-hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
                {/* Coming Soon Glassmorphic Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-[4px] z-10 p-4 text-center">
                  <div className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-xs sm:text-sm font-bold tracking-widest text-orange-400 uppercase shadow-lg shadow-orange-500/10 animate-pulse">
                    Coming Soon
                  </div>
                  <h3 className="mt-4 text-xl sm:text-2xl font-extrabold text-white tracking-wide drop-shadow-md">
                    Virtual Factory Tour
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-md font-light leading-relaxed">
                    Interactive micrometer precision machinery and automated molding operations catalog.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Machinery Info Section */}
          <div className="space-y-16 pt-12 border-t border-slate-200/10 dark:border-slate-800/30">
            {/* Styled Heading Section */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue dark:text-accent-blue text-xs font-semibold uppercase tracking-wider">
                <Settings className="w-3.5 h-3.5" />
                Production Excellence
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-dark dark:text-white">
                Machinery
              </h2>
              <p className="text-sm text-text-light dark:text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
                We equip our facility with top-tier molding, material handling, and automated assembly systems. Our machinery is optimized for continuous high-volume production with micrometer-level precision.
              </p>
            </div>

            {/* 4-Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Photo 1: Crane Molding */}
              <div className="glass-card rounded-2xl overflow-hidden border border-slate-200/40 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/gallery_crane_molding_v3.jpg"
                    alt="Overhead Crane & Injection Press"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5 flex-grow space-y-2">
                  <h4 className="text-base font-bold text-text-dark dark:text-white group-hover:text-primary-green transition-colors">
                    Overhead Crane & Injection Press
                  </h4>
                  <p className="text-xs text-text-light dark:text-slate-400 font-light leading-relaxed">
                    Heavy injection press machinery integrated with overhead gantry cranes for seamless mold changes and material feed.
                  </p>
                </div>
              </div>

              {/* Photo 2: Factory Assembly */}
              <div className="glass-card rounded-2xl overflow-hidden border border-slate-200/40 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/gallery_factory_assembly_v3.jpg"
                    alt="High-Speed Assembly Conveyors"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5 flex-grow space-y-2">
                  <h4 className="text-base font-bold text-text-dark dark:text-white group-hover:text-primary-green transition-colors">
                    High-Speed Assembly Conveyors
                  </h4>
                  <p className="text-xs text-text-light dark:text-slate-400 font-light leading-relaxed">
                    Continuous-flow conveyor belts transporting molded parts through automated wadding and assembly stages.
                  </p>
                </div>
              </div>

              {/* Photo 3: Factory Overhead */}
              <div className="glass-card rounded-2xl overflow-hidden border border-slate-200/40 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/gallery_factory_overhead_v3.jpg"
                    alt="Optimized Injection Press Layout"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5 flex-grow space-y-2">
                  <h4 className="text-base font-bold text-text-dark dark:text-white group-hover:text-primary-green transition-colors">
                    Optimized Injection Press Layout
                  </h4>
                  <p className="text-xs text-text-light dark:text-slate-400 font-light leading-relaxed">
                    Strategic overhead positioning of injection molding machinery maximizes throughput and material logistics flow.
                  </p>
                </div>
              </div>

              {/* Photo 4: Injection Molding */}
              <div className="glass-card rounded-2xl overflow-hidden border border-slate-200/40 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/gallery_injection_molding_v2.jpg"
                    alt="High-Performance Injection Presses"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5 flex-grow space-y-2">
                  <h4 className="text-base font-bold text-text-dark dark:text-white group-hover:text-primary-green transition-colors">
                    High-Performance Injection Presses
                  </h4>
                  <p className="text-xs text-text-light dark:text-slate-400 font-light leading-relaxed">
                    State-of-the-art injection press systems ensuring precise control over clamping force, temperature, and cycle times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-slate-200/10 dark:border-slate-800/30 my-20" />

        {/* Corporate Social Responsibility Section */}
        <div className="space-y-12">
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-primary-green/20">
            {/* Ambient green light glow */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-green/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
              
              {/* CSR Info Left */}
              <div className="lg:col-span-1 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
                  <span>Our CSR Pledge</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-dark dark:text-white">
                  Corporate Social Responsibility
                </h3>
                <p className="text-sm text-text-light dark:text-slate-400 font-light leading-relaxed">
                  We believe in growing sustainably. Our corporate policies are aligned with environmental safety, human well-being, and resource conservation.
                </p>
              </div>

              {/* CSR Items Right */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* CSR Point 1 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 dark:bg-slate-900/30 border border-slate-200/20">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-text-dark dark:text-white">Eco-Conscious Materials</h4>
                    <p className="text-xs text-text-light dark:text-slate-400 font-light leading-relaxed">
                      Utilizing high-purity, food-grade materials that are 100% recyclable. We actively work to reduce material weight while retaining mechanical performance.
                    </p>
                  </div>
                </div>

                {/* CSR Point 2 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 dark:bg-slate-900/30 border border-slate-200/20">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-text-dark dark:text-white">Carbon Footprint Reduction</h4>
                    <p className="text-xs text-text-light dark:text-slate-400 font-light leading-relaxed">
                      Optimized operations via energy-efficient injection molding and heat-recovery systems, cutting down electrical consumption per ton of polymer processed.
                    </p>
                  </div>
                </div>

                {/* CSR Point 3 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 dark:bg-slate-900/30 border border-slate-200/20">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-text-dark dark:text-white">Workplace Safety & Care</h4>
                    <p className="text-xs text-text-light dark:text-slate-400 font-light leading-relaxed">
                      Ensuring safe industrial operations, ongoing safety training, and welfare programs for our workforce, maintaining a zero-accident factory standard.
                    </p>
                  </div>
                </div>

                {/* CSR Point 4 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 dark:bg-slate-900/30 border border-slate-200/20">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-text-dark dark:text-white">Ethical Supply Chain</h4>
                    <p className="text-xs text-text-light dark:text-slate-400 font-light leading-relaxed">
                      Strict raw material sourcing from suppliers adhering to global anti-pollution acts, child labor prohibition, and fair compensation policies.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
