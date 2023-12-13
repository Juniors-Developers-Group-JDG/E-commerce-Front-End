import React from 'react';

interface Props {
  nota: number;
}

interface Filled {
  filled: number;
}

const Star = ({ filled }: Filled) => (
  <div className="relative w-6 h-6">
    <svg
      className="absolute top-0 left-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E9B121"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
    <div
      className={`absolute top-0 left-0 w-full h-full ${
        filled === 0.5 ? 'clip-[polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)]' : ''
      }`}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#F3C141"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    </div>
  </div>
);

const StarRating = ({ nota }: Props) => {
  const fullStars = Math.floor(nota);
  const partial = nota - fullStars;

  return (
    <div className="flex space-x-1">
      {[...Array(fullStars)].map((_, idx) => (
        <Star key={idx} filled={1} />
      ))}
      {partial > 0 && <Star filled={partial} />}
      {[...Array(5 - fullStars - (partial > 0 ? 1 : 0))].map((_, idx) => (
        <Star key={idx + fullStars + 1} filled={0} />
      ))}
    </div>
  );
};

export default StarRating;
