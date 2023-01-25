interface LogoProps {
  className: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <svg className={className} viewBox='0 0 1600 1200'>
      <title>Apex Legends Symbol</title>
      <g id='Page-1' stroke='none'>
        <g
          id='apex-legends-symbol'
          transform='translate(285.000000, 100.000000)'
        >
          <polygon
            id='Triangle-Copy'
            points='515.151515 0 1030.30303 878.787879 878.787879 1000 589.767918 803.070992 757.451838 803.070992 515.151515 378.787879 273.624305 803.070992 439.499364 803.070992 151.515152 1000 0 878.787879'
          ></polygon>
        </g>
      </g>
    </svg>
  );
};
