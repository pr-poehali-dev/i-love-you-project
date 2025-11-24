import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Index() {
  const [step, setStep] = useState(1);

  const handleNo = () => {
    setStep(1);
  };

  const handleYes = () => {
    setStep(2);
  };

  const handleKirivokNo = () => {
    setStep(2);
  };

  const handleKirivokYes = () => {
    setStep(3);
  };

  const handleOk = () => {
    setStep(4);
  };

  const generateTextPositions = () => {
    const positions = [];
    for (let i = 0; i < 1001; i++) {
      positions.push({
        top: `${Math.random() * 95}%`,
        left: `${Math.random() * 95}%`,
      });
    }
    return positions;
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground overflow-hidden">
      {step === 1 && (
        <div className="flex flex-col items-center gap-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-center px-4">
            я тебя люблю
          </h1>
          <div className="flex gap-6">
            <Button
              onClick={handleNo}
              variant="outline"
              size="lg"
              className="text-xl px-8 py-6 bg-secondary hover:bg-secondary/80 border-primary/50 hover:border-primary transition-all"
            >
              нет
            </Button>
            <Button
              onClick={handleYes}
              size="lg"
              className="text-xl px-8 py-6 bg-primary hover:bg-primary/80 transition-all"
            >
              и я тебя
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col items-center gap-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-center px-4">
            ты киривок?
          </h1>
          <div className="flex gap-6">
            <Button
              onClick={handleKirivokNo}
              variant="outline"
              size="lg"
              className="text-xl px-8 py-6 bg-secondary hover:bg-secondary/80 border-primary/50 hover:border-primary transition-all"
            >
              нет
            </Button>
            <Button
              onClick={handleKirivokYes}
              size="lg"
              className="text-xl px-8 py-6 bg-primary hover:bg-primary/80 transition-all"
            >
              да
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col items-center gap-16 animate-fade-in">
          <div className="flex flex-col items-center gap-8">
            <div className="text-8xl md:text-9xl font-bold">16.07.25</div>
            <div className="text-8xl md:text-9xl font-bold">30.07.25</div>
          </div>
          <Button
            onClick={handleOk}
            size="lg"
            className="text-xl px-12 py-6 bg-primary hover:bg-primary/80 transition-all"
          >
            ок
          </Button>
        </div>
      )}

      {step === 4 && (
        <div className="fixed inset-0 overflow-hidden">
          {generateTextPositions().map((pos, i) => (
            <div
              key={i}
              className="absolute text-xs whitespace-nowrap opacity-80"
              style={{
                top: pos.top,
                left: pos.left,
              }}
            >
              я тебя люблю котенок
            </div>
          ))}
        </div>
      )}
    </div>
  );
}