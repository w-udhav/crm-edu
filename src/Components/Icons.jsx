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
