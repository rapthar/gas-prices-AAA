import { GasPriceScraper } from "@/components/GasPriceScraper";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-fuel-yellow/5 to-fuel-orange/10 p-6">
      <div className="container mx-auto">
        <GasPriceScraper />
      </div>
    </div>
  );
};

export default Index;