import { SvgProp } from '~/types/Svg';

export function ErrorIcon({ className }: SvgProp) {
  return (
    <svg
      className={className}
      aria-label="icone representando um erro"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="46.5" stroke="#DB2323" strokeWidth="7" />
      <line
        x1="31.7678"
        y1="31.9822"
        x2="69.7747"
        y2="69.9892"
        stroke="#DB2323"
        strokeWidth="5"
      />
      <line
        x1="30.7322"
        y1="69.9892"
        x2="68.7392"
        y2="31.9822"
        stroke="#DB2323"
        strokeWidth="5"
      />
    </svg>
  );
}
