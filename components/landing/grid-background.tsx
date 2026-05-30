const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {[...Array(8)].map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute h-px bg-foreground/10"
          style={{
            top: `${12.5 * (i + 1)}%`,
            left: 0,
            right: 0,
          }}
        />
      ))}
      {[...Array(12)].map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute w-px bg-foreground/10"
          style={{
            left: `${8.33 * (i + 1)}%`,
            top: 0,
            bottom: 0,
          }}
        />
      ))}
    </div>
  );
};

export default GridBackground;
