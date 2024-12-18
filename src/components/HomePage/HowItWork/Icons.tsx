import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SVG_1({ height = "463" }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <svg
        ref={ref}
        width="451"
        height={height}
        viewBox="0 0 451 463"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.302246"
          y="0.0639648"
          width="450"
          height="462.79"
          rx="17.9754"
          fill="url(#paint0_radial_21_887)"
          fill-opacity="0.5"
        />
        <rect
          x="0.901427"
          y="0.663146"
          width="448.802"
          height="461.592"
          rx="17.3763"
          stroke="url(#paint1_linear_21_887)"
          stroke-opacity="0.15"
          stroke-width="1.19836"
        />
        <circle
          cx="225.302"
          cy="231.459"
          r="165.583"
          stroke="url(#paint2_linear_21_887)"
          stroke-opacity="0.2"
          stroke-width="1.19836"
        />
        <circle
          cx="225.302"
          cy="234.427"
          r="102.133"
          stroke="url(#paint3_linear_21_887)"
          stroke-opacity="0.2"
          stroke-width="1.19836"
        />
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            pathLength: isInView ? 1 : 0,
          }}
          transition={{
            duration: 2,
            ease: "linear",
          }}
          d="M98.4636 304.323H129.127C139.054 304.323 147.102 296.275 147.102 286.348V252.355C147.102 242.427 155.15 234.379 165.077 234.379H307.202C317.129 234.379 325.177 226.331 325.177 216.404V199.294C325.177 189.367 333.225 181.319 343.153 181.319H357.737"
          stroke="#E67EBE"
          stroke-width="1.19836"
        />
        <g filter="url(#filter0_b_21_887)">
          <rect
            x="352.14"
            y="152.93"
            width="47.9345"
            height="47.9345"
            rx="23.9672"
            fill="white"
            fill-opacity="0.2"
          />
          <rect
            x="352.62"
            y="153.41"
            width="46.9758"
            height="46.9758"
            rx="23.4879"
            stroke="url(#paint4_linear_21_887)"
            stroke-opacity="0.2"
            stroke-width="0.95869"
          />
        </g>
        <path
          d="M363.477 164.267L387.582 188.371H363.477V164.267Z"
          fill="url(#paint5_linear_21_887)"
        />
        <circle
          cx="378.542"
          cy="173.306"
          r="8.85829"
          stroke="url(#paint6_linear_21_887)"
          stroke-width="0.361563"
        />
        <g filter="url(#filter1_b_21_887)">
          <rect
            x="50.5295"
            y="280.355"
            width="47.9345"
            height="47.9345"
            rx="23.9672"
            fill="white"
            fill-opacity="0.2"
          />
          <rect
            x="51.0089"
            y="280.834"
            width="46.9758"
            height="46.9758"
            rx="23.4879"
            stroke="url(#paint7_linear_21_887)"
            stroke-opacity="0.2"
            stroke-width="0.95869"
          />
        </g>
        <path
          d="M84.8455 292.558C83.4607 291.173 81.0522 291.015 78.222 291.959C75.4016 292.899 72.2117 294.92 69.328 297.803C66.4444 300.687 64.4238 303.877 63.4836 306.697C62.5402 309.527 62.6979 311.936 64.0827 313.321C65.4675 314.705 67.876 314.863 70.7062 313.92C73.5266 312.98 76.7165 310.959 79.6002 308.075C82.4838 305.192 84.5044 302.002 85.4445 299.181C86.388 296.351 86.2303 293.943 84.8455 292.558Z"
          fill="url(#paint8_linear_21_887)"
          stroke="url(#paint9_linear_21_887)"
          stroke-width="0.309085"
        />
        <path
          d="M87.2383 295.325C85.8536 293.94 83.445 293.782 80.6148 294.726C77.7944 295.666 74.6045 297.686 71.7209 300.57C68.8372 303.454 66.8166 306.644 65.8765 309.464C64.9331 312.294 65.0907 314.703 66.4755 316.088C67.8603 317.472 70.2688 317.63 73.099 316.687C75.9195 315.746 79.1093 313.726 81.993 310.842C84.8766 307.959 86.8972 304.769 87.8374 301.948C88.7808 299.118 88.6231 296.709 87.2383 295.325Z"
          stroke="url(#paint10_linear_21_887)"
          stroke-width="0.309085"
        />
        <g filter="url(#filter2_b_21_887)">
          <rect
            x="189.302"
            y="198.427"
            width="72"
            height="72"
            rx="36"
            fill="white"
            fill-opacity="0.2"
          />
          <rect
            x="190.022"
            y="199.147"
            width="70.56"
            height="70.56"
            rx="35.28"
            stroke="url(#paint11_linear_21_887)"
            stroke-opacity="0.2"
            stroke-width="1.44"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M234.513 215.201C233.736 215.201 233.016 215.61 232.618 216.277L229.909 220.818C229.031 222.289 230.091 224.155 231.803 224.155L241.074 224.155C241.891 224.155 242.641 223.704 243.024 222.982L245.432 218.441C246.212 216.971 245.146 215.201 243.483 215.201L234.513 215.201ZM215.891 223.367C215.114 223.367 214.394 223.775 213.996 224.443L211.286 228.984C210.409 230.455 211.468 232.321 213.181 232.321L222.452 232.321C223.269 232.321 224.019 231.87 224.401 231.148L226.81 226.607C227.589 225.137 226.524 223.367 224.861 223.367L215.891 223.367ZM207.937 235.897C208.335 235.23 209.054 234.821 209.831 234.821L218.801 234.821C220.465 234.821 221.53 236.592 220.75 238.061L218.342 242.603C217.959 243.324 217.209 243.776 216.393 243.776L207.122 243.776C205.409 243.776 204.349 241.909 205.227 240.439L207.937 235.897ZM221.701 244.699C220.924 244.699 220.205 245.108 219.807 245.775L217.097 250.316C216.22 251.787 217.279 253.653 218.992 253.653L228.263 253.653C229.079 253.653 229.829 253.202 230.212 252.481L232.621 247.939C233.4 246.469 232.335 244.699 230.671 244.699L221.701 244.699Z"
          fill="url(#paint12_linear_21_887)"
        />
        <defs>
          <filter
            id="filter0_b_21_887"
            x="332.967"
            y="133.756"
            width="86.282"
            height="86.282"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="9.5869" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_21_887"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_21_887"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_b_21_887"
            x="31.3557"
            y="261.181"
            width="86.2822"
            height="86.2822"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="9.5869" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_21_887"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_21_887"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_b_21_887"
            x="160.502"
            y="169.627"
            width="129.6"
            height="129.6"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="14.4" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_21_887"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_21_887"
              result="shape"
            />
          </filter>
          <radialGradient
            id="paint0_radial_21_887"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(225.302 231.459) rotate(90) scale(199.497 193.984)"
          >
            <stop stop-color="#3A47E1" />
            <stop offset="1" stop-color="#020B13" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_21_887"
            x1="225.302"
            y1="0.0639648"
            x2="225.302"
            y2="462.854"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_21_887"
            x1="225.302"
            y1="65.2761"
            x2="225.302"
            y2="397.641"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3A47E1" />
            <stop offset="1" stop-color="#999999" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_21_887"
            x1="225.302"
            y1="131.695"
            x2="225.302"
            y2="337.159"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3A47E1" />
            <stop offset="1" stop-color="#999999" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_21_887"
            x1="376.108"
            y1="152.93"
            x2="376.108"
            y2="200.865"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3A47E1" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_21_887"
            x1="375.53"
            y1="164.267"
            x2="375.53"
            y2="193.4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_21_887"
            x1="378.542"
            y1="164.267"
            x2="378.542"
            y2="182.345"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_21_887"
            x1="74.4968"
            y1="280.355"
            x2="74.4968"
            y2="328.289"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3A47E1" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_21_887"
            x1="84.4707"
            y1="287.601"
            x2="93.0761"
            y2="301.122"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="0.927083" stop-color="#535353" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_21_887"
            x1="79.7094"
            y1="308.185"
            x2="69.2188"
            y2="297.694"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_21_887"
            x1="70.6934"
            y1="296.452"
            x2="86.1477"
            y2="316.233"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_21_887"
            x1="225.302"
            y1="198.427"
            x2="225.302"
            y2="270.427"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3A47E1" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_21_887"
            x1="225.302"
            y1="215.201"
            x2="225.302"
            y2="253.653"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
