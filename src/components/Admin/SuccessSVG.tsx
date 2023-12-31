const SuccessSVG = () => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 50 50"
      xmlSpace="preserve"
      width={150}
    >
      <circle style={{ fill: '#25AE88' }} cx="25" cy="25" r="25" />
      <polyline
        style={{
          fill: 'none',
          stroke: '#FFFFFF',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
        }}
        points="38,15 22,33 12,25"
      />
    </svg>
  );
};

export default SuccessSVG;
