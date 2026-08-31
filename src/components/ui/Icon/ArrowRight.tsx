import React from 'react';

const ArrowRight: React.FC<{ title?: string }> = ({ title = 'arrow-right' }) => (
  <svg viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
    <title>{title}</title>
    <path d="M1 8h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default ArrowRight;
