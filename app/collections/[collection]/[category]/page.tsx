'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Package, Palette, Ruler, MessageCircle, X, Sparkles, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';

// Product interface
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  fabric: string;
  work: string;
  color: string;
  description: string;
}

// Category data structure with products
const categoryData: Record<string, Record<string, any>> = {
  womens: {
    'bridal-lehengas': {
      name: 'Bridal Lehengas',
      description: 'Exquisite bridal lehengas crafted with premium fabrics and intricate embellishments. Each piece is a masterpiece designed to make your wedding day unforgettable.',
      image: '/Designer Lehengas.png',
      fabrics: ['Pure Silk', 'Velvet', 'Georgette', 'Net', 'Brocade', 'Satin'],
      designs: ['Heavy Zardozi', 'Sequin Work', 'Thread Embroidery', 'Mirror Work', 'Stone Setting', 'Pearl Work'],
      colors: ['Classic Red', 'Maroon', 'Pink', 'Peach', 'Gold', 'Ivory', 'Pastel Blue', 'Mint Green'],
      priceRange: '₹50,000 - ₹2,50,000',
      timeRequired: '45-60 days',
      products: [
        {
          id: 'bl-001',
          name: 'Royal Red Bridal Lehenga',
          price: '₹1,85,000',
          image: '/Designer Lehengas.png',
          fabric: 'Pure Silk',
          work: 'Heavy Zardozi & Stone Setting',
          color: 'Classic Red',
          description: 'Magnificent red bridal lehenga with intricate zardozi work and stone embellishments. Features a heavily embroidered dupatta and designer blouse.'
        },
        {
          id: 'bl-002',
          name: 'Maroon Velvet Bridal Set',
          price: '₹2,10,000',
          image: '/Designer Lehengas.png',
          fabric: 'Velvet',
          work: 'Kundan & Pearl Work',
          color: 'Maroon',
          description: 'Luxurious velvet lehenga with traditional kundan and pearl embellishments. Perfect for a winter wedding.'
        },
        {
          id: 'bl-003',
          name: 'Pink & Gold Bridal Lehenga',
          price: '₹1,65,000',
          image: '/Designer Lehengas.png',
          fabric: 'Net & Silk',
          work: 'Sequin & Thread Embroidery',
          color: 'Pink',
          description: 'Beautiful pink lehenga with gold sequin work and delicate thread embroidery. Modern yet traditional design.'
        },
        {
          id: 'bl-004',
          name: 'Ivory Elegance Lehenga',
          price: '₹1,95,000',
          image: '/Designer Lehengas.png',
          fabric: 'Georgette',
          work: 'Pearl & Mirror Work',
          color: 'Ivory',
          description: 'Contemporary ivory lehenga with pearl embellishments and mirror work. Perfect for the modern bride.'
        },
        {
          id: 'bl-005',
          name: 'Peach Blossom Bridal Set',
          price: '₹1,75,000',
          image: '/Designer Lehengas.png',
          fabric: 'Silk & Brocade',
          work: 'Heavy Embroidery',
          color: 'Peach',
          description: 'Elegant peach lehenga with brocade work and heavy embroidery. Comes with matching dupatta and blouse.'
        },
        {
          id: 'bl-006',
          name: 'Gold Splendor Lehenga',
          price: '₹2,25,000',
          image: '/Designer Lehengas.png',
          fabric: 'Pure Silk',
          work: 'Zardozi & Stone Setting',
          color: 'Gold',
          description: 'Regal gold bridal lehenga with extensive zardozi work and precious stone setting. A true showstopper.'
        },
      ]
    },
    'designer-sarees': {
      name: 'Designer Sarees',
      description: 'Contemporary and traditional sarees with designer blouses. Perfect blend of elegance and modern aesthetics.',
      image: '/Designer Sarees.png',
      fabrics: ['Banarasi Silk', 'Kanjivaram', 'Georgette', 'Chiffon', 'Crepe', 'Net'],
      designs: ['Embroidered Border', 'Sequin Pallu', 'Designer Blouse', 'Heavy Blouse Work', 'Minimal Elegant', 'Fusion Style'],
      colors: ['Royal Blue', 'Emerald Green', 'Wine Red', 'Black', 'White', 'Pastels', 'Metallic Shades'],
      priceRange: '₹15,000 - ₹80,000',
      timeRequired: '20-30 days',
      products: [
        {
          id: 'ds-001',
          name: 'Royal Blue Banarasi',
          price: '₹45,000',
          image: '/Designer Sarees.png',
          fabric: 'Banarasi Silk',
          work: 'Embroidered Border & Designer Blouse',
          color: 'Royal Blue',
          description: 'Stunning royal blue Banarasi saree with golden embroidered border and heavily embroidered designer blouse.'
        },
        {
          id: 'ds-002',
          name: 'Emerald Kanjivaram',
          price: '₹52,000',
          image: '/Designer Sarees.png',
          fabric: 'Kanjivaram Silk',
          work: 'Traditional Zari & Stone Work Blouse',
          color: 'Emerald Green',
          description: 'Traditional emerald green Kanjivaram with pure zari work and stone-studded designer blouse.'
        },
        {
          id: 'ds-003',
          name: 'Wine Sequin Elegance',
          price: '₹38,000',
          image: '/Designer Sarees.png',
          fabric: 'Georgette',
          work: 'Sequin Pallu & Heavy Blouse',
          color: 'Wine Red',
          description: 'Elegant wine-colored georgette saree with sequin work pallu and heavily embroidered blouse.'
        },
        {
          id: 'ds-004',
          name: 'Classic Black Designer',
          price: '₹48,000',
          image: '/Designer Sarees.png',
          fabric: 'Crepe',
          work: 'Minimal Border & Contemporary Blouse',
          color: 'Black',
          description: 'Sophisticated black crepe saree with minimal border work and contemporary designer blouse.'
        },
      ]
    },
    'reception-and-party-wear': {
      name: 'Reception & Party Wear',
      description: 'Glamorous gowns and reception outfits perfect for cocktail parties and evening celebrations.',
      image: '/Party & Occasion Wear.png',
      fabrics: ['Satin', 'Velvet', 'Net', 'Georgette', 'Crepe', 'Silk'],
      designs: ['Gown Style', 'Indo-Western', 'Long Jacket Set', 'Drape Saree Gown', 'Lehenga Gown', 'Fusion Dress'],
      colors: ['Champagne Gold', 'Midnight Blue', 'Wine', 'Black', 'Silver', 'Blush Pink', 'Emerald'],
      priceRange: '₹25,000 - ₹1,20,000',
      timeRequired: '30-40 days',
      products: [
        {
          id: 'rp-001',
          name: 'Champagne Ball Gown',
          price: '₹85,000',
          image: '/Party & Occasion Wear.png',
          fabric: 'Satin',
          work: 'Sequin & Stone Work',
          color: 'Champagne Gold',
          description: 'Stunning champagne ball gown with sequin and stone embellishments. Perfect for reception parties.'
        },
        {
          id: 'rp-002',
          name: 'Midnight Blue Indo-Western',
          price: '₹72,000',
          image: '/Party & Occasion Wear.png',
          fabric: 'Velvet',
          work: 'Thread Embroidery',
          color: 'Midnight Blue',
          description: 'Contemporary indo-western outfit in midnight blue with intricate thread embroidery.'
        },
        {
          id: 'rp-003',
          name: 'Wine Lehenga Gown',
          price: '₹95,000',
          image: '/Party & Occasion Wear.png',
          fabric: 'Net & Silk',
          work: 'Heavy Stone Setting',
          color: 'Wine',
          description: 'Elegant wine-colored lehenga-style gown with heavy stone setting work.'
        },
      ]
    },
  },
  wedding: {
    'bridal-lehengas': {
      name: 'Bridal Lehengas',
      description: 'Magnificent bridal lehengas with the finest embroidery and embellishments for your special day.',
      image: '/Designer Lehengas.png',
      fabrics: ['Pure Silk', 'Velvet', 'Georgette', 'Net', 'Brocade', 'Raw Silk'],
      designs: ['Heavy Zardozi', 'Kundan Work', 'Pearl Embellishment', 'Sequin & Stone', 'Thread Work', 'Mirror Work'],
      colors: ['Bridal Red', 'Maroon', 'Pink', 'Peach', 'Gold', 'Ivory', 'Pastel Shades'],
      priceRange: '₹60,000 - ₹3,00,000',
      timeRequired: '60-75 days',
      products: [
        {
          id: 'wbl-001',
          name: 'Royal Bridal Red Lehenga',
          price: '₹2,50,000',
          image: '/Designer Lehengas.png',
          fabric: 'Pure Silk & Velvet',
          work: 'Heavy Zardozi & Kundan Work',
          color: 'Bridal Red',
          description: 'Exquisite bridal lehenga with extensive zardozi and kundan work. Includes heavily embroidered dupatta and designer blouse.'
        },
        {
          id: 'wbl-002',
          name: 'Maroon Velvet Bridal Ensemble',
          price: '₹2,80,000',
          image: '/Designer Lehengas.png',
          fabric: 'Premium Velvet',
          work: 'Kundan, Pearl & Stone Setting',
          color: 'Maroon',
          description: 'Luxurious maroon velvet lehenga with intricate kundan, pearl, and stone setting work. Complete bridal trousseau.'
        },
        {
          id: 'wbl-003',
          name: 'Pastel Pink Dream Lehenga',
          price: '₹1,95,000',
          image: '/Designer Lehengas.png',
          fabric: 'Net & Silk',
          work: 'Thread Embroidery & Sequins',
          color: 'Pastel Pink',
          description: 'Contemporary pastel pink bridal lehenga with delicate thread work and sequin embellishments.'
        },
        {
          id: 'wbl-004',
          name: 'Golden Splendor Bridal Lehenga',
          price: '₹2,95,000',
          image: '/Designer Lehengas.png',
          fabric: 'Brocade & Pure Silk',
          work: 'Heavy Zardozi & Stone Work',
          color: 'Gold',
          description: 'Majestic golden bridal lehenga with rich brocade fabric and extensive zardozi work with precious stones.'
        },
        {
          id: 'wbl-005',
          name: 'Ivory Elegance Bridal Set',
          price: '₹2,10,000',
          image: '/Designer Lehengas.png',
          fabric: 'Georgette & Net',
          work: 'Pearl & Crystal Work',
          color: 'Ivory',
          description: 'Modern ivory bridal ensemble with pearl and crystal embellishments. Perfect for contemporary brides.'
        },
        {
          id: 'wbl-006',
          name: 'Peach Blossom Bridal Lehenga',
          price: '₹2,20,000',
          image: '/Designer Lehengas.png',
          fabric: 'Raw Silk',
          work: 'Mixed Embroidery & Stone Setting',
          color: 'Peach',
          description: 'Romantic peach bridal lehenga with mixed embroidery techniques and stone embellishments.'
        },
      ]
    },
    'bridal-sarees': {
      name: 'Bridal Sarees',
      description: 'Traditional bridal sarees with heavy designer blouses for the elegant bride.',
      image: '/bride sarees.png',
      fabrics: ['Banarasi', 'Kanjivaram', 'Silk', 'Tissue', 'Brocade', 'Net'],
      designs: ['Traditional Border', 'Heavy Pallu', 'Designer Blouse', 'Zardozi Work', 'Stone Setting', 'Embroidered'],
      colors: ['Red', 'Maroon', 'Gold', 'Pink', 'Green', 'Purple', 'Magenta'],
      priceRange: '₹30,000 - ₹1,50,000',
      timeRequired: '30-45 days',
      products: [
        {
          id: 'wbs-001',
          name: 'Banarasi Bridal Red Saree',
          price: '₹85,000',
          image: '/bride sarees.png',
          fabric: 'Pure Banarasi Silk',
          work: 'Traditional Zari Work',
          color: 'Bridal Red',
          description: 'Classic Banarasi bridal saree with rich zari work and traditional motifs. Includes heavy designer blouse.'
        },
        {
          id: 'wbs-002',
          name: 'Kanjivaram Bridal Saree',
          price: '₹95,000',
          image: '/bride sarees.png',
          fabric: 'Pure Kanjivaram Silk',
          work: 'Temple Border & Heavy Pallu',
          color: 'Maroon & Gold',
          description: 'Traditional South Indian bridal Kanjivaram with temple border and elaborate pallu design.'
        },
        {
          id: 'wbs-003',
          name: 'Designer Net Bridal Saree',
          price: '₹1,20,000',
          image: '/bride sarees.png',
          fabric: 'Designer Net',
          work: 'Stone Setting & Embroidery',
          color: 'Pink',
          description: 'Contemporary net bridal saree with heavy stone setting work and intricate embroidery throughout.'
        },
        {
          id: 'wbs-004',
          name: 'Tissue Bridal Saree',
          price: '₹75,000',
          image: '/bride sarees.png',
          fabric: 'Tissue Silk',
          work: 'Gold Zari & Sequins',
          color: 'Gold',
          description: 'Shimmering tissue bridal saree with gold zari work and sequin embellishments.'
        },
      ]
    },
    'wedding-blouses': {
      name: 'Wedding Blouses',
      description: 'Custom-designed wedding blouses with intricate handwork and premium fabrics.',
      image: '/Custom Blouse Stitching.png',
      fabrics: ['Silk', 'Velvet', 'Brocade', 'Net', 'Georgette', 'Satin'],
      designs: ['Heavy Back Work', 'Full Sleeve Embroidery', 'Stone Setting', 'Zardozi', 'Pearl Work', 'Sequin Work'],
      colors: ['Match Saree/Lehenga', 'Contrast', 'Gold', 'Silver', 'Custom'],
      priceRange: '₹8,000 - ₹40,000',
      timeRequired: '20-30 days',
      products: [
        {
          id: 'wbh-001',
          name: 'Heavy Back Work Blouse',
          price: '₹25,000',
          image: '/Custom Blouse Stitching.png',
          fabric: 'Velvet',
          work: 'Zardozi Back Design',
          color: 'Match outfit',
          description: 'Statement wedding blouse with elaborate zardozi work on the back. Full coverage with intricate detailing.'
        },
        {
          id: 'wbh-002',
          name: 'Full Sleeve Embroidered Blouse',
          price: '₹30,000',
          image: '/Custom Blouse Stitching.png',
          fabric: 'Silk',
          work: 'Full Sleeve Embroidery & Stone Work',
          color: 'Custom',
          description: 'Luxurious full sleeve blouse with embroidery covering the entire sleeve and stone setting details.'
        },
        {
          id: 'wbh-003',
          name: 'Pearl Work Wedding Blouse',
          price: '₹22,000',
          image: '/Custom Blouse Stitching.png',
          fabric: 'Brocade',
          work: 'Pearl & Moti Embellishment',
          color: 'Gold',
          description: 'Elegant wedding blouse with extensive pearl and moti work. Perfect for traditional brides.'
        },
      ]
    },
    'reception-gowns': {
      name: 'Reception Gowns',
      description: 'Stunning reception gowns for the modern bride\'s post-wedding celebrations.',
      image: '/Party & Occasion Wear.png',
      fabrics: ['Satin', 'Velvet', 'Net', 'Georgette', 'Silk', 'Taffeta'],
      designs: ['Ball Gown', 'Mermaid Cut', 'A-Line', 'Fit & Flare', 'Trumpet', 'Princess Style'],
      colors: ['Champagne', 'Gold', 'Silver', 'Blush Pink', 'Ivory', 'Pastels', 'Bold Colors'],
      priceRange: '₹35,000 - ₹1,50,000',
      timeRequired: '40-50 days',
      products: [
        {
          id: 'wrg-001',
          name: 'Champagne Ball Gown',
          price: '₹95,000',
          image: '/Party & Occasion Wear.png',
          fabric: 'Satin & Net',
          work: 'Crystal Embellishment',
          color: 'Champagne Gold',
          description: 'Grand ball gown in champagne shade with crystal embellishments. Perfect for a fairytale reception.'
        },
        {
          id: 'wrg-002',
          name: 'Blush Pink Mermaid Gown',
          price: '₹1,20,000',
          image: '/Party & Occasion Wear.png',
          fabric: 'Velvet & Lace',
          work: 'Lace Work & Stone Setting',
          color: 'Blush Pink',
          description: 'Elegant mermaid cut gown with intricate lace work and stone setting details.'
        },
        {
          id: 'wrg-003',
          name: 'Ivory Princess Gown',
          price: '₹85,000',
          image: '/Party & Occasion Wear.png',
          fabric: 'Georgette & Silk',
          work: 'Pearl & Sequin Work',
          color: 'Ivory',
          description: 'Romantic princess-style gown with pearl and sequin embellishments throughout.'
        },
      ]
    },
    'mehendi-and-sangeet': {
      name: 'Mehendi & Sangeet',
      description: 'Vibrant and comfortable outfits perfect for pre-wedding celebrations.',
      image: '/Designer Lehengas.png',
      fabrics: ['Georgette', 'Net', 'Silk', 'Crepe', 'Cotton Silk', 'Chanderi'],
      designs: ['Light Embroidery', 'Print & Embroidery Mix', 'Floral Patterns', 'Minimal Work', 'Mirror Work', 'Thread Work'],
      colors: ['Yellow', 'Green', 'Orange', 'Pink', 'Blue', 'Multi-color', 'Pastel Combinations'],
      priceRange: '₹15,000 - ₹60,000',
      timeRequired: '25-35 days',
      products: [
        {
          id: 'wms-001',
          name: 'Yellow Mehendi Lehenga',
          price: '₹35,000',
          image: '/Designer Lehengas.png',
          fabric: 'Georgette',
          work: 'Mirror Work & Thread Embroidery',
          color: 'Yellow',
          description: 'Vibrant yellow lehenga with traditional mirror work perfect for mehendi ceremony.'
        },
        {
          id: 'wms-002',
          name: 'Green Sangeet Outfit',
          price: '₹42,000',
          image: '/Designer Lehengas.png',
          fabric: 'Net & Silk',
          work: 'Floral Embroidery',
          color: 'Mint Green',
          description: 'Elegant green lehenga with floral embroidery ideal for sangeet celebrations.'
        },
        {
          id: 'wms-003',
          name: 'Multi-color Festive Lehenga',
          price: '₹38,000',
          image: '/Designer Lehengas.png',
          fabric: 'Cotton Silk',
          work: 'Print & Embroidery Mix',
          color: 'Multi-color',
          description: 'Colorful festive lehenga combining prints and embroidery for pre-wedding functions.'
        },
      ]
    },
    'bangle-coordination': {
      name: 'Bangle Coordination',
      description: 'Perfect bangle sets to complement your wedding attire.',
      image: '/Bangle design.png',
      fabrics: ['N/A'],
      designs: ['Traditional Gold-Plated', 'Stone-Studded', 'Kundan & Polki', 'Contemporary', 'Bridal Sets'],
      colors: ['Gold', 'Rose Gold', 'Silver', 'Match Outfit', 'Custom'],
      priceRange: '₹3,000 - ₹25,000',
      timeRequired: '7-14 days',
    },
  },
  childrens: {
    'party-gowns': {
      name: 'Party Gowns',
      description: 'Adorable party gowns for little princesses with comfortable fits and beautiful designs.',
      image: '/Party & Occasion Wear.png',
      fabrics: ['Satin', 'Net', 'Georgette', 'Silk', 'Velvet', 'Cotton Silk'],
      designs: ['Princess Style', 'Ball Gown', 'Frock Style', 'A-Line', 'Layered', 'Sequin Work'],
      colors: ['Pink', 'Blue', 'White', 'Purple', 'Peach', 'Multi-color', 'Pastels'],
      priceRange: '₹3,000 - ₹15,000',
      timeRequired: '15-20 days',
    },
    'wedding-lehengas': {
      name: 'Wedding Lehengas',
      description: 'Miniature bridal lehengas for kids attending weddings, comfortable yet elegant.',
      image: '/Designer Lehengas.png',
      fabrics: ['Soft Silk', 'Cotton Net', 'Georgette', 'Crepe', 'Light Velvet', 'Chanderi'],
      designs: ['Light Embroidery', 'Thread Work', 'Sequin Details', 'Print & Work', 'Mirror Work', 'Simple Elegant'],
      colors: ['Pink', 'Peach', 'Gold', 'Yellow', 'Red', 'Green', 'Multi-color'],
      priceRange: '₹5,000 - ₹20,000',
      timeRequired: '20-25 days',
    },
    'festive-frocks': {
      name: 'Festive Frocks',
      description: 'Traditional and contemporary frocks perfect for festival celebrations.',
      image: '/Party & Occasion Wear.png',
      fabrics: ['Cotton', 'Cotton Silk', 'Chanderi', 'Georgette', 'Net', 'Soft Crepe'],
      designs: ['Ethnic Prints', 'Thread Work', 'Minimal Embroidery', 'Anarkali Style', 'Jacket Style', 'Indo-Western'],
      colors: ['Traditional Colors', 'Pastels', 'Bright Shades', 'Print Patterns', 'Mix Colors'],
      priceRange: '₹2,500 - ₹12,000',
      timeRequired: '15-20 days',
    },
  },
  combos: {
    'coordinated-lehengas': {
      name: 'Coordinated Lehengas',
      description: 'Perfectly matched mother-daughter lehenga sets with complementary designs.',
      image: '/Designer Lehengas.png',
      fabrics: ['Silk', 'Georgette', 'Net', 'Velvet', 'Crepe', 'Brocade'],
      designs: ['Matching Patterns', 'Complementary Colors', 'Similar Embroidery', 'Theme-based', 'Coordinated Work'],
      colors: ['Matching Shades', 'Complementary Tones', 'Custom Coordination', 'Traditional Combos'],
      priceRange: '₹35,000 - ₹1,20,000 (Set)',
      timeRequired: '45-60 days',
    },
    'saree-and-lehenga-pairing': {
      name: 'Saree & Lehenga Pairing',
      description: 'Coordinated saree for mother and lehenga for daughter with matching aesthetics.',
      image: '/Designer Sarees.png',
      fabrics: ['Silk Combinations', 'Mixed Fabrics', 'Coordinated Textures', 'Premium Blends'],
      designs: ['Coordinated Borders', 'Matching Embroidery', 'Complementary Work', 'Theme-based Design'],
      colors: ['Color Coordinated', 'Tone on Tone', 'Contrast Pairs', 'Custom Matching'],
      priceRange: '₹30,000 - ₹1,00,000 (Set)',
      timeRequired: '40-50 days',
    },
    'festival-twin-sets': {
      name: 'Festival Twin Sets',
      description: 'Matching festival outfits for mother and daughter to celebrate together.',
      image: '/Party & Occasion Wear.png',
      fabrics: ['Cotton Silk', 'Georgette', 'Crepe', 'Chanderi', 'Net', 'Light Silk'],
      designs: ['Matching Prints', 'Coordinated Embroidery', 'Similar Styles', 'Ethnic Patterns', 'Fusion Designs'],
      colors: ['Festive Colors', 'Traditional Shades', 'Bright Combinations', 'Pastels', 'Custom'],
      priceRange: '₹15,000 - ₹50,000 (Set)',
      timeRequired: '25-35 days',
    },
  },
  embroidery: {
    'zardozi-work': {
      name: 'Zardozi Work',
      description: 'Heavy metallic embroidery with gold and silver threads, perfect for bridal wear.',
      image: '/Custom Blouse Stitching.png',
      fabrics: ['Any fabric (silk, velvet, georgette, net, etc.)'],
      designs: ['Heavy Bridal', 'Border Work', 'Motif Placement', 'Full Coverage', 'Scattered', 'Panel Work'],
      colors: ['Gold', 'Silver', 'Mixed Metals', 'Custom Colors'],
      priceRange: '₹5,000 - ₹50,000 (per piece)',
      timeRequired: '20-45 days',
    },
    'sequin-and-bead-work': {
      name: 'Sequin & Bead Work',
      description: 'Shimmering sequins and beads hand-stitched for party wear.',
      image: '/Party & Occasion Wear.png',
      fabrics: ['Net', 'Georgette', 'Silk', 'Velvet', 'Crepe', 'Satin'],
      designs: ['All Over Sequin', 'Scattered Beads', 'Border Details', 'Motif Work', 'Mixed Embellishments'],
      colors: ['Match Fabric', 'Contrast', 'Multi-color', 'Custom'],
      priceRange: '₹3,000 - ₹30,000',
      timeRequired: '15-30 days',
    },
    'thread-embroidery': {
      name: 'Thread Embroidery',
      description: 'Colorful silk thread work creating intricate patterns.',
      image: '/Designer Lehengas.png',
      fabrics: ['All fabrics'],
      designs: ['Floral Patterns', 'Paisley', 'Geometric', 'Traditional Motifs', 'Contemporary Designs', 'Custom'],
      colors: ['Multi-color', 'Single Tone', 'Match Fabric', 'Contrast', 'Custom Palette'],
      priceRange: '₹2,000 - ₹25,000',
      timeRequired: '15-35 days',
    },
    'mirror-work': {
      name: 'Mirror Work',
      description: 'Traditional Rajasthani-style mirror embellishments.',
      image: '/Designer Sarees.png',
      fabrics: ['All fabrics'],
      designs: ['Scattered Mirrors', 'Border Work', 'Motif Based', 'All Over', 'Minimal Accent'],
      colors: ['Silver Mirrors', 'Mixed with Thread Work', 'Custom Combinations'],
      priceRange: '₹2,500 - ₹20,000',
      timeRequired: '15-25 days',
    },
    'computer-embroidery': {
      name: 'Computer Embroidery',
      description: 'Precision machine embroidery with perfect replication and faster turnaround.',
      image: '/Custom Blouse Stitching.png',
      fabrics: ['All fabrics - Cotton, Silk, Georgette, Net, Velvet, Satin'],
      designs: ['Intricate Patterns', 'Logo Embroidery', 'Monograms', 'Repeat Patterns', 'Border Work', 'Custom Designs', 'Photographic Replication'],
      colors: ['Unlimited color options', 'Gradients possible', 'Exact color matching', 'Multi-color designs'],
      priceRange: '₹1,500 - ₹15,000',
      timeRequired: '7-15 days',
      products: [
        {
          id: 'ce-001',
          name: 'Floral Border Design',
          price: '₹3,500',
          image: '/Custom Blouse Stitching.png',
          fabric: 'Any fabric',
          work: 'Computer Embroidery - Floral Pattern',
          color: 'Multi-color options',
          description: 'Beautiful floral border design created with precision computer embroidery. Perfect for dupattas, saree borders, and lehenga hems.'
        },
        {
          id: 'ce-002',
          name: 'Geometric Pattern Work',
          price: '₹4,200',
          image: '/Designer Sarees.png',
          fabric: 'Silk, Georgette, Net',
          work: 'Computer Embroidery - Geometric',
          color: 'Gold, Silver, Custom',
          description: 'Modern geometric patterns with metallic thread computer embroidery. Ideal for contemporary designs.'
        },
        {
          id: 'ce-003',
          name: 'Traditional Motif Set',
          price: '₹5,800',
          image: '/Designer Lehengas.png',
          fabric: 'All premium fabrics',
          work: 'Computer Embroidery - Traditional',
          color: 'Match outfit',
          description: 'Classic Indian motifs replicated perfectly with computer embroidery. Includes paisley, peacock, and floral designs.'
        },
        {
          id: 'ce-004',
          name: 'Monogram & Name Work',
          price: '₹2,500',
          image: '/Custom Blouse Stitching.png',
          fabric: 'Any fabric',
          work: 'Computer Embroidery - Text',
          color: 'Custom',
          description: 'Personalized monograms and name embroidery in various fonts and styles. Perfect for bridal items.'
        },
        {
          id: 'ce-005',
          name: 'All-Over Repeat Pattern',
          price: '₹8,500',
          image: '/Designer Sarees.png',
          fabric: 'Net, Georgette, Silk',
          work: 'Computer Embroidery - Repeat',
          color: 'Multi-color',
          description: 'Continuous repeat patterns covering full fabric. Consistent and flawless design throughout.'
        },
      ]
    },
    'embroidery-gallery': {
      name: 'Embroidery Design Gallery',
      description: 'Explore our extensive collection of embroidery patterns and designs.',
      image: '/Designer Lehengas.png',
      fabrics: ['View designs for all fabric types'],
      designs: ['1000+ Embroidery Patterns', 'Traditional to Contemporary', 'Bridal Collections', 'Party Wear Designs', 'Casual Embellishments', 'Custom Creation'],
      colors: ['All colors available', 'Custom color combinations', 'Metallic options', 'Gradient effects'],
      priceRange: 'Varies by design complexity',
      timeRequired: '7-45 days based on work',
      products: [
        {
          id: 'eg-001',
          name: 'Bridal Embroidery Collection',
          price: '₹15,000 - ₹80,000',
          image: '/Designer Lehengas.png',
          fabric: 'Premium fabrics',
          work: 'Heavy Bridal Work',
          color: 'Traditional & Contemporary',
          description: '50+ bridal embroidery designs featuring zardozi, sequins, stones, and thread work combinations.'
        },
        {
          id: 'eg-002',
          name: 'Contemporary Patterns',
          price: '₹5,000 - ₹25,000',
          image: '/Designer Sarees.png',
          fabric: 'Modern fabrics',
          work: 'Mixed embroidery techniques',
          color: 'Bold and pastels',
          description: '100+ modern embroidery patterns perfect for parties and special occasions.'
        },
        {
          id: 'eg-003',
          name: 'Traditional Indian Motifs',
          price: '₹8,000 - ₹40,000',
          image: '/Custom Blouse Stitching.png',
          fabric: 'Traditional fabrics',
          work: 'Classic Indian embroidery',
          color: 'Traditional colors',
          description: '200+ traditional Indian embroidery motifs including peacock, paisley, floral, and ethnic patterns.'
        },
        {
          id: 'eg-004',
          name: 'Minimal Elegant Designs',
          price: '₹3,000 - ₹15,000',
          image: '/Party & Occasion Wear.png',
          fabric: 'All fabrics',
          work: 'Subtle embroidery',
          color: 'Minimalist palette',
          description: '150+ minimalist embroidery designs for those who prefer understated elegance.'
        },
      ]
    },
    'stone-setting': {
      name: 'Stone Setting',
      description: 'Kundan, polki, and crystal stone work for designer pieces.',
      image: '/Designer Lehengas.png',
      fabrics: ['Silk', 'Velvet', 'Net', 'Georgette', 'Premium Fabrics'],
      designs: ['Heavy Stone Setting', 'Kundan Work', 'Polki Design', 'Crystal Work', 'Mixed Stones'],
      colors: ['Traditional Settings', 'Contemporary Colors', 'Custom'],
      priceRange: '₹10,000 - ₹80,000',
      timeRequired: '25-50 days',
    },
    'pearl-embellishment': {
      name: 'Pearl Embellishment',
      description: 'Delicate pearl and moti work for sophisticated designs.',
      image: '/Custom Blouse Stitching.png',
      fabrics: ['All premium fabrics'],
      designs: ['Pearl Borders', 'Scattered Moti', 'Neckline Work', 'Sleeve Details', 'All Over Elegance'],
      colors: ['White Pearls', 'Colored Moti', 'Mixed Embellishments', 'Custom'],
      priceRange: '₹5,000 - ₹40,000',
      timeRequired: '20-35 days',
    },
  },
  'blouse-saree': {
    'traditional-blouses': {
      name: 'Traditional Blouses',
      description: 'Classic blouse designs with intricate handwork.',
      image: '/Custom Blouse Stitching.png',
      fabrics: ['Silk', 'Brocade', 'Cotton Silk', 'Velvet', 'Georgette'],
      designs: ['Round Neck', 'Square Neck', 'V-Neck', 'Boat Neck', 'Traditional Cuts'],
      colors: ['Match Saree', 'Contrast', 'Custom'],
      priceRange: '₹3,000 - ₹15,000',
      timeRequired: '15-20 days',
    },
    'contemporary-cuts': {
      name: 'Contemporary Cuts',
      description: 'Modern silhouettes for the fashion-forward.',
      image: '/Designer Sarees.png',
      fabrics: ['Silk', 'Satin', 'Velvet', 'Net', 'Georgette', 'Crepe'],
      designs: ['Cold Shoulder', 'Off-Shoulder', 'Halter Neck', 'High Neck', 'Asymmetric'],
      colors: ['Contemporary Shades', 'Bold Colors', 'Pastels', 'Custom'],
      priceRange: '₹4,000 - ₹20,000',
      timeRequired: '15-25 days',
    },
    'backless-designs': {
      name: 'Backless Designs',
      description: 'Statement-making back patterns.',
      image: '/Custom Blouse Stitching.png',
      fabrics: ['Silk', 'Velvet', 'Net', 'Satin', 'Georgette'],
      designs: ['Deep Back', 'Keyhole Back', 'String Back', 'Corset Back', 'Designer Back'],
      colors: ['Match or Contrast', 'Bold Shades', 'Custom'],
      priceRange: '₹5,000 - ₹25,000',
      timeRequired: '20-25 days',
    },
    'sleeve-variations': {
      name: 'Sleeve Variations',
      description: 'From minimal to elaborate sleeve designs.',
      image: '/Designer Sarees.png',
      fabrics: ['All blouse fabrics'],
      designs: ['Full Sleeves', 'Three-Quarter', 'Bell Sleeves', 'Cape Sleeves', 'Designer Sleeves'],
      colors: ['Any', 'Custom'],
      priceRange: '₹3,500 - ₹18,000',
      timeRequired: '15-22 days',
    },
    'embellished-blouses': {
      name: 'Embellished Blouses',
      description: 'Heavy work for special occasions.',
      image: '/Custom Blouse Stitching.png',
      fabrics: ['Silk', 'Velvet', 'Brocade', 'Net', 'Georgette'],
      designs: ['Sequin Work', 'Zardozi', 'Thread Work', 'Stone Setting', 'Pearl Work', 'Mixed Work'],
      colors: ['Match Saree', 'Gold', 'Silver', 'Custom'],
      priceRange: '₹8,000 - ₹40,000',
      timeRequired: '25-35 days',
    },
    'crop-and-peplum': {
      name: 'Crop & Peplum',
      description: 'Trendy styles with unique silhouettes.',
      image: '/Designer Sarees.png',
      fabrics: ['Silk', 'Satin', 'Crepe', 'Georgette', 'Net'],
      designs: ['Crop Tops', 'Peplum Blouses', 'Jacket Style', 'Cape Blouses', 'Fusion Styles'],
      colors: ['Contemporary', 'Bold', 'Pastels', 'Custom'],
      priceRange: '₹5,000 - ₹22,000',
      timeRequired: '18-28 days',
    },
  },
  bangles: {
    'traditional-gold-plated': {
      name: 'Traditional Gold-Plated',
      description: 'Classic gold-plated bangles with intricate patterns.',
      image: '/Bangle design.png',
      fabrics: ['N/A'],
      designs: ['Classic Patterns', 'Engraved Work', 'Traditional Motifs', 'Plain Gold', 'Textured'],
      colors: ['Gold', 'Rose Gold', 'Antique Gold'],
      priceRange: '₹2,000 - ₹15,000 (per set)',
      timeRequired: '7-14 days',
    },
    'stone-studded-bangles': {
      name: 'Stone-Studded Bangles',
      description: 'Elegant bangles adorned with precious and semi-precious stones.',
      image: '/Bangle design.png',
      fabrics: ['N/A'],
      designs: ['Full Stone', 'Half Stone', 'Scattered Stones', 'Line Setting', 'Mixed Stones'],
      colors: ['Match Outfit', 'Traditional', 'Contemporary', 'Custom'],
      priceRange: '₹5,000 - ₹30,000 (per set)',
      timeRequired: '10-20 days',
    },
    'kundan-and-polki-work': {
      name: 'Kundan & Polki Work',
      description: 'Exquisite kundan and polki bangles for a regal look.',
      image: '/Bangle design.png',
      fabrics: ['N/A'],
      designs: ['Full Kundan', 'Polki Border', 'Mixed Work', 'Traditional Setting', 'Designer Kundan'],
      colors: ['Traditional Gold', 'Match Outfit', 'Custom Colors'],
      priceRange: '₹8,000 - ₹40,000 (per set)',
      timeRequired: '15-25 days',
    },
    'contemporary-designs': {
      name: 'Contemporary Designs',
      description: 'Modern fusion bangles with minimalist designs.',
      image: '/Bangle design.png',
      fabrics: ['N/A'],
      designs: ['Minimalist', 'Geometric', 'Fusion', 'Modern Patterns', 'Sleek Designs'],
      colors: ['Rose Gold', 'Silver', 'Mixed Metals', 'Contemporary'],
      priceRange: '₹1,500 - ₹10,000 (per set)',
      timeRequired: '7-10 days',
    },
    'bridal-bangle-sets': {
      name: 'Bridal Bangle Sets',
      description: 'Complete bridal bangle sets coordinated with your wedding outfit.',
      image: '/Bangle design.png',
      fabrics: ['N/A'],
      designs: ['Complete Sets', 'Coordinated', 'Heavy Bridal', 'Traditional Bridal', 'Designer Bridal'],
      colors: ['Match Bridal Outfit', 'Traditional Red & Gold', 'Custom'],
      priceRange: '₹15,000 - ₹80,000 (complete set)',
      timeRequired: '20-30 days',
    },
    'festival-special': {
      name: 'Festival Special',
      description: 'Vibrant and colorful bangle sets perfect for festivals.',
      image: '/Bangle design.png',
      fabrics: ['N/A'],
      designs: ['Colorful Sets', 'Mixed Patterns', 'Traditional Festival', 'Contemporary Festival', 'Fusion'],
      colors: ['Bright Colors', 'Traditional Combinations', 'Multi-color', 'Custom'],
      priceRange: '₹2,500 - ₹18,000 (per set)',
      timeRequired: '10-15 days',
    },
  },
};

