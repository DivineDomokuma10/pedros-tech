import { STEPS } from "@/lib/constants";

interface Props {
  activeStep: number;
  handleActiveStep: (index: number) => void;
}

export const Steps = ({ activeStep, handleActiveStep }: Props) => {
  return (
    <div className="space-y-0">
      {STEPS.map((step, index) => (
        <button
          type="button"
          key={step.number}
          onClick={() => handleActiveStep(index)}
          className={`w-full text-left py-8 border-b border-background/10 transition-all duration-500 group ${
            activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
          }`}
        >
          <div className="flex items-start gap-6">
            <span className="font-display text-3xl text-background/30">
              {step.number}
            </span>

            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">
                {step.title}
              </h3>

              <p className="text-background/60 leading-relaxed">
                {step.description}
              </p>

              {activeStep === index && (
                <div className="mt-4 h-px bg-background/20 overflow-hidden">
                  <div
                    className="h-full bg-background w-0"
                    style={{
                      animation: "progress 5s linear forwards",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export const VisualProgressBlocks = ({
  activeStep,
}: Omit<Props, "handleActiveStep">) => {
  return (
    <div className="space-y-3">
      {STEPS.map((step, index) => (
        <div
          key={step.number}
          className={`flex items-center justify-between p-3 border transition-all duration-300 ${
            activeStep === index
              ? "border-background/30 bg-background/5"
              : "border-background/10 opacity-40"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-background/40">
              {step.number}
            </span>
            <span className="text-sm text-background">{step.title}</span>
          </div>

          {/* Status Dot */}
          <span
            className={`w-2 h-2 rounded-full ${
              activeStep === index
                ? "bg-green-400 animate-pulse"
                : "bg-background/20"
            }`}
          />
        </div>
      ))}
    </div>
  );
};