export function SVG_2({ height = "463" }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <svg
        ref={ref}
        width="451"
        height={height}
        viewBox="0 0 451 463"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_26_4275)">
          <rect
            x="0.302246"
            y="0.103027"
            width="450"
            height="462.79"
            rx="17.9754"
            fill="url(#paint0_radial_26_4275)"
            fill-opacity="0.5"
          />
          <rect
            x="-39.9824"
            y="56.1569"
            width="169.099"
            height="98.662"
            rx="8.83333"
            fill="url(#paint1_linear_26_4275)"
          />
          <rect
            x="-39.5408"
            y="56.5985"
            width="168.216"
            height="97.7786"
            rx="8.39167"
            stroke="url(#paint2_linear_26_4275)"
            stroke-opacity="0.5"
            stroke-width="0.883333"
          />
          <rect
            x="-39.9824"
            y="174.656"
            width="169.099"
            height="98.662"
            rx="8.83333"
            fill="#071A2A"
          />
          <rect
            x="-39.5408"
            y="175.097"
            width="168.216"
            height="97.7786"
            rx="8.39167"
            stroke="#373737"
            stroke-opacity="0.5"
            stroke-width="0.883333"
          />
          <rect
            x="316.427"
            y="174.656"
            width="169.099"
            height="98.662"
            rx="8.83333"
            fill="#071A2A"
          />
          <rect
            x="316.869"
            y="175.097"
            width="168.216"
            height="97.7786"
            rx="8.39167"
            stroke="#373737"
            stroke-opacity="0.5"
            stroke-width="0.883333"
          />
          <rect
            x="114.817"
            y="216.397"
            width="214.763"
            height="16.0896"
            rx="8.04478"
            stroke="url(#paint3_linear_26_4275)"
          />
          <rect
            x="138.986"
            y="174.656"
            width="169.099"
            height="98.662"
            rx="8.83333"
            fill="#071A2A"
          />
          <rect
            x="139.427"
            y="175.097"
            width="168.216"
            height="97.7786"
            rx="8.39167"
            stroke="#373737"
            stroke-opacity="0.5"
            stroke-width="0.883333"
          />
          <rect
            x="147.143"
            y="182.082"
            width="149.253"
            height="83.8097"
            rx="8.83333"
            fill="url(#paint4_linear_26_4275)"
          />
          <rect
            x="147.584"
            y="182.524"
            width="148.37"
            height="82.9264"
            rx="8.39167"
            stroke="url(#paint5_linear_26_4275)"
            stroke-opacity="0.5"
            stroke-width="0.883333"
          />
          <path
            d="M218.221 240.701V237.521C216.478 237.38 215.053 237.003 213.946 236.391C212.863 235.778 212.015 235.06 211.402 234.235C210.79 233.411 210.354 232.61 210.095 231.833C209.859 231.032 209.706 230.372 209.635 229.854C209.588 229.312 209.565 229.041 209.565 229.041H213.628C213.628 229.041 213.652 229.265 213.699 229.713C213.769 230.137 213.934 230.655 214.193 231.267C214.476 231.88 214.935 232.457 215.571 232.999C216.207 233.517 217.091 233.87 218.221 234.059V225.473L218.045 225.437C216.608 225.108 215.301 224.672 214.123 224.13C212.969 223.588 212.038 222.846 211.331 221.904C210.648 220.938 210.307 219.702 210.307 218.194C210.307 216.71 210.672 215.438 211.402 214.378C212.132 213.318 213.098 212.482 214.299 211.869C215.501 211.257 216.808 210.88 218.221 210.739V207.629H221.013V210.809C222.52 210.998 223.757 211.375 224.723 211.94C225.689 212.505 226.442 213.153 226.984 213.883C227.549 214.614 227.962 215.332 228.221 216.039C228.48 216.722 228.645 217.299 228.715 217.77C228.786 218.218 228.821 218.441 228.821 218.441H224.793C224.793 218.441 224.758 218.265 224.687 217.911C224.64 217.558 224.499 217.134 224.263 216.639C224.028 216.145 223.651 215.674 223.133 215.226C222.615 214.778 221.908 214.437 221.013 214.201V222.293L221.331 222.363C222.226 222.575 223.133 222.834 224.051 223.141C224.97 223.447 225.806 223.871 226.56 224.413C227.337 224.931 227.962 225.626 228.433 226.497C228.904 227.345 229.139 228.441 229.139 229.783C229.139 231.173 228.786 232.422 228.079 233.529C227.396 234.636 226.442 235.543 225.217 236.249C223.993 236.932 222.591 237.356 221.013 237.521V240.701H218.221ZM214.264 218.088C214.264 219.007 214.582 219.749 215.218 220.314C215.854 220.856 216.855 221.303 218.221 221.657V214.095C216.997 214.284 216.031 214.755 215.324 215.509C214.617 216.239 214.264 217.099 214.264 218.088ZM225.147 229.819C225.147 228.735 224.782 227.922 224.051 227.381C223.321 226.839 222.308 226.403 221.013 226.073V234.059C222.214 233.847 223.203 233.364 223.981 232.61C224.758 231.856 225.147 230.926 225.147 229.819Z"
            fill="white"
          />
          <rect
            x="-39.9824"
            y="293.155"
            width="169.099"
            height="98.662"
            rx="8.83333"
            fill="url(#paint6_linear_26_4275)"
          />
          <rect
            x="-39.5408"
            y="293.596"
            width="168.216"
            height="97.7786"
            rx="8.39167"
            stroke="url(#paint7_linear_26_4275)"
            stroke-opacity="0.5"
            stroke-width="0.883333"
          />
          <rect
            x="316.427"
            y="56.1569"
            width="169.099"
            height="98.662"
            rx="8.83333"
            fill="url(#paint8_linear_26_4275)"
          />
          <rect
            x="316.869"
            y="56.5985"
            width="168.216"
            height="97.7786"
            rx="8.39167"
            stroke="url(#paint9_linear_26_4275)"
            stroke-opacity="0.5"
            stroke-width="0.883333"
          />
          <rect
            x="316.427"
            y="293.155"
            width="169.099"
            height="98.662"
            rx="8.83333"
            fill="url(#paint10_linear_26_4275)"
          />
          <rect
            x="316.869"
            y="293.597"
            width="168.216"
            height="97.7786"
            rx="8.39167"
            stroke="url(#paint11_linear_26_4275)"
            stroke-opacity="0.5"
            stroke-width="0.883333"
          />
          <motion.path
            initial={{
              x: -50,
              opacity: 0,
            }}
            animate={{
              x: isInView ? 0 : -50,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              stiffness: 150,
            }}
            d="M268.932 194.574H286.144"
            stroke="white"
            stroke-width="5.3"
            stroke-linecap="round"
          />
          <motion.path
            initial={{
              x: 50,
              opacity: 0,
            }}
            animate={{
              x: isInView ? 0 : 50,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              stiffness: 150,
            }}
            d="M159.795 254.31H177.007"
            stroke="white"
            stroke-width="5.3"
            stroke-linecap="round"
          />
          <motion.path
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              pathLength: isInView ? 1 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M112.509 220.989C115.481 222.905 115.432 227.269 112.416 229.116L50.1801 267.256C48.6057 268.221 46.6174 268.197 45.0666 267.194L-13.9415 229.057C-16.827 227.192 -16.876 222.988 -14.0348 221.056L44.976 180.935C46.5694 179.852 48.6561 179.826 50.2756 180.87L112.509 220.989Z"
            stroke="url(#paint12_linear_26_4275)"
          />
          <motion.path
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              pathLength: isInView ? 1 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M459.548 220.989C462.52 222.905 462.47 227.269 459.455 229.116L397.219 267.256C395.644 268.221 393.656 268.197 392.105 267.194L333.097 229.057C330.212 227.192 330.163 222.988 333.004 221.056L392.015 180.935C393.608 179.852 395.695 179.826 397.314 180.87L459.548 220.989Z"
            stroke="url(#paint13_linear_26_4275)"
          />
          <g filter="url(#filter0_d_26_4275)">
            <circle cx="114.317" cy="225.108" r="3.245" fill="#E67EBE" />
            <circle cx="114.317" cy="225.108" r="3.745" stroke="#5B6772" />
          </g>
          <g filter="url(#filter1_d_26_4275)">
            <circle cx="330.08" cy="225.108" r="3.245" fill="#E67EBE" />
            <circle cx="330.08" cy="225.108" r="3.745" stroke="#5B6772" />
          </g>
        </g>
        <rect
          x="0.802246"
          y="0.603027"
          width="449"
          height="461.79"
          rx="14.5"
          stroke="url(#paint14_linear_26_4275)"
          stroke-opacity="0.15"
        />
        <defs>
          <filter
            id="filter0_d_26_4275"
            x="107.072"
            y="217.863"
            width="14.49"
            height="14.49"
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
              values="0 0 0 0 0.901961 0 0 0 0 0.494118 0 0 0 0 0.745098 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_26_4275"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_26_4275"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_26_4275"
            x="322.835"
            y="217.863"
            width="14.49"
            height="14.49"
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
              values="0 0 0 0 0.901961 0 0 0 0 0.494118 0 0 0 0 0.745098 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_26_4275"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_26_4275"
              result="shape"
            />
          </filter>
          <radialGradient
            id="paint0_radial_26_4275"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(225.302 231.498) rotate(90) scale(199.497 193.984)"
          >
            <stop stop-color="#3A47E1" />
            <stop offset="1" stop-color="#020B13" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_26_4275"
            x1="44.5671"
            y1="56.1569"
            x2="44.5671"
            y2="154.819"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#030C14" />
            <stop offset="1" stop-color="#071A2A" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_26_4275"
            x1="44.5671"
            y1="56.1569"
            x2="44.5671"
            y2="154.819"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#373737" stop-opacity="0" />
            <stop offset="1" stop-color="#323232" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_26_4275"
            x1="225.675"
            y1="213.608"
            x2="224.203"
            y2="244.559"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.6" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_26_4275"
            x1="221.769"
            y1="182.082"
            x2="221.769"
            y2="265.892"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4459CD" />
            <stop offset="1" stop-color="#222D67" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_26_4275"
            x1="221.769"
            y1="182.082"
            x2="221.769"
            y2="265.892"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8A98E4" />
            <stop offset="1" stop-color="#4C547E" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_26_4275"
            x1="44.5671"
            y1="293.155"
            x2="44.5671"
            y2="391.817"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#071A2A" />
            <stop offset="1" stop-color="#030C14" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_26_4275"
            x1="44.5671"
            y1="293.155"
            x2="44.5671"
            y2="391.817"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#071A2A" />
            <stop offset="1" stop-color="#373737" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_26_4275"
            x1="400.977"
            y1="56.1569"
            x2="400.977"
            y2="154.819"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#030C14" />
            <stop offset="1" stop-color="#071A2A" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_26_4275"
            x1="400.977"
            y1="56.1569"
            x2="400.977"
            y2="154.819"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#373737" stop-opacity="0" />
            <stop offset="1" stop-color="#4F4F4F" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_26_4275"
            x1="400.977"
            y1="293.155"
            x2="400.977"
            y2="391.817"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#071A2A" />
            <stop offset="1" stop-color="#030C14" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_26_4275"
            x1="400.977"
            y1="293.155"
            x2="400.977"
            y2="391.817"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#071A2A" />
            <stop offset="1" stop-color="#373737" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_26_4275"
            x1="92.7299"
            y1="172.651"
            x2="92.7299"
            y2="277.587"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.6" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint13_linear_26_4275"
            x1="439.769"
            y1="172.651"
            x2="439.769"
            y2="277.587"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.6" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint14_linear_26_4275"
            x1="225.302"
            y1="0.103027"
            x2="225.302"
            y2="462.893"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
          <clipPath id="clip0_26_4275">
            <rect
              x="0.302246"
              y="0.103027"
              width="450"
              height="462.79"
              rx="15"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
