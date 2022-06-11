import { useUser } from '../hooks/useUser'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { auth } from '../firebase-config'
import React, { createContext, useContext } from 'react'

const Authentication = createContext(null)

export const AuthenticationProvider = ({ children }) => {
	const user = useUser()

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

	const value = {
		user,
		register,
		login,
		logout,
	}

	return (
		<Authentication.Provider value={value}>{children}</Authentication.Provider>
	)
}

export const useAuthentication = () => {
	const context = useContext(Authentication)
	if (!context) {
		throw new Error(
			'Authentication Context must be used inside Authentication Provider'
		)
	}
	return context
}
