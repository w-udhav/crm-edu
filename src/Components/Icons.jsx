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
        ></path>{" "}
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
