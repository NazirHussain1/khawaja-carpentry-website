export function CallIcon({ className = 'size-5', size = 20, title = 'Call' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

export function MailIcon({ className = 'size-5', size = 20, title = 'Email' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.25 5h15.5A2.25 2.25 0 0 1 22 7.25v9.5A2.25 2.25 0 0 1 19.75 19H4.25A2.25 2.25 0 0 1 2 16.75v-9.5A2.25 2.25 0 0 1 4.25 5Zm.34 2.25 6.13 5.2c.74.63 1.82.63 2.56 0l6.13-5.2H4.59Zm15.16 1.56-5.5 4.67a3.47 3.47 0 0 1-4.5 0l-5.5-4.67v7.94c0 .41.34.75.75.75h14c.41 0 .75-.34.75-.75V8.81Z" />
    </svg>
  );
}
