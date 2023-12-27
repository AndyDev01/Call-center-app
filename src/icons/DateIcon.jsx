export function DateIcon({ size }) {
  if (size === "sm") {
    return (
      <svg
        width="10"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.33333 0.916687V2.75002M3.66667 0.916687V2.75002M1.375 4.58335H9.625M2.29167 1.83335H8.70833C9.21459 1.83335 9.625 2.24376 9.625 2.75002V9.16669C9.625 9.67295 9.21459 10.0834 8.70833 10.0834H2.29167C1.78541 10.0834 1.375 9.67295 1.375 9.16669V2.75002C1.375 2.24376 1.78541 1.83335 2.29167 1.83335Z"
          stroke="#B8BBC3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (size === "lg") {
    return (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3333 1.66669V5.00002M5.66667 1.66669V5.00002M1.5 8.33335H16.5M3.16667 3.33335H14.8333C15.7538 3.33335 16.5 4.07955 16.5 5.00002V16.6667C16.5 17.5872 15.7538 18.3334 14.8333 18.3334H3.16667C2.24619 18.3334 1.5 17.5872 1.5 16.6667V5.00002C1.5 4.07955 2.24619 3.33335 3.16667 3.33335Z"
          stroke="#1D1E21"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
