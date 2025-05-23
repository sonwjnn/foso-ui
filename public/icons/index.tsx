import { SVGProps } from "react";

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={27}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M12.417 2.708c-5.638 0-10.209 4.57-10.209 10.209 0 5.638 4.57 10.208 10.209 10.208 5.638 0 10.208-4.57 10.208-10.208S18.055 2.708 12.417 2.708ZM.458 12.917C.458 6.312 5.812.958 12.417.958c6.604 0 11.958 5.354 11.958 11.959 0 2.987-1.095 5.719-2.906 7.814l3.816 3.817a.875.875 0 1 1-1.237 1.238l-3.817-3.817a11.912 11.912 0 0 1-7.814 2.906C5.812 24.875.458 19.521.458 12.917Z"
      clipRule="evenodd"
    />
  </svg>
);
