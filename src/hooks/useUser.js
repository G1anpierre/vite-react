import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase-config'
import * as React from 'react'

const useUser = () => {
	const [user, setUser] = React.useState()

	React.useEffect(() => {
		onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
		})
	}, [])

	return user
}

export { useUser }
