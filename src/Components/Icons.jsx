import React from "react";

export default function FormIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M4 7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H16C17.8856 3 18.8284 3 19.4142 3.58579C20 4.17157 20 5.11438 20 7V15C20 17.8284 20 19.2426 19.1213 20.1213C18.2426 21 16.8284 21 14 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V7Z"
          stroke="#33363F"
          strokeWidth="2"
        ></path>
        <path
          d="M15 18L15 21M9 18L9 21"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M9 8L15 8"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M9 12L15 12"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
        ></path>
      </g>
    </svg>
  );
}

export function DashboardIcon({ className }) {
  return (
    <svg
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="1"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
        ></rect>{" "}
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="1"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
        ></rect>{" "}
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="1"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
        ></rect>{" "}
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          rx="1"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
        ></rect>{" "}
      </g>
    </svg>
  );
}

export function SearchIcon({ className }) {
  return (
    <svg
      focusable="false"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className}`}
    >
      <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
      <path d="M0,0h24v24H0V0z" fill="none"></path>
    </svg>
  );
}

export function GroupUserIcon({ className, fill }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M3 19H1V18C1 16.1362 2.27477 14.57 4 14.126M6 10.8293C4.83481 10.4175 4 9.30623 4 8.00001C4 6.69379 4.83481 5.58255 6 5.17072M21 19H23V18C23 16.1362 21.7252 14.57 20 14.126M18 5.17072C19.1652 5.58255 20 6.69379 20 8.00001C20 9.30623 19.1652 10.4175 18 10.8293M10 14H14C16.2091 14 18 15.7909 18 18V19H6V18C6 15.7909 7.79086 14 10 14ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
}

export function CalIcon({ className, fill }) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="#75ff85"
      stroke="#75ff85"
      className={`w-5 h-5 ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <rect
          fill="none"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="32"
          x="48"
          y="80"
          width="416"
          height="384"
          rx="48"
        ></rect>
        <line
          fill="none"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="32"
          strokeLinecap="round"
          x1="128"
          y1="48"
          x2="128"
          y2="80"
        ></line>
        <line
          fill="none"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="32"
          strokeLinecap="round"
          x1="384"
          y1="48"
          x2="384"
          y2="80"
        ></line>
        <rect
          fill="none"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="32"
          strokeLinecap="round"
          x="112"
          y="224"
          width="96"
          height="96"
          rx="13"
        ></rect>
        <line
          fill="none"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="32"
          strokeLinecap="round"
          x1="464"
          y1="160"
          x2="48"
          y2="160"
        ></line>
      </g>
    </svg>
  );
}

