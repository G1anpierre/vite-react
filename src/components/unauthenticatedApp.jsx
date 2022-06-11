import * as React from 'react'
import { Dialog, Button } from './styleComponents'
import { useAuthentication } from '../providers/authenticationProvider'
import books from '../books.svg'
import { Form } from './form'

export const UnauthenticatedApp = () => {
	const [modalOpen, setModalOpen] = React.useState('none')
	const { user, register, login, logout } = useAuthentication()

	const handleOpenCloseModal = name => {
		setModalOpen(name)
	}

	const isLogin = modalOpen === 'login'
	const isRegister = modalOpen === 'register'

	const handleSubmit = data => {
		isLogin ? login(data) : register(data)
	}

	return (
		<>
			<div
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
					<div
						css={{
							display: 'flex',
							justifyContent: 'flex-end',
						}}
					>
						<Button
							className="close-button"
							onClick={() => handleOpenCloseModal('none')}
						>
							Close
						</Button>
					</div>
					<p>
						Hello there. I am a dialog {modalOpen} - {user?.email}
					</p>
					<Form modal={modalOpen} onSubmit={handleSubmit} />
				</Dialog>
			</div>
		</>
	)
}