export default function CategoryDetailPage() {
  const params = useParams();
  const collection = params.collection as string;
  const category = params.category as string;
  const { addToCart } = useCart();

  const [selectedFabric, setSelectedFabric] = useState('');
  const [selectedDesign, setSelectedDesign] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [customNotes, setCustomNotes] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  // Get category data or show fallback
  const data = categoryData[collection]?.[category] || {
    name: 'Category Not Found',
    description: 'This category is coming soon. Please check back later.',
    image: '/Designer Lehengas.png',
    fabrics: [],
    designs: [],
    colors: [],
    priceRange: 'Contact for pricing',
    timeRequired: 'Contact for details',
    products: []
  };

  // Generate default products if none exist
  const products = data.products || [
    {
      id: '001',
      name: `${data.name} - Design 1`,
      price: data.priceRange.split(' - ')[0] || '₹25,000',
      image: data.image,
      fabric: data.fabrics[0] || 'Premium Fabric',
      work: data.designs[0] || 'Designer Work',
      color: data.colors[0] || 'Custom',
      description: `Beautiful ${data.name.toLowerCase()} with premium craftsmanship and attention to detail.`
    },
    {
      id: '002',
      name: `${data.name} - Design 2`,
      price: data.priceRange.split(' - ')[1]?.replace('(per piece)', '').replace('(per set)', '').replace('(Set)', '').replace('(complete set)', '').trim() || '₹45,000',
      image: data.image,
      fabric: data.fabrics[1] || data.fabrics[0] || 'Premium Fabric',
      work: data.designs[1] || data.designs[0] || 'Designer Work',
      color: data.colors[1] || data.colors[0] || 'Custom',
      description: `Elegant ${data.name.toLowerCase()} crafted with finest materials and expert workmanship.`
    },
    {
      id: '003',
      name: `${data.name} - Design 3`,
      price: data.priceRange.split(' - ')[0] || '₹30,000',
      image: data.image,
      fabric: data.fabrics[2] || data.fabrics[0] || 'Premium Fabric',
      work: data.designs[2] || data.designs[0] || 'Designer Work',
      color: data.colors[2] || data.colors[0] || 'Custom',
      description: `Exquisite ${data.name.toLowerCase()} with traditional craftsmanship and modern aesthetics.`
    },
  ];

  const handleProductInquiry = (product: Product) => {
    const message = `Hi, I'm interested in "${product.name}" from ${data.name} collection.\n\nProduct Details:\n- Price: ${product.price}\n- Fabric: ${product.fabric}\n- Work: ${product.work}\n- Color: ${product.color}\n\nCustom Preferences:\n- Fabric: ${selectedFabric || 'As shown'}\n- Design: ${selectedDesign || 'As shown'}\n- Color: ${selectedColor || 'As shown'}\n\nAdditional Notes: ${customNotes || 'None'}`;
    
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleBookConsultation = () => {
    const message = `Hi, I'm interested in ${data.name} from the ${collection} collection.\n\nMy preferences:\n- Fabric: ${selectedFabric || 'Not selected'}\n- Design: ${selectedDesign || 'Not selected'}\n- Color: ${selectedColor || 'Not selected'}\n\nAdditional Notes: ${customNotes || 'None'}`;
    
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>
        
        <div className="max-w-5xl mx-auto container-padding relative z-10 text-center">
          <Link 
            href={`/collections/${collection}`}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-8 text-sm font-light tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {collection.charAt(0).toUpperCase() + collection.slice(1)} Collection
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light text-white mb-6"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            {data.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light text-white/90 max-w-3xl mx-auto"
          >
            {data.description}
          </motion.p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start gap-4"
            >
              <Package className="w-8 h-8 text-[#C8A96A]" />
              <div>
                <p className="text-sm text-gray-600 font-light">Price Range</p>
                <p className="text-lg font-light text-[#1C1C1C]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {data.priceRange}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center md:justify-start gap-4"
            >
              <Ruler className="w-8 h-8 text-[#C8A96A]" />
              <div>
                <p className="text-sm text-gray-600 font-light">Time Required</p>
                <p className="text-lg font-light text-[#1C1C1C]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {data.timeRequired}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="section-padding bg-gradient-to-b from-[#FAF9F7] to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">Our Collection</span>
            <div className="w-20 h-px bg-[#C8A96A] mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Available Designs
            </h2>
            <p className="text-base font-light text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of {data.name.toLowerCase()}. Each piece can be customized to your preferences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product: Product, index: number) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden mb-6 shadow-2xl cursor-pointer" onClick={() => openProductModal(product)}>
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center">
                        <p className="text-white text-sm tracking-wider font-light mb-2">CLICK TO VIEW DETAILS</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-light text-[#1C1C1C] mb-2 group-hover:text-[#C8A96A] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {product.name}
                </h3>
                
                <p className="text-xl font-light text-[#C8A96A] mb-3">
                  {product.price}
                </p>

                <div className="space-y-2 mb-4">
                  <p className="text-sm font-light text-gray-600">
                    <span className="text-[#1C1C1C]">Fabric:</span> {product.fabric}
                  </p>
                  <p className="text-sm font-light text-gray-600">
                    <span className="text-[#1C1C1C]">Work:</span> {product.work}
                  </p>
                  <p className="text-sm font-light text-gray-600">
                    <span className="text-[#1C1C1C]">Color:</span> {product.color}
                  </p>
                </div>

                <p className="text-sm font-light text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>

                <button
                  onClick={() => handleProductInquiry(product)}
                  className="w-full py-3 border-2 border-[#C8A96A] text-[#C8A96A] hover:bg-[#C8A96A] hover:text-white transition-colors text-sm tracking-wider font-light"
                >
                  INQUIRE ABOUT THIS DESIGN
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">Customize</span>
            <div className="w-20 h-px bg-[#C8A96A] mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Design Your Perfect Piece
            </h2>
            <p className="text-base font-light text-gray-600 max-w-2xl mx-auto">
              Select your preferences and our design team will create a customized piece just for you
            </p>
          </motion.div>

          <div className="grid gap-12">
            {/* Fabric Selection */}
            {data.fabrics.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="w-6 h-6 text-[#C8A96A]" />
                  <h3 className="text-2xl font-light text-[#1C1C1C]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Select Fabric
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {data.fabrics.map((fabric: string) => (
                    <button
                      key={fabric}
                      onClick={() => setSelectedFabric(fabric)}
                      className={`p-4 border-2 transition-all ${
                        selectedFabric === fabric
                          ? 'border-[#C8A96A] bg-[#C8A96A]/10'
                          : 'border-gray-200 hover:border-[#C8A96A]/50'
                      }`}
                    >
                      <span className="text-sm font-light text-[#1C1C1C]">{fabric}</span>
                      {selectedFabric === fabric && (
                        <Check className="w-4 h-4 text-[#C8A96A] ml-auto mt-2" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Design Selection */}
            {data.designs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Package className="w-6 h-6 text-[#C8A96A]" />
                  <h3 className="text-2xl font-light text-[#1C1C1C]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Choose Design Style
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {data.designs.map((design: string) => (
                    <button
                      key={design}
                      onClick={() => setSelectedDesign(design)}
                      className={`p-4 border-2 transition-all ${
                        selectedDesign === design
                          ? 'border-[#C8A96A] bg-[#C8A96A]/10'
                          : 'border-gray-200 hover:border-[#C8A96A]/50'
                      }`}
                    >
                      <span className="text-sm font-light text-[#1C1C1C]">{design}</span>
                      {selectedDesign === design && (
                        <Check className="w-4 h-4 text-[#C8A96A] ml-auto mt-2" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Color Selection */}
            {data.colors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="w-6 h-6 text-[#C8A96A]" />
                  <h3 className="text-2xl font-light text-[#1C1C1C]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Select Color
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {data.colors.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`p-4 border-2 transition-all ${
                        selectedColor === color
                          ? 'border-[#C8A96A] bg-[#C8A96A]/10'
                          : 'border-gray-200 hover:border-[#C8A96A]/50'
                      }`}
                    >
                      <span className="text-sm font-light text-[#1C1C1C]">{color}</span>
                      {selectedColor === color && (
                        <Check className="w-4 h-4 text-[#C8A96A] ml-auto mt-2" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Custom Notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-[#C8A96A]" />
                <h3 className="text-2xl font-light text-[#1C1C1C]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Additional Requirements
                </h3>
              </div>
              <textarea
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="Share any specific requirements, inspirations, or questions..."
                className="w-full p-4 border-2 border-gray-200 focus:border-[#C8A96A] focus:outline-none min-h-[120px] font-light text-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1C1C1C]">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-base font-light text-white/80 mb-8 max-w-2xl mx-auto">
              Book a consultation with our design team to discuss your requirements and get started on your custom piece
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookConsultation}
                className="px-8 py-4 bg-[#C8A96A] text-white hover:bg-[#B8956A] transition-colors text-sm tracking-wider font-light"
              >
                BOOK CONSULTATION
              </button>
              <Link
                href={`/collections/${collection}`}
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#1C1C1C] transition-colors text-sm tracking-wider font-light"
              >
                VIEW MORE IN COLLECTION
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              What You Get
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Personalized Design', desc: 'One-on-one consultation to understand your vision' },
              { title: 'Premium Materials', desc: 'Finest fabrics and embellishments sourced specially' },
              { title: 'Expert Craftsmanship', desc: 'Skilled artisans with years of experience' },
              { title: 'Perfect Fit', desc: 'Multiple fittings to ensure perfect fit and comfort' },
              { title: 'Timely Delivery', desc: 'Commitment to deliver within promised timeline' },
              { title: 'After-Care Support', desc: 'Alteration and maintenance support included' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <Check className="w-6 h-6 text-[#C8A96A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-light text-[#1C1C1C] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm font-light text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={closeProductModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white max-w-6xl w-full max-h-[90vh] overflow-hidden relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeProductModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white transition-colors shadow-lg"
            >
              <X className="w-6 h-6 text-[#1C1C1C]" />
            </button>

            <div className="grid md:grid-cols-2 overflow-y-auto">
              {/* Product Image */}
              <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[600px] md:sticky md:top-0">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Details - Scrollable */}
              <div className="p-8 md:p-12 overflow-y-auto">
                <div className="mb-8">
                  <span className="text-xs tracking-[0.3em] uppercase text-[#C8A96A] font-light">
                    {data.name}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mt-4 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {selectedProduct.name}
                  </h2>
                  <p className="text-3xl font-light text-[#C8A96A] mb-6">
                    {selectedProduct.price}
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-sm tracking-wider uppercase text-gray-600 mb-2">Description</h3>
                    <p className="text-base font-light text-[#1C1C1C] leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm tracking-wider uppercase text-gray-600 mb-2">Fabric</h3>
                      <p className="text-base font-light text-[#1C1C1C]">
                        {selectedProduct.fabric}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm tracking-wider uppercase text-gray-600 mb-2">Color</h3>
                      <p className="text-base font-light text-[#1C1C1C]">
                        {selectedProduct.color}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm tracking-wider uppercase text-gray-600 mb-2">Work Details</h3>
                    <p className="text-base font-light text-[#1C1C1C]">
                      {selectedProduct.work}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <div>
                      <h3 className="text-sm tracking-wider uppercase text-gray-600 mb-2">Time Required</h3>
                      <p className="text-base font-light text-[#1C1C1C]">
                        {data.timeRequired}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm tracking-wider uppercase text-gray-600 mb-2">Customizable</h3>
                      <p className="text-base font-light text-[#1C1C1C]">
                        Yes, all aspects
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI-Powered Suggestions */}
                <div className="mt-8 mb-8 p-6 bg-gradient-to-br from-[#FAF9F7] to-white border-2 border-[#C8A96A]/20 rounded-sm shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#C8A96A] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-light tracking-wide" style={{ color: '#1C1C1C', fontFamily: 'var(--font-cormorant)' }}>
                      Smart Recommendations
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Based on Function */}
                    <div>
                      <p className="text-xs tracking-wider uppercase text-[#C8A96A] mb-2">Best For</p>
                      <p className="text-sm font-light text-[#1C1C1C]">
                        {selectedProduct.fabric.includes('Velvet') || selectedProduct.work.includes('Heavy') 
                          ? '🌟 Winter weddings and evening ceremonies. The heavy fabric and work provide warmth and grandeur.'
                          : selectedProduct.fabric.includes('Georgette') || selectedProduct.fabric.includes('Net')
                          ? '☀️ Summer weddings and daytime events. Lightweight and breathable for comfort.'
                          : '✨ All-season wear. Versatile fabric suitable for any occasion.'}
                      </p>
                    </div>

                    {/* Style Recommendation */}
                    <div>
                      <p className="text-xs tracking-wider uppercase text-[#C8A96A] mb-2">Style Match</p>
                      <p className="text-sm font-light text-[#1C1C1C]">
                        {selectedProduct.work.includes('Zardozi') || selectedProduct.work.includes('Kundan')
                          ? '👑 Traditional & Regal style. Perfect for brides who love classic Indian aesthetics.'
                          : selectedProduct.work.includes('Contemporary') || selectedProduct.work.includes('Minimal')
                          ? '🎨 Modern & Minimalist style. Ideal for contemporary fashion-forward individuals.'
                          : '💫 Fusion style. Beautifully blends traditional and modern elements.'}
                      </p>
                    </div>

                    {/* Weight & Comfort */}
                    <div>
                      <p className="text-xs tracking-wider uppercase text-[#C8A96A] mb-2">Comfort Level</p>
                      <p className="text-sm font-light text-[#1C1C1C]">
                        {selectedProduct.work.includes('Heavy') || selectedProduct.fabric.includes('Velvet')
                          ? '⚖️ Heavy work (7-10 kg approx). Requires breaks during long ceremonies. Best worn with proper foundation garments.'
                          : selectedProduct.work.includes('Light') || selectedProduct.fabric.includes('Georgette')
                          ? '🪶 Lightweight (2-4 kg approx). Comfortable for all-day wear and dancing.'
                          : '📊 Medium weight (4-6 kg approx). Balanced between elegance and comfort.'}
                      </p>
                    </div>

                    {/* Color Psychology */}
                    <div>
                      <p className="text-xs tracking-wider uppercase text-[#C8A96A] mb-2">Color Significance</p>
                      <p className="text-sm font-light text-[#1C1C1C]">
                        {selectedProduct.color.toLowerCase().includes('red') || selectedProduct.color.toLowerCase().includes('maroon')
                          ? '❤️ Red symbolizes love, passion, and prosperity in Indian culture. Traditional bridal choice.'
                          : selectedProduct.color.toLowerCase().includes('pink') || selectedProduct.color.toLowerCase().includes('peach')
                          ? '🌸 Soft colors represent grace and femininity. Perfect for modern romantic aesthetics.'
                          : selectedProduct.color.toLowerCase().includes('gold') || selectedProduct.color.toLowerCase().includes('yellow')
                          ? '✨ Gold represents wealth and auspiciousness. Ideal for festive celebrations.'
                          : selectedProduct.color.toLowerCase().includes('green')
                          ? '🌿 Green symbolizes new beginnings and fertility. Popular for mehendi ceremonies.'
                          : selectedProduct.color.toLowerCase().includes('blue')
                          ? '💙 Blue represents tranquility and elegance. Modern choice for contemporary brides.'
                          : selectedProduct.color.toLowerCase().includes('ivory') || selectedProduct.color.toLowerCase().includes('white')
                          ? '🤍 Ivory/White represents purity and elegance. Perfect for minimalist modern weddings.'
                          : '🎨 This color adds a unique personal touch to your special occasion.'}
                      </p>
                    </div>

                    {/* Accessory Suggestions */}
                    <div>
                      <p className="text-xs tracking-wider uppercase text-[#C8A96A] mb-2">Pairs Well With</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white border border-[#C8A96A]/30 text-xs font-light text-[#1C1C1C]">
                          Matching Bangles
                        </span>
                        <span className="px-3 py-1 bg-white border border-[#C8A96A]/30 text-xs font-light text-[#1C1C1C]">
                          Designer Clutch
                        </span>
                        <span className="px-3 py-1 bg-white border border-[#C8A96A]/30 text-xs font-light text-[#1C1C1C]">
                          Traditional Jewelry
                        </span>
                        <span className="px-3 py-1 bg-white border border-[#C8A96A]/30 text-xs font-light text-[#1C1C1C]">
                          Embroidered Dupatta
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => {
                        addToCart({
                          id: selectedProduct.id,
                          name: selectedProduct.name,
                          price: selectedProduct.price,
                          image: selectedProduct.image,
                          fabric: selectedProduct.fabric,
                          work: selectedProduct.work,
                          color: selectedProduct.color,
                          category: category,
                          collection: collection
                        });
                      }}
                      className="py-4 bg-[#1C1C1C] text-white hover:bg-black transition-colors text-sm tracking-wider font-light flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      ADD TO CART
                    </button>
                    <Link
                      href="/checkout"
                      onClick={() => {
                        addToCart({
                          id: selectedProduct.id,
                          name: selectedProduct.name,
                          price: selectedProduct.price,
                          image: selectedProduct.image,
                          fabric: selectedProduct.fabric,
                          work: selectedProduct.work,
                          color: selectedProduct.color,
                          category: category,
                          collection: collection
                        });
                        closeProductModal();
                      }}
                      className="py-4 bg-[#C8A96A] text-white hover:bg-[#B8956A] transition-colors text-sm tracking-wider font-light flex items-center justify-center"
                    >
                      BUY NOW
                    </Link>
                  </div>
                  
                  <button
                    onClick={() => {
                      closeProductModal();
                      window.location.href = '/book-discussion';
                    }}
                    className="w-full py-4 border-2 border-[#C8A96A] text-[#1C1C1C] hover:bg-[#C8A96A] hover:text-white transition-all duration-300 text-sm tracking-wider font-light flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    BOOK DESIGN SESSION
                  </button>

                  <button
                    onClick={() => {
                      handleProductInquiry(selectedProduct);
                      closeProductModal();
                    }}
                    className="w-full py-4 border-2 border-gray-300 text-[#1C1C1C] hover:border-[#1C1C1C] transition-colors text-sm tracking-wider font-light"
                  >
                    WHATSAPP INQUIRY
                  </button>
                  
                  <button
                    onClick={closeProductModal}
                    className="w-full py-3 text-gray-600 hover:text-[#1C1C1C] transition-colors text-sm tracking-wider font-light"
                  >
                    Continue Browsing
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-xs font-light text-gray-600 leading-relaxed">
                    <span className="text-[#1C1C1C] font-normal">Note:</span> This design can be fully customized. Change fabric, colors, embroidery work, or any other aspect to create your perfect piece. Our design team will work closely with you to bring your vision to life.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
