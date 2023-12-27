export function CardIcon({ size }) {
  if (size === "sm") {
    return (
      <svg
        width="11"
        height="8"
        viewBox="0 0 11 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.375 3.19794H9.625M2.125 0.791687H8.875C9.28921 0.791687 9.625 1.15079 9.625 1.59377V6.40627C9.625 6.84925 9.28921 7.20835 8.875 7.20835H2.125C1.71079 7.20835 1.375 6.84925 1.375 6.40627V1.59377C1.375 1.15079 1.71079 0.791687 2.125 0.791687Z"
          stroke="#B8BBC3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (size === "md") {
    return (
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.75 4.47913H11.25M1.70455 1.41663H10.2955C10.8226 1.41663 11.25 1.87367 11.25 2.43746V8.56246C11.25 9.12625 10.8226 9.58329 10.2955 9.58329H1.70455C1.17736 9.58329 0.75 9.12625 0.75 8.56246V2.43746C0.75 1.87367 1.17736 1.41663 1.70455 1.41663Z"
          stroke="#1D1E21"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
