import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-voguard-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            <span className="text-foreground">Ready to Secure Your </span>
            <span className="text-gradient-orange">Voice Communications?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of enterprises protecting their organizations from voice fraud. 
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-orange hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 glow-orange font-semibold group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:border-voguard-light-blue/50 hover:bg-voguard-light-blue/10 text-lg px-8 py-6 font-semibold"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
