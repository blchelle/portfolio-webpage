import React from 'react';
import classes from '@tailwind/Highlight';

interface HighlightProps {
	text: string;
}

const Highlight: React.FC<HighlightProps> = ({ text }) => {
	return <span className={classes.text}>{text}</span>;
};

export default Highlight;
