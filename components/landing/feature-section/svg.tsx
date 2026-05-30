export function DeployVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <clipPath id="deployClip">
          <rect x="30" y="20" width="140" height="120" rx="4" />
        </clipPath>
      </defs>

      <rect
        x="30"
        y="20"
        width="140"
        height="120"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <g clipPath="url(#deployClip)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="40"
            y={35 + i * 16}
            width="120"
            height="10"
            rx="2"
            fill="currentColor"
            opacity="0.15"
          >
            <animate
              attributeName="opacity"
              values="0.15;0.8;0.15"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="width"
              values="20;120;20"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </g>

      <circle cx="100" cy="155" r="3" fill="currentColor" opacity="0.3">
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export function AIVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <circle cx="100" cy="80" r="12" fill="currentColor">
        <animate
          attributeName="r"
          values="12;14;12"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = i * 60 * (Math.PI / 180);
        const radius = 50;
        return (
          <g key={i}>
            <line
              x1="100"
              y1="80"
              x2={100 + Math.cos(angle) * radius}
              y2={80 + Math.sin(angle) * radius}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </line>

            <circle
              cx={100 + Math.cos(angle) * radius}
              cy={80 + Math.sin(angle) * radius}
              r="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                values="6;8;6"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}
    </svg>
  );
}

export function CollabVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <g>
        <rect
          x="30"
          y="50"
          width="50"
          height="60"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text
          x="55"
          y="85"
          textAnchor="middle"
          fontSize="20"
          fontFamily="monospace"
          fill="currentColor"
        >
          X
        </text>
      </g>

      <g>
        <rect
          x="120"
          y="50"
          width="50"
          height="60"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text
          x="145"
          y="85"
          textAnchor="middle"
          fontSize="20"
          fontFamily="monospace"
          fill="currentColor"
        >
          TG
        </text>
      </g>

      <line
        x1="80"
        y1="80"
        x2="120"
        y2="80"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-8"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  );
}

export function SecurityVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <path
        d="M 100 20 L 150 40 L 150 90 Q 150 130 100 145 Q 50 130 50 90 L 50 40 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <rect x="85" y="70" width="30" height="25" rx="3" fill="currentColor" />

      <path
        d="M 90 70 L 90 60 Q 90 50 100 50 Q 110 50 110 60 L 110 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}
