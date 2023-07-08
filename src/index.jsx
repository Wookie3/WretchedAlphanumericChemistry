import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App name ="Chris" />
    <App name="Jack"/>
    <App name="Jon"/>
	</React.StrictMode>
)