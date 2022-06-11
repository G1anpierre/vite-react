import * as React from 'react'
import { useAuthentication } from '../providers/authenticationProvider'
import { Button } from './styleComponents'

export const AuthenticatedApp = () => {
	const { user, logout } = useAuthentication()

	return (
		<div>
			<nav
				css={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '7px 16px',
					background: 'black',
					color: 'white',
				}}
			>
				<p>Hello {user?.email}</p>
				<p css={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
					<span>AuthenticatedApp</span>
					<Button onClick={logout}>LogOut</Button>
				</p>
			</nav>
		</div>
	)
}
