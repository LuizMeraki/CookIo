export function GuestIcon() {
  return (
    <svg
      aria-label="avatar do usuário não autenticado"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="mask0_1_14" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
        <circle cx="24" cy="24" r="24" fill="#EFE6E6" />
      </mask>
      <g mask="url(#mask0_1_14)">
        <circle cx="24" cy="24" r="24" fill="#CFC9C9" />
        <ellipse cx="24" cy="44" rx="19" ry="14" fill="#E9DADA" />
        <ellipse cx="24" cy="20" rx="8" ry="8" fill="#E9DADA" />
      </g>
    </svg>
  );
}
