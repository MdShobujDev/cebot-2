import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Chart() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <svg
      ref={ref}
      width="350"
      height="698"
      viewBox="0 0 406 698"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M373.582 697.474H1.6499C1.6499 521.294 315.208 405 373.582 231.791V697.474Z"
        fill="url(#paint0_radial_47_4168)"
      />
      <path
        d="M296.742 1.52637C600.944 324.799 1.6499 453.908 1.6499 697.474"
        stroke="url(#paint1_linear_47_4168)"
        stroke-width="2"
      />
      <g filter="url(#filter0_b_47_4168)">
        <rect
          x="335.186"
          y="188.73"
          width="70"
          height="70"
          rx="35"
          fill="white"
          fill-opacity="0.2"
        />
        <rect
          x="335.834"
          y="189.379"
          width="68.7038"
          height="68.7038"
          rx="34.3519"
          stroke="url(#paint2_linear_47_4168)"
          stroke-opacity="0.2"
          stroke-width="1.29615"
        />
      </g>
      <g clip-path="url(#clip0_47_4168)">
        <path
          d="M373.173 239.16C369.742 235.729 369.742 230.149 373.173 226.718C376.604 223.287 382.185 223.287 385.616 226.718C389.047 230.149 389.047 235.729 385.616 239.16C382.185 242.589 376.604 242.589 373.173 239.16ZM385.335 226.999C382.059 223.723 376.73 223.723 373.454 226.999C370.179 230.274 370.179 235.604 373.454 238.879C376.73 242.155 382.059 242.155 385.335 238.879C388.61 235.604 388.61 230.274 385.335 226.999Z"
          fill="white"
        />
        <path
          d="M373.454 226.999C374.976 225.477 376.944 224.67 378.941 224.564C379.179 222.043 378.334 219.438 376.407 217.51C372.976 214.078 367.396 214.081 363.965 217.51C360.534 220.941 360.534 226.521 363.965 229.952C365.891 231.878 368.497 232.724 371.017 232.486C371.126 230.486 371.932 228.521 373.454 226.999Z"
          fill="white"
        />
        <path
          d="M360.802 222.91C358.709 222.867 356.629 222.056 355.036 220.463C351.762 217.188 351.762 211.858 355.038 208.583C358.313 205.307 363.643 205.307 366.918 208.583C368.511 210.176 369.322 212.256 369.365 214.349C369.5 214.338 369.631 214.327 369.765 214.323C369.716 212.137 368.862 209.969 367.197 208.304C363.768 204.87 358.186 204.87 354.757 208.302C351.326 211.733 351.326 217.313 354.757 220.744C356.421 222.409 358.59 223.263 360.776 223.313C360.78 223.176 360.791 223.044 360.802 222.91Z"
          fill="white"
        />
        <path
          d="M378.768 225.611C377.099 225.751 375.469 226.458 374.191 227.736C372.914 229.014 372.209 230.644 372.066 232.313C373.657 231.967 375.171 231.185 376.405 229.95C377.642 228.718 378.423 227.202 378.768 225.611Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter1_b_47_4168)">
        <rect
          x="335.186"
          y="188.73"
          width="70"
          height="70"
          rx="35"
          fill="white"
          fill-opacity="0.2"
        />
        <rect
          x="335.834"
          y="189.379"
          width="68.7038"
          height="68.7038"
          rx="34.3519"
          stroke="url(#paint3_linear_47_4168)"
          stroke-opacity="0.2"
          stroke-width="1.29615"
        />
      </g>
      <g clip-path="url(#clip1_47_4168)">
        <path
          d="M373.173 239.16C369.742 235.729 369.742 230.149 373.173 226.718C376.604 223.287 382.185 223.287 385.616 226.718C389.047 230.149 389.047 235.729 385.616 239.16C382.185 242.589 376.604 242.589 373.173 239.16ZM385.335 226.999C382.059 223.723 376.73 223.723 373.454 226.999C370.179 230.274 370.179 235.604 373.454 238.879C376.73 242.155 382.059 242.155 385.335 238.879C388.61 235.604 388.61 230.274 385.335 226.999Z"
          fill="white"
        />
        <path
          d="M373.454 226.999C374.976 225.477 376.944 224.67 378.941 224.564C379.179 222.043 378.334 219.438 376.407 217.51C372.976 214.078 367.396 214.081 363.965 217.51C360.534 220.941 360.534 226.521 363.965 229.952C365.891 231.878 368.497 232.724 371.017 232.486C371.126 230.486 371.932 228.521 373.454 226.999Z"
          fill="white"
        />
        <path
          d="M360.802 222.91C358.709 222.867 356.629 222.056 355.036 220.463C351.762 217.188 351.762 211.858 355.038 208.583C358.313 205.307 363.643 205.307 366.918 208.583C368.511 210.176 369.322 212.256 369.365 214.349C369.5 214.338 369.631 214.327 369.765 214.323C369.716 212.137 368.862 209.969 367.197 208.304C363.768 204.87 358.186 204.87 354.757 208.302C351.326 211.733 351.326 217.313 354.757 220.744C356.421 222.409 358.59 223.263 360.776 223.313C360.78 223.176 360.791 223.044 360.802 222.91Z"
          fill="white"
        />
        <path
          d="M378.768 225.611C377.099 225.751 375.469 226.458 374.191 227.736C372.914 229.014 372.209 230.644 372.066 232.313C373.657 231.967 375.171 231.185 376.405 229.95C377.642 228.718 378.423 227.202 378.768 225.611Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter2_b_47_4168)">
        <rect
          x="1.6499"
          y="549.27"
          width="70"
          height="70"
          rx="35"
          fill="white"
          fill-opacity="0.2"
        />
        <rect
          x="2.29798"
          y="549.918"
          width="68.7038"
          height="68.7038"
          rx="34.3519"
          stroke="url(#paint4_linear_47_4168)"
          stroke-opacity="0.2"
          stroke-width="1.29615"
        />
      </g>
      <g clip-path="url(#clip2_47_4168)">
        <path
          d="M19.0522 566.267L18.6521 566.667L54.2466 602.272L54.6467 601.872L19.0522 566.267Z"
          fill="white"
        />
        <path
          d="M47.486 595.457H47.8367V573.083H25.4624V573.433L47.486 595.457Z"
          fill="white"
        />
        <path
          d="M25.4624 575.979V595.457H44.94L25.4624 575.979Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter3_b_47_4168)">
        <rect
          x="1.6499"
          y="549.27"
          width="70"
          height="70"
          rx="35"
          fill="white"
          fill-opacity="0.2"
        />
        <rect
          x="2.29798"
          y="549.918"
          width="68.7038"
          height="68.7038"
          rx="34.3519"
          stroke="url(#paint5_linear_47_4168)"
          stroke-opacity="0.2"
          stroke-width="1.29615"
        />
      </g>
      <g clip-path="url(#clip3_47_4168)">
        <path
          d="M19.0522 566.267L18.6521 566.667L54.2466 602.272L54.6467 601.872L19.0522 566.267Z"
          fill="white"
        />
        <path
          d="M47.486 595.457H47.8367V573.083H25.4624V573.433L47.486 595.457Z"
          fill="white"
        />
        <path
          d="M25.4624 575.979V595.457H44.94L25.4624 575.979Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter4_d_47_4168)">
        <circle cx="287.849" cy="354.5" r="5" fill="#3A47E1" />
        <circle
          cx="287.849"
          cy="354.5"
          r="5.75"
          stroke="#D4D9DE"
          stroke-width="1.5"
        />
      </g>
      <g filter="url(#filter5_d_47_4168)">
        <circle cx="178.5" cy="452.398" r="5" fill="#3A47E1" />
        <circle
          cx="178.5"
          cy="452.398"
          r="5.75"
          stroke="#D4D9DE"
          stroke-width="1.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_47_4168"
          x="309.263"
          y="162.807"
          width="121.846"
          height="121.846"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.9615" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_47_4168"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_47_4168"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_47_4168"
          x="309.263"
          y="162.807"
          width="121.846"
          height="121.846"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.9615" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_47_4168"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_47_4168"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_b_47_4168"
          x="-24.2731"
          y="523.347"
          width="121.846"
          height="121.846"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.9615" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_47_4168"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_47_4168"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_b_47_4168"
          x="-24.2731"
          y="523.347"
          width="121.846"
          height="121.846"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.9615" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_47_4168"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_47_4168"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_47_4168"
          x="278.349"
          y="345"
          width="19"
          height="19"
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
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.227451 0 0 0 0 0.278431 0 0 0 0 0.882353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_47_4168"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_47_4168"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d_47_4168"
          x="169"
          y="442.898"
          width="19"
          height="19"
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
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.227451 0 0 0 0 0.278431 0 0 0 0 0.882353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_47_4168"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_47_4168"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_47_4168"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.4548 265.501) rotate(50.3871) scale(579.396 639.07)"
        >
          <motion.stop
            initial={{
              opacity: 0,
              offset: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              offset: isInView ? 0.243509 : 0,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            offset="0.243509"
            stop-color="#3A47E1"
          />
          <motion.stop
            initial={{
              opacity: 0,
              offset: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              offset: isInView ? 0.720249 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            offset="0.720249"
            stop-color="#3A47E1"
            stop-opacity="0"
          />
          <motion.stop
            initial={{
              opacity: 0,
              offset: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              offset: isInView ? 1 : 0,
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
            offset="1"
            stop-color="#3A47E1"
            stop-opacity="0"
          />
        </radialGradient>
        <linearGradient
          id="paint1_linear_47_4168"
          x1="310.636"
          y1="1.52637"
          x2="20.3406"
          y2="729.597"
          gradientUnits="userSpaceOnUse"
        >
          <motion.stop
            initial={{
              opacity: 0,
              offset: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              offset: isInView ? 0.0415273 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            offset="0.0415273"
            stop-color="white"
            stop-opacity="0"
          />
          <motion.stop
            initial={{
              opacity: 0,
              offset: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              offset: isInView ? 0.494538 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            offset="0.494538"
            stop-color="white"
          />
          <motion.stop
            initial={{
              opacity: 0,
              offset: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              offset: isInView ? 1 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            offset="1"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="paint2_linear_47_4168"
          x1="370.186"
          y1="188.73"
          x2="370.186"
          y2="258.73"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3A47E1" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_47_4168"
          x1="370.186"
          y1="188.73"
          x2="370.186"
          y2="258.73"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3A47E1" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_47_4168"
          x1="36.6499"
          y1="549.27"
          x2="36.6499"
          y2="619.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3A47E1" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_47_4168"
          x1="36.6499"
          y1="549.27"
          x2="36.6499"
          y2="619.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3A47E1" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_47_4168">
          <rect
            width="36.0042"
            height="36.0042"
            fill="white"
            transform="translate(352.184 205.729)"
          />
        </clipPath>
        <clipPath id="clip1_47_4168">
          <rect
            width="36.0042"
            height="36.0042"
            fill="white"
            transform="translate(352.184 205.729)"
          />
        </clipPath>
        <clipPath id="clip2_47_4168">
          <rect
            width="36"
            height="36"
            fill="white"
            transform="translate(18.6499 566.27)"
          />
        </clipPath>
        <clipPath id="clip3_47_4168">
          <rect
            width="36"
            height="36"
            fill="white"
            transform="translate(18.6499 566.27)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
