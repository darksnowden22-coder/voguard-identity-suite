import { Shield, Mic, Brain, Lock, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Detection",
    description: "Advanced neural networks trained on millions of voice samples to identify synthetic speech patterns.",
    color: "voguard-orange",
  },
  {
    icon: Zap,
    title: "Real-Time Analysis",
    description: "Instant voice verification with sub-50ms latency for seamless user experience.",
    color: "voguard-yellow",
  },
  {
    icon: Shield,
    title: "Fraud Prevention",
    description: "Stop voice cloning attacks and protect against social engineering threats.",
    color: "voguard-light-blue",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with SOC2, GDPR, and industry standards.",
    color: "voguard-orange",
  },
  {
    icon: Mic,
    title: "Voice Biometrics",
    description: "Unique voiceprint authentication that's impossible to replicate or forge.",
    color: "voguard-yellow",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Multi-language support with edge deployment for low-latency worldwide access.",
    color: "voguard-light-blue",
  },
];

const FeaturesSection = () => {
  return (
    <section id="solutions" className="py-32 bg-background relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-voguard-orange/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="text-foreground">Complete Voice </span>
            <span className="text-gradient-orange">Security Suite</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive protection against the rising threat of AI-generated voice attacks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-voguard-orange/50 transition-all duration-500 hover:shadow-lg hover:shadow-voguard-orange/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 text-${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold font-display mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
