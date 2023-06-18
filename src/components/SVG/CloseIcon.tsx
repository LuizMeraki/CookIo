import { SvgProp } from '~/types/Svg';

export function CloseIcon({ className }: SvgProp) {
  return (
    <svg
      className={className}
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.33911 1.80132L20.6609 19.1987" stroke="#ADA5A5" strokeWidth="3" />
      <path d="M1.33911 19.1987L20.6609 1.8013" stroke="#ADA5A5" strokeWidth="3" />
    </svg>
  );
}
