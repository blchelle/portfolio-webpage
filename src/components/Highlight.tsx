import React from 'react';

interface HighlightProps {
	text: string;
}

const Highlight: React.FC<HighlightProps> = ({ text }) => {
	return <span className='text-primary font-bold'>{text}</span>;
};

export default Highlight;