export function SVG_3({ height = "463" }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <svg
        ref={ref}
        width="451"
        height={height}
        viewBox="0 0 451 463"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_26_4479)">
          <rect
            x="0.302246"
            y="0.103027"
            width="450"
            height="462.79"
            rx="17.9754"
            fill="url(#paint0_radial_26_4479)"
            fill-opacity="0.5"
          />
          <g opacity="0.3">
            <line
              x1="60.1"
              y1="-66.245"
              x2="60.1"
              y2="329.245"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="126.1"
              y1="-66.245"
              x2="126.1"
              y2="329.245"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="192.1"
              y1="-66.245"
              x2="192.1"
              y2="329.245"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="258.1"
              y1="-66.245"
              x2="258.1"
              y2="329.245"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="324.1"
              y1="-66.245"
              x2="324.1"
              y2="329.245"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="390.1"
              y1="-66.245"
              x2="390.1"
              y2="329.245"
              stroke="white"
              stroke-width="0.2"
            />
          </g>
          <g opacity="0.3">
            <line
              x1="449.941"
              y1="65.0999"
              x2="0.663208"
              y2="65.0999"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="449.941"
              y1="131.1"
              x2="0.663208"
              y2="131.1"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="449.941"
              y1="197.1"
              x2="0.663208"
              y2="197.1"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="449.941"
              y1="263.1"
              x2="0.663208"
              y2="263.1"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="449.941"
              y1="329.1"
              x2="0.663208"
              y2="329.1"
              stroke="white"
              stroke-width="0.2"
            />
          </g>
          <g opacity="0.3">
            <line
              x1="60.0972"
              y1="329.269"
              x2="8.92675"
              y2="539.247"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="126.099"
              y1="329.262"
              x2="89.0768"
              y2="542.661"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="192.1"
              y1="329.008"
              x2="175.659"
              y2="542.651"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="258.1"
              y1="329.407"
              x2="268.627"
              y2="541.158"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="324.099"
              y1="328.934"
              x2="349.834"
              y2="541.632"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="390.098"
              y1="329.167"
              x2="431.465"
              y2="539.384"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="449.941"
              y1="369.272"
              x2="0.663208"
              y2="369.272"
              stroke="white"
              stroke-width="0.2"
            />
            <line
              x1="449.941"
              y1="427.584"
              x2="0.663208"
              y2="427.584"
              stroke="white"
              stroke-width="0.2"
            />
          </g>
          <motion.line
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              pathLength: isInView ? 1 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x1="126.246"
            y1="329.288"
            x2="102.825"
            y2="462.915"
            stroke="url(#paint1_linear_26_4479)"
            stroke-width="0.5"
          />
          <motion.line
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              pathLength: isInView ? 1 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x1="258.25"
            y1="328.988"
            x2="264.74"
            y2="463.001"
            stroke="url(#paint2_linear_26_4479)"
            stroke-width="0.5"
          />
          <motion.path
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              pathLength: isInView ? 1 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M126.196 66.283V197.285H59.7683"
            stroke="url(#paint3_linear_26_4479)"
          />
          <motion.path
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              pathLength: isInView ? 1 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M323.572 0.781982V131.784H390"
            stroke="url(#paint4_linear_26_4479)"
          />
          <motion.path
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              pathLength: isInView ? 1 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M73.0137 253.666C73.0137 250.905 75.2522 248.666 78.0137 248.666H107.973C110.734 248.666 112.973 250.905 112.973 253.666V328.946H73.0137V253.666Z"
            fill="#4459CD"
          />
          <motion.path
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              pathLength: isInView ? 1 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M337.631 253.666C337.631 250.905 339.87 248.666 342.631 248.666H372.59C375.352 248.666 377.59 250.905 377.59 253.666V328.946H337.631V253.666Z"
            fill="#4459CD"
          />
          <motion.path
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              pathLength: isInView ? 1 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M138.415 202C138.415 199.238 140.654 197 143.415 197H173.374C176.136 197 178.374 199.238 178.374 202V328.946H138.415V202Z"
            fill="#4459CD"
          />
          <motion.path
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              pathLength: isInView ? 1 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M205.323 168.474C205.323 165.712 207.561 163.474 210.323 163.474H240.282C243.043 163.474 245.282 165.712 245.282 168.474V328.946H205.323V168.474Z"
            fill="#4459CD"
          />
          <rect
            width="39.9592"
            height="58.777"
            transform="matrix(1 0 0 -1 138.415 328.946)"
            fill="url(#paint5_linear_26_4479)"
          />
          <motion.path
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              pathLength: isInView ? 1 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M270.724 182.077C270.724 179.315 272.962 177.077 275.724 177.077H305.683C308.445 177.077 310.683 179.315 310.683 182.077V328.946H270.724V182.077Z"
            fill="#4459CD"
          />
          <rect
            width="39.9592"
            height="80.2802"
            transform="matrix(1 0 0 -1 270.724 328.946)"
            fill="url(#paint6_linear_26_4479)"
          />
          <rect
            width="39.9592"
            height="98.7526"
            transform="matrix(1 0 0 -1 205.323 328.946)"
            fill="url(#paint7_linear_26_4479)"
          />
          <g filter="url(#filter0_f_26_4479)">
            <ellipse
              cx="219.844"
              cy="329.412"
              rx="230.458"
              ry="21.4683"
              fill="url(#paint8_radial_26_4479)"
            />
          </g>
        </g>
        <rect
          x="0.802246"
          y="0.603027"
          width="449"
          height="461.79"
          rx="14.5"
          stroke="url(#paint9_linear_26_4479)"
          stroke-opacity="0.15"
        />
        <defs>
          <filter
            id="filter0_f_26_4479"
            x="-18.6143"
            y="299.944"
            width="476.917"
            height="58.9365"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="4"
              result="effect1_foregroundBlur_26_4479"
            />
          </filter>
          <radialGradient
            id="paint0_radial_26_4479"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(225.302 231.498) rotate(90) scale(199.497 193.984)"
          >
            <stop stop-color="#3A47E1" />
            <stop offset="1" stop-color="#020B13" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_26_4479"
            x1="126"
            y1="329.245"
            x2="102.626"
            y2="464.033"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_26_4479"
            x1="258"
            y1="329"
            x2="264.786"
            y2="464.123"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.47" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_26_4479"
            x1="123.871"
            y1="66.283"
            x2="59.7683"
            y2="197.285"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0" />
            <stop offset="0.567504" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_26_4479"
            x1="325.897"
            y1="0.781983"
            x2="390"
            y2="131.784"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0" />
            <stop offset="0.567504" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_26_4479"
            x1="19.9796"
            y1="58.777"
            x2="19.9796"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#071A2A" stop-opacity="0" />
            <stop offset="1" stop-color="#071A2A" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_26_4479"
            x1="19.9796"
            y1="80.2802"
            x2="19.9796"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#071A2A" stop-opacity="0" />
            <stop offset="1" stop-color="#071A2A" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_26_4479"
            x1="19.9796"
            y1="98.7526"
            x2="19.9796"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8D9FFF" stop-opacity="0" />
            <stop offset="1" stop-color="#8D9FFF" />
          </linearGradient>
          <radialGradient
            id="paint8_radial_26_4479"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(219.844 329.412) rotate(90) scale(21.4683 230.458)"
          >
            <stop stop-color="#8D9FFF" />
            <stop offset="1" stop-color="#8D9FFF" stop-opacity="0" />
          </radialGradient>
          <linearGradient
            id="paint9_linear_26_4479"
            x1="225.302"
            y1="0.103027"
            x2="225.302"
            y2="462.893"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
          <clipPath id="clip0_26_4479">
            <rect
              x="0.302246"
              y="0.103027"
              width="450"
              height="462.79"
              rx="15"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
