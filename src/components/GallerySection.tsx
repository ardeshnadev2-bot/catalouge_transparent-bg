'use client';

import { useState, useMemo, ComponentType } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Expand, Box, Settings, Compass, Ship, ShieldCheck } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'products' | 'machinery' | 'exports' | 'quality' | 'factory';
  categoryLabel: string;
  image: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  aspect: string; // Tailwind aspect classes for masonry variation
}

const galleryData: GalleryItem[] = [
  {
    id: 'gal-sanitizer',
    title: 'Personal Care Dispensing Caps',
    category: 'products',
    categoryLabel: 'Products',
    image: '/images/gallery_sanitizer.jpg',
    description: 'Precision flip-top and screw caps designed for sanitizers and consumer care.',
    icon: Box,
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'gal-packaging-conveyor',
    title: 'Automated Packaging & Filling Line',
    category: 'factory',
    categoryLabel: 'Factory Images',
    image: '/images/gallery_packaging_conveyor.jpg',
    description: 'Conveyor belt system for filling, sealing, and packaging finished products.',
    icon: Compass,
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'gal-fanuc-molding',
    title: 'Fanuc Roboshot Injection Molding Hall',
    category: 'machinery',
    categoryLabel: 'Machinery',
    image: '/images/gallery_fanuc_molding.jpg',
    description: 'State-of-the-art Fanuc Roboshot high-precision electric injection molding machines.',
    icon: Settings,
    aspect: 'aspect-[1.5/1]',
  },
  {
    id: 'gal-packing-operator',
    title: 'Clean-Room Packaging Operations',
    category: 'factory',
    categoryLabel: 'Factory Images',
    image: '/images/gallery_packing_operator.jpg',
    description: 'Strict hygienic quality inspections and dust-free packaging setups for food-grade products.',
    icon: Compass,
    aspect: 'aspect-[1.5/1]',
  },
  {
    id: 'gal-capping-machinery',
    title: 'High-Speed Capping Assembly Line',
    category: 'machinery',
    categoryLabel: 'Machinery',
    image: '/images/gallery_capping_machinery.jpg',
    description: 'Automated assembly systems capping and sorting plastic closures at maximum speed.',
    icon: Settings,
    aspect: 'aspect-[1.5/1]',
  },
  {
    id: 'gal-drum-testing',
    title: 'Container Pressure Leakage Testing',
    category: 'quality',
    categoryLabel: 'Quality Testing',
    image: '/images/gallery_drum_testing.jpg',
    description: 'Real-time pressure boundary testing on industrial containers fitted with SV Closures.',
    icon: ShieldCheck,
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'gal-rig-testing',
    title: 'Automated Pull-Up Force Verification',
    category: 'quality',
    categoryLabel: 'Quality Testing',
    image: '/images/gallery_rig_testing.jpg',
    description: 'Testing rig measuring extraction forces and retractable spout performance under stress.',
    icon: ShieldCheck,
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'gal-chemical-testing',
    title: 'Chemical Compatibility Laboratory',
    category: 'quality',
    categoryLabel: 'Quality Testing',
    image: '/images/gallery_chemical_compatibility.jpg',
    description: 'Submerging closures in active chemicals (MIBK, Toluene, Xylene, MEK) to verify material endurance.',
    icon: ShieldCheck,
    aspect: 'aspect-[16/9]',
  },
  {
    id: 'gal-oil-packaging',
    title: 'Engine Oil Retractable Closures',
    category: 'products',
    categoryLabel: 'Products',
    image: '/images/gallery_engine_oil_spouts.jpg',
    description: 'Retractable spout caps fitted to lubricants and motor oil bottles for anti-counterfeiting.',
    icon: Box,
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'gal-spouts-range',
    title: 'Retractable Spouts & Threaded Caps',
    category: 'products',
    categoryLabel: 'Products',
    image: '/images/gallery_plastic_spouts_range.jpg',
    description: 'Multi-color screw caps and pull-out spout components ready for automated packaging lines.',
    icon: Box,
    aspect: 'aspect-square',
  },
  {
    id: 'gal-exports-forklift',
    title: 'Forklift Cargo Loading Lines',
    category: 'exports',
    categoryLabel: 'Export Shipments',
    image: '/images/gallery_exports_forklift.jpg',
    description: 'Forklift operator stacking containerized cargo boxes ready for export dispatch.',
    icon: Ship,
    aspect: 'aspect-square',
  },
  {
    id: 'gal-exports-pallet',
    title: 'Palletized Container Shipments',
    category: 'exports',
    categoryLabel: 'Export Shipments',
    image: '/images/gallery_exports_pallet.jpg',
    description: 'Pallet shrink wrapping and cargo security checks for international ports.',
    icon: Ship,
    aspect: 'aspect-square',
  },
  {
    id: 'gal-closures-group',
    title: 'B2B Plastic Closures Group',
    category: 'products',
    categoryLabel: 'Products',
    image: '/images/gallery_closures_group.png',
    description: 'Retractable spout caps and screw closures in red, green, black, and transparent configurations.',
    icon: Box,
    aspect: 'aspect-[3/2]',
  },
  {
    id: 'gal-jerrycans-stack',
    title: 'Engine Oil & Jerrycan Packaging',
    category: 'products',
    categoryLabel: 'Products',
    image: '/images/gallery_jerrycans_stack.jpg',
    description: 'Pyramid stack of industrial grey plastic containers fitted with color-coded closures.',
    icon: Box,
    aspect: 'aspect-square',
  },
  {
    id: 'gal-spout-extended',
    title: 'Extended Retractable Pull-Out Spout',
    category: 'products',
    categoryLabel: 'Products',
    image: '/images/gallery_jerrycan_spout_extended.png',
    description: 'Close-up of pull-ring spout closure extended on container neck, showing leak-free sealing components.',
    icon: Box,
    aspect: 'aspect-square',
  },
  {
    id: 'gal-jerrycan-red-cap',
    title: 'Jerrycan Threaded Safety Cap',
    category: 'products',
    categoryLabel: 'Products',
    image: '/images/gallery_jerrycan_red_cap.png',
    description: 'Threaded red plastic closure installed on a container, showing ergonomic ribbing.',
    icon: Box,
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'gal-crimp-on-spouts',
    title: 'Metal-Plastic Hybrid Crimp-On Closures',
    category: 'products',
    categoryLabel: 'Products',
    image: '/images/gallery_crimp_on_spouts.png',
    description: 'Crimp-on spouts with metal rings and plastic inserts for security and anti-counterfeiting.',
    icon: Box,
    aspect: 'aspect-square',
  },
];

