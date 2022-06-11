import * as React from 'react'

import { useAuthentication } from './providers/authenticationProvider'
import { UnauthenticatedApp } from './components/unauthenticatedApp'

import { AuthenticatedApp } from './components/authenticatedApp'
import '@reach/dialog/styles.css'
import './App.css'

function App() {
	const { user } = useAuthentication()

	return (
		<div className="App">
			{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
		</div>
	)
}

export default App