export function SVG_4({ height = "463" }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <svg
        ref={ref}
        width="451"
        height={height}
        viewBox="0 0 451 463"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_26_4454)">
          <rect
            x="0.302246"
            y="0.103027"
            width="450"
            height="462.79"
            rx="17.9754"
            fill="url(#paint0_radial_26_4454)"
            fill-opacity="0.5"
          />
          <circle
            cx="225.302"
            cy="231.459"
            r="165.583"
            stroke="url(#paint1_linear_26_4454)"
            stroke-opacity="0.2"
            stroke-width="1.19836"
          />
          <circle
            cx="225.302"
            cy="234.427"
            r="102.133"
            stroke="url(#paint2_linear_26_4454)"
            stroke-opacity="0.2"
            stroke-width="1.19836"
          />
          <motion.path
            initial={{
              opacity: 0,
              x: -10,
              scale: 1.05,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : -10,
              scale: isInView ? 1 : 1.05,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              duration: 0.2,
            }}
            d="M199.985 208.163C201.748 204.866 205.609 202.259 209.312 201.866L259.442 196.547L267.471 195.154C270.222 194.677 272.548 195.435 273.653 197.168L277.752 203.595C278.568 204.876 278.645 206.58 277.967 208.37L255.42 267.897C253.876 271.972 248.946 275.33 244.587 275.275L180.591 274.463C178.618 274.438 177.026 273.7 176.148 272.405L171.931 266.186C170.885 264.644 170.955 262.468 172.123 260.284L199.985 208.163Z"
            fill="#636BCA"
          />
          <motion.rect
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              duration: 0.2,
            }}
            width="78.8725"
            height="78.8725"
            rx="7.71373"
            transform="matrix(0.999969 -0.00789543 -0.374131 0.927376 196.806 193.412)"
            fill="url(#paint3_radial_26_4454)"
          />
          <g filter="url(#filter0_d_26_4454)">
            <motion.path
              initial={{
                opacity: 0,
                x: 10,
              }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 10,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                duration: 0.2,
                delay: 0.3,
              }}
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M232.02 203.888C231.02 203.888 230.093 204.414 229.58 205.273L226.09 211.123C224.96 213.017 226.325 215.42 228.53 215.42L240.471 215.42C241.523 215.42 242.489 214.839 242.981 213.91L246.084 208.061C247.087 206.168 245.715 203.888 243.573 203.888L232.02 203.888ZM208.035 214.405C207.034 214.405 206.108 214.931 205.595 215.79L202.105 221.64C200.975 223.534 202.34 225.937 204.545 225.937L216.486 225.937C217.538 225.937 218.504 225.356 218.996 224.427L222.099 218.577C223.102 216.685 221.73 214.405 219.588 214.405L208.035 214.405ZM197.791 230.543C198.304 229.684 199.23 229.158 200.231 229.158L211.784 229.158C213.926 229.158 215.298 231.438 214.295 233.331L211.192 239.18C210.7 240.109 209.734 240.69 208.682 240.69L196.741 240.69C194.536 240.69 193.171 238.287 194.301 236.393L197.791 230.543ZM215.519 241.879C214.519 241.879 213.592 242.406 213.079 243.265L209.589 249.114C208.459 251.009 209.824 253.412 212.029 253.412L223.97 253.412C225.022 253.412 225.988 252.831 226.48 251.902L229.583 246.052C230.586 244.16 229.215 241.879 227.072 241.879L215.519 241.879Z"
              fill="#DBDEFF"
            />
          </g>
        </g>
        <rect
          x="0.802246"
          y="0.603027"
          width="449"
          height="461.79"
          rx="14.5"
          stroke="url(#paint4_linear_26_4454)"
          stroke-opacity="0.15"
        />
        <defs>
          <filter
            id="filter0_d_26_4454"
            x="193.895"
            y="203.888"
            width="52.9092"
            height="50.6812"
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
            <feOffset dx="0.385687" dy="1.15706" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.533333 0 0 0 0 0.560784 0 0 0 0 0.929412 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_26_4454"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_26_4454"
              result="shape"
            />
          </filter>
          <radialGradient
            id="paint0_radial_26_4454"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(225.302 231.498) rotate(90) scale(199.497 193.984)"
          >
            <stop stop-color="#3A47E1" />
            <stop offset="1" stop-color="#020B13" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_26_4454"
            x1="225.302"
            y1="65.2761"
            x2="225.302"
            y2="397.641"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3A47E1" />
            <stop offset="1" stop-color="#999999" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_26_4454"
            x1="225.302"
            y1="131.695"
            x2="225.302"
            y2="337.159"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3A47E1" />
            <stop offset="1" stop-color="#999999" stop-opacity="0" />
          </linearGradient>
          <radialGradient
            id="paint3_radial_26_4454"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(39.4362 39.4362) rotate(90) scale(47.433)"
          >
            <stop stop-color="#3A47E1" />
            <stop offset="1" stop-color="#979EEE" />
          </radialGradient>
          <linearGradient
            id="paint4_linear_26_4454"
            x1="225.302"
            y1="0.103027"
            x2="225.302"
            y2="462.893"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
          <clipPath id="clip0_26_4454">
            <rect
              x="0.302246"
              y="0.103027"
              width="450"
              height="462.79"
              rx="15"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
