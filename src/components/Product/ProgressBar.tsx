import React from 'react';

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className="w-[270px] bg-[#D9D9D9] rounded">
      <div
        className="h-[.188em] max-w-[80%] text-xs text-center text-white bg-[#9E9E9E] rounded"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
