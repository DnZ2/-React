import { createElement } from 'react';
import logo from './logo.svg';
import './App.css';

export const App = () => {
	return createElement(createWithoutJsx);
	// return (
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				Edit <code>src/App.js</code> and save to reload.
	// 			</p>
	// 			<a
	// 				className="App-link"
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Learn React
	// 			</a>
	// 			<p>{new Date(Date.now()).getFullYear()}</p>
	// 		</header>
	// 	</div>
	// );
};

function createWithoutJsx() {
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			createElement(
				'p',
				{},
				'Edit ',
				createElement('code', {}, 'src/App.js'),
				'  and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', {}, `${new Date(Date.now()).getFullYear()}`),
		),
	);
}
