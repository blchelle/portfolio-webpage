import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './index.css';
import '@styles/main.scss';

AOS.init();
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
