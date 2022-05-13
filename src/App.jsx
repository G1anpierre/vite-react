import * as React from 'react'

import { Dialog, Button } from './components/styleComponents'
import { Form } from './components/form'
// import { UnauthenticatedApp } from './components/unauthenticatedApp'
// import { AuthenticatedApp } from './components/authenticatedApp'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { auth } from './firebase-config'
import { useUser } from './hooks/useUser'
import '@reach/dialog/styles.css'

import books from './books.svg'
import './App.css'

function App() {
	const [modalOpen, setModalOpen] = React.useState('none')

	const handleOpenCloseModal = name => {
		setModalOpen(name)
	}

	const user = useUser()

	const isLogin = modalOpen === 'login'
	const isRegister = modalOpen === 'register'

	const handleSubmit = data => {
		if (isLogin) {
			login(data)
		}
		if (isRegister) {
			register(data)
		}
	}

	const register = async data => {
		const { email, password } = data
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password)
			console.log({ user })
		} catch (error) {
			console.log(error.message)
		}
	}

	const login = async data => {
		const { email, password } = data
		try {
			const user = await signInWithEmailAndPassword(auth, email, password)
			console.log({ user })
		} catch (error) {
			console.log(error.message)
		}
	}

	const logout = async () => {
		await signOut(auth)
	}

	return (
		<div
			className="App"
			css={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				height: '100vh',
			}}
		>
			<img src={books} alt="books" height={124} width={124} />

			<div
				css={{
					display: 'grid',
					gridTemplateColumns: 'auto auto auto',
					gridGap: '16px',
				}}
			>
				<Button onClick={() => handleOpenCloseModal('login')}>Login</Button>
				<Button
					onClick={() => handleOpenCloseModal('register')}
					variant="secondary"
					disabled={!!user}
				>
					Register
				</Button>
				<Button onClick={logout}>LogOut</Button>
			</div>

			<Dialog
				aria-label="Login form"
				isOpen={isLogin || isRegister}
				onDismiss={() => handleOpenCloseModal('none')}
			>
				<Button
					className="close-button"
					onClick={() => handleOpenCloseModal('none')}
				>
					Close
					<span aria-hidden>×</span>
				</Button>
				<p>
					Hello there. I am a dialog {modalOpen} - {user?.email}
				</p>
				<Form modal={modalOpen} onSubmit={handleSubmit} />
			</Dialog>
		</div>
	)
}

export default App