const filterCategories = [
  { id: 'all', name: 'All Gallery' },
  { id: 'factory', name: 'Factory' },
  { id: 'products', name: 'Products' },
  { id: 'machinery', name: 'Machinery' },
  { id: 'exports', name: 'Shipments' },
  { id: 'quality', name: 'Quality' },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return galleryData;
    return galleryData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="gallery"
      className="scroll-mt-20 py-10 lg:py-14 relative overflow-hidden bg-gradient-to-b from-blue-50/20 via-transparent to-transparent dark:from-slate-950/40 dark:via-slate-900/20 dark:to-transparent z-10"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#40A4D6]/10 rounded-full blur-[80px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#6EC482]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-dark dark:text-white">
            Manufacturing & Product Gallery
          </h2>
          <p className="text-text-light dark:text-slate-400 font-light max-w-2xl mx-auto">
            A visual overview of our industrial operations, automated molding machinery, strict quality control tests, and international export loading.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {filterCategories.map((filter) => {
            const active = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-300 ${
                  active
                    ? 'bg-gradient-to-r from-primary-blue to-primary-green border-transparent text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-text-light dark:text-slate-400 hover:border-primary-blue dark:hover:border-primary-green hover:text-text-dark dark:hover:text-white'
                }`}
              >
                {filter.name}
              </button>
            );
          })}
        </div>

        {/* Masonry Columns Layout */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`break-inside-avoid group relative glass-card rounded-2xl overflow-hidden cursor-pointer border border-primary-blue/5 hover:border-primary-blue/20 dark:hover:border-primary-green/20 ${item.aspect} w-full flex flex-col`}
              >
                {/* Image panel */}
                <div className="relative w-full h-full min-h-[220px] bg-slate-100 dark:bg-slate-950 flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover expand overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 flex items-center justify-center">
                    <Expand className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Lightbox Popup overlay */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-[300px] sm:h-[450px] md:h-[550px] w-full relative bg-slate-950 flex items-center justify-center">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    priority
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-950/80 border border-slate-800 p-2 rounded-full z-20 cursor-pointer transition-colors duration-200"
                    aria-label="Close image popup"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
