
import { useEffect, useState } from 'react';
import { Users, GraduationCap, Heart, TreePine, Briefcase, Home } from 'lucide-react';

const Impact = () => {
  const [counters, setCounters] = useState({
    lives: 0,
    students: 0,
    healthcare: 0,
    trees: 0,
    jobs: 0,
    villages: 0
  });

  const targetNumbers = {
    lives: 1000,
    students: 500,
    healthcare: 2000,
    trees: 5000,
    jobs: 150,
    villages: 25
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let allComplete = true;

        Object.keys(targetNumbers).forEach(key => {
          const target = targetNumbers[key as keyof typeof targetNumbers];
          const current = prev[key as keyof typeof prev];
          
          if (current < target) {
            const remaining = target - current;
            const step = Math.ceil(remaining / 20);
            newCounters[key as keyof typeof newCounters] = Math.min(current + step, target);
            allComplete = false;
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, increment);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      number: counters.lives,
      label: 'Lives Impacted',
      description: 'Individuals directly benefited from our programs',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: GraduationCap,
      number: counters.students,
      label: 'Students Educated',
      description: 'Children receiving quality education support',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      number: counters.healthcare,
      label: 'Healthcare Services',
      description: 'Medical consultations and treatments provided',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: TreePine,
      number: counters.trees,
      label: 'Trees Planted',
      description: 'Contributing to environmental conservation',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Briefcase,
      number: counters.jobs,
      label: 'Jobs Created',
      description: 'Employment opportunities generated',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Home,
      number: counters.villages,
      label: 'Villages Served',
      description: 'Rural communities we actively work with',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Our <span className="text-orange-400">Impact</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Measuring our success through the positive changes we've brought to communities across Sultanpur and beyond
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`bg-gradient-to-r ${stat.color} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-poppins font-bold text-white mb-2">
                {stat.number.toLocaleString()}+
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-orange-400 mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Success Stories Teaser */}
        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-poppins font-bold mb-4">
            Real Stories, Real Impact
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Behind every number is a story of transformation, hope, and empowerment. 
            Our impact extends far beyond statistics – it's about changing lives, one person at a time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-black/30 rounded-lg p-6">
              <div className="text-2xl font-bold text-orange-400 mb-2">Education</div>
              <p className="text-gray-300 text-sm">
                "Thanks to Saransh Sewa Trust, I could complete my studies and now I'm pursuing engineering."
              </p>
              <div className="text-xs text-gray-400 mt-2">- Ashween Singh, Beneficiary</div>
            </div>
            <div className="bg-black/30 rounded-lg p-6">
              <div className="text-2xl font-bold text-orange-400 mb-2">Healthcare</div>
              <p className="text-gray-300 text-sm">
                "The mobile health clinic saved my mother's life when she needed emergency care."
              </p>
              <div className="text-xs text-gray-400 mt-2">- Anshuman, Village Resident</div>
            </div>
            <div className="bg-black/30 rounded-lg p-6">
              <div className="text-2xl font-bold text-orange-400 mb-2">Empowerment</div>
              <p className="text-gray-300 text-sm">
                "The skill training program helped me start my own tailoring business."
              </p>
              <div className="text-xs text-gray-400 mt-2">- Anushka, Entrepreneur</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;

