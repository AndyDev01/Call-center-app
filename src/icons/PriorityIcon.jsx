export function PriorityIcon({ size }) {
  if ((size === "sm")) {
    return (
      <svg
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.79165 3.04167L3.49998 0.75L1.20831 3.04167M5.79165 6.25L3.49998 3.95833L1.20831 6.25"
          stroke="#B8BBC3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if ((size === "md")) {
    return (
      <svg
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.75 5.25L5 1.5L1.25 5.25M8.75 10.5L5 6.75L1.25 10.5"
          stroke="#B8BBC3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
