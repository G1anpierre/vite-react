import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthenticationProvider } from './providers/authenticationProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthenticationProvider>
			<App />
		</AuthenticationProvider>
	</React.StrictMode>
)
