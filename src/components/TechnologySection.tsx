import { Button } from "@/components/ui/button";

const TechnologySection = () => {
  return (
    <section id="technology" className="py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-voguard-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-voguard-light-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              <span className="text-foreground">Powered by </span>
              <span className="text-gradient-orange">Advanced AI</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our proprietary deep learning models analyze over 100 voice characteristics 
              in real-time, detecting even the most sophisticated deepfake attempts.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-voguard-orange mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Spectral Analysis</h4>
                  <p className="text-muted-foreground">Deep examination of frequency patterns unique to human speech</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-voguard-yellow mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Temporal Consistency</h4>
                  <p className="text-muted-foreground">Detection of unnatural timing artifacts in synthetic speech</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-voguard-light-blue mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Behavioral Biometrics</h4>
                  <p className="text-muted-foreground">Analysis of speaking patterns and voice dynamics</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-orange hover:opacity-90 transition-opacity font-semibold px-8">
              Learn More About Our Technology
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-voguard-dark-blue to-background border border-border p-8 relative overflow-hidden">
              {/* Animated Waveform Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-32 flex items-center justify-center gap-1">
                  {[...Array(40)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-gradient-to-t from-voguard-orange to-voguard-yellow rounded-full"
                      style={{
                        height: `${20 + Math.sin(i * 0.3) * 30 + Math.random() * 20}%`,
                        animation: `pulse-glow 1.5s ease-in-out infinite`,
                        animationDelay: `${i * 50}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Circular Pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-voguard-orange/30 animate-pulse-glow" />
                <div className="absolute w-48 h-48 rounded-full border border-voguard-yellow/30 animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
                <div className="absolute w-32 h-32 rounded-full border border-voguard-light-blue/30 animate-pulse-glow" style={{ animationDelay: "1s" }} />
              </div>

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-orange flex items-center justify-center glow-orange">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
