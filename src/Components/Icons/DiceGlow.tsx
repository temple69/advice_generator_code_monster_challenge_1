//Component for the dice icon with glow
const DiceGlow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="144"
      height="144"
      viewBox="0 0 64 144"
      fill="none"
    >
      <g filter="url(#filter0_d_0_80)">
        <circle cx="32" cy="32" r="32" fill="#53FFAA" />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 20H40C42.2081 20.0025 43.9975 21.7919 44 24V40C43.9975 42.2081 42.2081 43.9975 40 44H24C21.7919 43.9975 20.0025 42.2081 20 40V24C20.0025 21.7919 21.7919 20.0025 24 20ZM26 36.5C26 37.3284 26.6716 38 27.5 38C28.3284 38 29 37.3284 29 36.5C29 35.6716 28.3284 35 27.5 35C26.6716 35 26 35.6716 26 36.5ZM27.5 29C26.6716 29 26 28.3284 26 27.5C26 26.6716 26.6716 26 27.5 26C28.3284 26 29 26.6716 29 27.5C29 28.3284 28.3284 29 27.5 29ZM30.5 32C30.5 32.8284 31.1716 33.5 32 33.5C32.8284 33.5 33.5 32.8284 33.5 32C33.5 31.1716 32.8284 30.5 32 30.5C31.1716 30.5 30.5 31.1716 30.5 32ZM36.5 38C35.6716 38 35 37.3284 35 36.5C35 35.6716 35.6716 35 36.5 35C37.3284 35 38 35.6716 38 36.5C38 37.3284 37.3284 38 36.5 38ZM35 27.5C35 28.3284 35.6716 29 36.5 29C37.3284 29 38 28.3284 38 27.5C38 26.6716 37.3284 26 36.5 26C35.6716 26 35 26.6716 35 27.5Z"
        fill="#202733"
      />
      <defs>
        <filter
          id="filter0_d_0_80"
          x="0"
          y="0"
          width="144"
          height="144"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="20" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.327053 0 0 0 0 1 0 0 0 0 0.66593 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_80"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_80"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default DiceGlow;
