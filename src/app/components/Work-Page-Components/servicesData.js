import {
    FaLeaf,
    FaSun,
    FaTools,
    FaChartLine,
  } from 'react-icons/fa';
  export const  categories = [
    { id: 'all', name: 'All Services', icon: <FaLeaf className="text-2xl text-green-600" /> },
    { id: 'installation', name: 'Installation', icon: <FaSun className="text-2xl text-green-600" /> },
    { id: 'design', name: 'Design & Consultation', icon: <FaTools className="text-2xl text-green-600" /> },
    { id: 'maintenance', name: 'Maintenance & Monitoring', icon: <FaChartLine className="text-2xl text-green-600" /> },
  ];
  
  export const  services = [
    {
      id: 1,
      title: 'Residential Solar Panel Installation',
      category: 'installation',
      image: '/Projects/installation1.png',
      description: 'Expert installation of high-efficiency solar panels for residential properties, tailored to maximize energy production.',
      highlight: [
        'Custom installation by certified technicians in 1-3 days.',
        'Uses top-tier solar panels from leading manufacturers.',
        'Includes permit handling and grid connection.',
        '25-year equipment and workmanship warranty.',
      ],
    },
    {
      id: 2,
      title: 'Commercial Solar Panel Installation',
      category: 'installation',
      image: '/Projects/installation1.png',
      description: 'Professional installation of solar systems for businesses, designed to reduce energy costs and carbon footprint.',
      highlight: [
        'Scalable solutions for various commercial sizes.',
        'Compliance with local building codes and incentives.',
        'Rapid deployment with minimal business disruption.',
        'Long-term savings with a 25-year performance guarantee.',
      ],
    },
    {
      id: 3,
      title: 'Solar System Design & Consultation',
      category: 'design',
      image: '/Projects/installation1.png',
      description: 'Comprehensive consultation and custom design services to optimize your solar system for energy needs and budget.',
      highlight: [
        'Free site assessment and energy usage analysis.',
        'Custom designs using advanced software like BrightPath™.',
        'Expert advice on incentives and tax credits.',
        'Detailed plan to maximize sunlight exposure.',
      ],
    },
    {
      id: 4,
      title: 'Energy Efficiency Consultation',
      category: 'design',
      image: '/Projects/installation1.png',
      description: 'Personalized consultation to enhance energy efficiency, integrating solar with your home’s existing systems.',
      highlight: [
        'Evaluation of current energy consumption patterns.',
        'Recommendations for hybrid solar-battery systems.',
        'Guidance on net metering eligibility.',
        'Support for sustainable lifestyle adjustments.',
      ],
    },
    {
      id: 5,
      title: 'Routine Maintenance Services',
      category: 'maintenance',
      image: '/Projects/installation1.png',
      description: 'Regular maintenance to ensure your solar panels operate at peak efficiency and longevity.',
      highlight: [
        'Annual inspections and cleaning by certified staff.',
        'Performance monitoring to detect issues early.',
        'Repair services for damaged components.',
        '24/7 remote monitoring system support.',
      ],
    },
    {
      id: 6,
      title: 'Performance Monitoring Program',
      category: 'maintenance',
      image: '/Projects/installation1.png',
      description: 'Continuous monitoring of your solar system to optimize performance and provide real-time data.',
      highlight: [
        'Access to a mobile app for energy production tracking.',
        'Alerts for potential system underperformance.',
        'Regular reports on savings and efficiency.',
        'Proactive maintenance scheduling.',
      ],
    },
  ];
  