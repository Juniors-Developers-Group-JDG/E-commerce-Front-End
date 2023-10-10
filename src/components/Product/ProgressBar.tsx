import React from 'react';

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className="h-2 w-[270px] bg-gray-300 rounded">
      <div className="h-full max-w-[80%] text-xs text-center text-white bg-gray-600 rounded" style={{ width: `${value}%` }}></div>
    </div>
  );
}

export default ProgressBar;