export function BankIcon({ className, fill }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12.37 2.15009L21.37 5.75006C21.72 5.89006 22 6.31006 22 6.68006V10.0001C22 10.5501 21.55 11.0001 21 11.0001H3C2.45 11.0001 2 10.5501 2 10.0001V6.68006C2 6.31006 2.28 5.89006 2.63 5.75006L11.63 2.15009C11.83 2.07009 12.17 2.07009 12.37 2.15009Z"
          stroke={fill ? "#ee113d" : "#fff"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M22 22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19V22Z"
          stroke={fill ? "#ee113d" : "#fff"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M4 18V11"
          stroke={fill ? fill : "#fff"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M8 18V11"
          stroke={fill ? fill : "#fff"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M12 18V11"
          stroke={fill ? fill : "#fff"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M16 18V11"
          stroke={fill ? fill : "#fff"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M20 18V11"
          stroke={fill ? fill : "#fff"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M1 22H23"
          stroke={fill ? fill : "#fff"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
          stroke={fill ? fill : "#fff"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}

export function CashIcon({ className, fill }) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlnsxketch="http://www.bohemiancoding.com/sketch/ns"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 38"
      enableBackground="new 0 0 64 38"
      xmlSpace="preserve"
      fill="#000000"
      className={`w-5 h-5 ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>Cash-dollar</title> <desc>Created with Sketch.</desc>{" "}
        <g id="Page-1" sketchtype="MSPage">
          {" "}
          <g
            id="Cash-dollar"
            transform="translate(1.000000, 1.000000)"
            sketchtype="MSLayerGroup"
          >
            {" "}
            <path
              id="Shape"
              sketchtype="MSShapeGroup"
              fill="none"
              stroke={fill ? fill : "#000000"}
              strokeWidth="2"
              d="M60,36c1.1,0,2-0.9,2-2V2 c0-1.1-0.9-2-2-2H2C0.9,0,0,0.9,0,2v32c0,1.1,0.9,2,2,2H60L60,36z"
            ></path>{" "}
            <path
              id="Shape_1_"
              sketchtype="MSShapeGroup"
              fill="none"
              stroke={fill ? fill : "#000000"}
              strokeWidth="2"
              d="M5,4h20.9"
            ></path>{" "}
            <path
              id="Shape_2_"
              sketchtype="MSShapeGroup"
              fill="none"
              stroke={fill ? fill : "#000000"}
              strokeWidth="2"
              d="M5,32h20.9"
            ></path>{" "}
            <path
              id="Shape_3_"
              sketchtype="MSShapeGroup"
              fill="none"
              stroke={fill ? fill : "#000000"}
              strokeWidth="2"
              d="M36.2,4H57"
            ></path>{" "}
            <path
              id="Shape_4_"
              sketchtype="MSShapeGroup"
              fill="none"
              stroke={fill ? fill : "#000000"}
              strokeWidth="2"
              d="M36.2,32H57"
            ></path>{" "}
            <circle
              id="Oval"
              sketchtype="MSShapeGroup"
              fill="none"
              stroke={fill ? fill : "#000000"}
              strokeWidth="2"
              cx="31"
              cy="18"
              r="15"
            >
              {" "}
            </circle>{" "}
            <path
              id="Shape_5_"
              sketchtype="MSShapeGroup"
              fill="none"
              stroke={fill ? fill : "#000000"}
              strokeWidth="2"
              d="M27.1,22.4c0,2,1.8,3.6,4,3.6 s4-1.6,4-3.6c0-2.9-4-4.4-4-4.4s-4-1.5-4-4.4c0-2,1.8-3.6,4-3.6s4,1.6,4,3.6"
            ></path>{" "}
            <path
              id="Shape_6_"
              sketchtype="MSShapeGroup"
              fill="none"
              stroke={fill ? fill : "#000000"}
              strokeWidth="2"
              d="M31.1,6.1V30"
            ></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

export function MailIcon({ className }) {
  return (
    <svg
      fill="#33363F"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g opacity="0.2">
          <path d="M88,134.87236,224.11223,36.56908l.00168-.00367a7.87244,7.87244,0,0,0-6.22314-.15014L33.33393,108.91975a8,8,0,0,0,1.35629,15.29065Z"></path>
        </g>
        <g opacity="0.2">
          <path d="M132.90708,174.39059l-31.25023,31.25023A8,8,0,0,1,88,199.984v-65.1116Z"></path>
        </g>
        <path d="M231.25586,31.73635a15.9634,15.9634,0,0,0-16.29-2.76758L30.40869,101.47365a15.99988,15.99988,0,0,0,2.7124,30.58106L80,141.43069V199.9844a15.99415,15.99415,0,0,0,27.31348,11.31347L133.25684,185.355l39.376,34.65088a15.86863,15.86863,0,0,0,10.51709,4.00293,16.15674,16.15674,0,0,0,4.96338-.78711,15.86491,15.86491,0,0,0,10.68457-11.65332L236.41162,47.43557A15.96073,15.96073,0,0,0,231.25586,31.73635ZM86.14648,126.34279l-49.88574-9.977L175.94238,61.49026ZM96,199.97658V152.56887l25.21973,22.1936Zm87.20215,8.01758L100.81006,135.4883l118.64453-85.687Z"></path>
      </g>
    </svg>
  );
}

export function SettingIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}

export function LeftArrowHead({ className }) {
  return (
    <svg
      fill="#292D32"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 31.418 31.418"
      xmlSpace="preserve"
      className={`w-2 h-2 ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path d="M26.585,3v25.418c0,1.155-0.664,2.208-1.707,2.707c-0.412,0.194-0.854,0.293-1.293,0.293c-0.672,0-1.34-0.228-1.883-0.665 L5.949,18.044c-0.706-0.569-1.116-1.428-1.116-2.335c0-0.907,0.41-1.766,1.116-2.335L21.703,0.665 c0.899-0.726,2.135-0.868,3.178-0.372C25.921,0.792,26.585,1.844,26.585,3z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

export function AboutIcon({ className }) {
  return (
    <svg
      fill="#33363F"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title></title>
        <g>
          <path d="M66,84H54V42a5.9966,5.9966,0,0,0-6-6H36a6,6,0,0,0,0,12h6V84H30a6,6,0,0,0,0,12H66a6,6,0,0,0,0-12Z"></path>
          <path d="M48,24A12,12,0,1,0,36,12,12.0119,12.0119,0,0,0,48,24Z"></path>
        </g>
      </g>
    </svg>
  );
}

export function ParentsIcon({ className }) {
  return (
    <svg
      fill="#33363F"
      viewBox="-1 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M7.181 15.129a1.81 1.81 0 0 0 .223.872H1.85a1.27 1.27 0 0 1-1.267-1.267v-1.9A3.176 3.176 0 0 1 3.75 9.667h5.478a3.177 3.177 0 0 0 .557 1.067 3.135 3.135 0 0 0-2.604 3.086zM6.6 8.717a3.236 3.236 0 1 1 3.236-3.236A3.236 3.236 0 0 1 6.6 8.717zm9.817 6.412a.875.875 0 0 1-.872.872H9.003a.875.875 0 0 1-.872-.872V13.82a2.187 2.187 0 0 1 2.18-2.18h3.925a2.187 2.187 0 0 1 2.18 2.18zm-1.915-6.372a2.228 2.228 0 1 1-2.228-2.228 2.228 2.228 0 0 1 2.228 2.228z"></path>
      </g>
    </svg>
  );
}

export function BooksIcon({ className }) {
  return (
    <svg
      fill="#33363F"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>books</title>{" "}
        <path d="M30.156 26.492l-6.211-23.184c-0.327-1.183-1.393-2.037-2.659-2.037-0.252 0-0.495 0.034-0.727 0.097l0.019-0.004-2.897 0.776c-0.325 0.094-0.609 0.236-0.86 0.42l0.008-0.005c-0.49-0.787-1.349-1.303-2.33-1.306h-2.998c-0.789 0.001-1.5 0.337-1.998 0.873l-0.002 0.002c-0.5-0.537-1.211-0.873-2-0.874h-3c-1.518 0.002-2.748 1.232-2.75 2.75v24c0.002 1.518 1.232 2.748 2.75 2.75h3c0.789-0.002 1.5-0.337 1.998-0.873l0.002-0.002c0.5 0.538 1.211 0.873 2 0.875h2.998c1.518-0.002 2.748-1.232 2.75-2.75v-16.848l4.699 17.54c0.327 1.182 1.392 2.035 2.656 2.037h0c0.001 0 0.003 0 0.005 0 0.251 0 0.494-0.034 0.725-0.098l-0.019 0.005 2.898-0.775c1.182-0.326 2.036-1.392 2.036-2.657 0-0.252-0.034-0.497-0.098-0.729l0.005 0.019zM18.415 9.708l5.31-1.423 3.753 14.007-5.311 1.422zM18.068 3.59l2.896-0.776c0.097-0.027 0.209-0.043 0.325-0.043 0.575 0 1.059 0.389 1.204 0.918l0.002 0.009 0.841 3.139-5.311 1.423-0.778-2.905v-1.055c0.153-0.347 0.449-0.607 0.812-0.708l0.009-0.002zM11.5 2.75h2.998c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.498 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM8.75 23.25h-5.5v-14.5l5.5-0.001zM10.25 8.75l5.498-0.001v14.501h-5.498zM4.5 2.75h3c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.5 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM7.5 29.25h-3c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.5v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM14.498 29.25h-2.998c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.498v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM28.58 27.826c-0.164 0.285-0.43 0.495-0.747 0.582l-0.009 0.002-2.898 0.775c-0.096 0.026-0.206 0.041-0.319 0.041-0.575 0-1.060-0.387-1.208-0.915l-0.002-0.009-0.841-3.14 5.311-1.422 0.841 3.14c0.027 0.096 0.042 0.207 0.042 0.321 0 0.23-0.063 0.446-0.173 0.63l0.003-0.006z"></path>{" "}
      </g>
    </svg>
  );
}

export function AddressIcon({ className }) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="#33363F"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#33363F"
      className={`w-5 h-5 ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z"
          fill=""
        ></path>
      </g>
    </svg>
  );
}

export function EditIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M13 21H21"
          stroke="#323232"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M20.0651 7.39423L7.09967 20.4114C6.72438 20.7882 6.21446 21 5.68265 21H4.00383C3.44943 21 3 20.5466 3 19.9922V18.2987C3 17.7696 3.20962 17.2621 3.58297 16.8873L16.5517 3.86681C19.5632 1.34721 22.5747 4.87462 20.0651 7.39423Z"
          stroke="#323232"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M15.3096 5.30981L18.7273 8.72755"
          stroke="#323232"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          opacity="0.1"
          d="M18.556 8.90942L7.09967 20.4114C6.72438 20.7882 6.21446 21 5.68265 21H4.00383C3.44943 21 3 20.5466 3 19.9922V18.2987C3 17.7696 3.20962 17.2621 3.58297 16.8873L15.0647 5.35974C15.0742 5.4062 15.0969 5.45049 15.1329 5.48653L18.5506 8.90426C18.5524 8.90601 18.5542 8.90773 18.556 8.90942Z"
          fill="#323232"
        ></path>{" "}
      </g>
    </svg>
  );
}

export function ReloadIcon({ className }) {
  return (
    <svg
      fill="#2b2b2b"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className} cursor-pointer hover:-rotate-90 transition-all duration-300`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M15.977 0c-7.994 0-14.498 6.504-14.498 14.498 0 7.514 5.79 13.798 13.236 14.44l-2.87 1.455c-0.354 0.195-0.566 0.632-0.355 0.977l0.101 0.262c0.211 0.346 0.668 0.468 1.021 0.274l4.791-2.453c0.006-0.004 0.012-0.003 0.019-0.007l0.322-0.176c0.177-0.098 0.295-0.257 0.342-0.434 0.049-0.177 0.027-0.375-0.079-0.547l-0.191-0.313c-0.003-0.006-0.009-0.010-0.012-0.015l-2.959-4.624c-0.21-0.346-0.666-0.468-1.021-0.274l-0.232 0.162c-0.354 0.194-0.378 0.694-0.168 1.038l1.746 2.709c-0.009-0-0.018-0.004-0.027-0.005-6.54-0.429-11.662-5.907-11.662-12.47 0-6.891 5.607-12.498 12.498-12.498 6.892 0 12.53 5.606 12.53 12.498 0 3.968-1.823 7.613-5 9.999-0.442 0.332-0.53 0.959-0.199 1.401 0.332 0.442 0.959 0.531 1.401 0.199 3.686-2.768 5.799-6.996 5.799-11.598-0-7.994-6.536-14.498-14.53-14.498z"></path>{" "}
      </g>
    </svg>
  );
}
