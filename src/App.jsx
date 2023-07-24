import React, { useEffect, useState } from 'react'
import PostsList from './components/PostsList/PostsList.jsx'
import './app.scss'
import MobileHeader from './components/Header/MobileHeader/MobileHeader.jsx'
import DesktopHeader from './components/Header/DesktopHeader/DesktopHeader.jsx'

function App() {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const updateWindowDimensions = () => {
			setIsMobile(window.innerWidth < 768)
		}
		updateWindowDimensions()
		window.addEventListener('resize', updateWindowDimensions)
		return () => window.removeEventListener('resize', updateWindowDimensions)
	}, [])

	return (
		<>
			{isMobile ? <MobileHeader /> : <DesktopHeader />}
			<div className='container'>
				<PostsList />
			</div>
		</>
	)
}

export default App
