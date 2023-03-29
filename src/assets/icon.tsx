import React from "react";
interface IconProps {
    className: string;
  }

  export const AddIcon: React.FC<IconProps> = ({ className }) => {
    return (
      <>
           <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <g
        fill="none"
        stroke="#12203d"
        strokeWidth="3"
        data-name="Add icon"
        transform="translate(-.383 -.383)"
      >
        <path
          d="M0 0L0 20"
          data-name="Line 60"
          transform="translate(10.383 .383)"
        ></path>
        <path
          d="M20 0L0 0"
          data-name="Line 61"
          transform="translate(.383 10.383)"
        ></path>
      </g>
    </svg>
      </>
    );
  };
  export const UploadIcon: React.FC<IconProps> = ({ className }) => {
    return (
      <>
       <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g
        fill="none"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth="2"
        data-name="upload icon"
        transform="translate(1 1)"
      >
        <path
          d="M14 9.528v2.981A1.524 1.524 0 0112.444 14H1.556A1.524 1.524 0 010 12.509V9.528"
          data-name="Path 536"
        ></path>
        <path d="M11.019 3.726L7 0 2.981 3.726" data-name="Path 537"></path>
        <path d="M7 0v8.943" data-name="Path 538"></path>
      </g>
    </svg>
      </>
    );
  };

