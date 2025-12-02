import { Button } from "@/components/ui/button";
import { Shield, Mic, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-voguard-orange/30 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-voguard-light-blue/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-voguard-yellow/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-voguard-orange/30 bg-voguard-orange/10 mb-8">
            <Shield className="w-4 h-4 text-voguard-orange" />
            <span className="text-sm font-medium text-voguard-orange">AI-Powered Voice Security</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
            <span className="text-foreground">Protect Against</span>
            <br />
            <span className="text-gradient-orange">Voice Deepfakes</span>
            <br />
            <span className="text-foreground">in Real-Time</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            VoGaurd delivers enterprise-grade voice authentication and deepfake detection 
            to secure your communications against AI-generated fraud.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-orange hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 glow-orange font-semibold"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-voguard-light-blue/50 text-voguard-light-blue hover:bg-voguard-light-blue/10 text-lg px-8 py-6 font-semibold"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <div className="flex items-center justify-center mb-3">
                <Shield className="w-8 h-8 text-voguard-orange" />
              </div>
              <div className="text-3xl font-bold font-display text-gradient-orange mb-1">99.7%</div>
              <div className="text-muted-foreground">Detection Accuracy</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-voguard-yellow" />
              </div>
              <div className="text-3xl font-bold font-display text-accent mb-1">&lt;50ms</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <div className="flex items-center justify-center mb-3">
                <Mic className="w-8 h-8 text-voguard-light-blue" />
              </div>
              <div className="text-3xl font-bold font-display text-secondary mb-1">24/7</div>
              <div className="text-muted-foreground">Real-Time Protection</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
