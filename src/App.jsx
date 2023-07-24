import React, { useEffect, useState } from 'react'
import PostsList from './components/PostsList/PostsList.jsx'
import './app.scss'
import MobileNavbar from './components/Navbar/MobileNavbar/MobileNavbar.jsx'
import DesktopNavbar from './components/Navbar/DesktopNavbar/DesktopNavbar.jsx'
import Header from './components/Header/Header.jsx'
import Separator from './components/Separator/Separator.jsx'
import axios from 'axios'

function App() {
	const [isMobile, setIsMobile] = useState(false)
	const [loading, setLoading] = useState(true)
	const [originalPosts, setOriginalPosts] = useState([])
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const updateWindowDimensions = () => {
			setIsMobile(window.innerWidth < 768)
		}
		updateWindowDimensions()
		window.addEventListener('resize', updateWindowDimensions)
		return () => window.removeEventListener('resize', updateWindowDimensions)
	}, [])

	useEffect(() => {
		axios
			.get('https://cloud.codesupply.co/endpoint/react/data.json')
			.then(response => {
				setOriginalPosts(response.data)
				setPosts(response.data)
				setLoading(false)
			})
			.catch(error => {
				console.error('Error fetching data: ', error)
				setLoading(false)
			})
	}, [])

	const handleSearch = searchTerm => {
		if (!searchTerm) {
			setPosts(originalPosts)
		} else {
			const filteredPosts = originalPosts.filter(post =>
				post.title.toLowerCase().includes(searchTerm.toLowerCase())
			)
			setPosts(filteredPosts)
		}
	}

	return (
		<>
			<div className='container'>
				<Header onSearch={handleSearch} />
				{isMobile ? '' : <Separator />}
				{isMobile ? <MobileNavbar /> : <DesktopNavbar />}
				{isMobile ? '' : <Separator />}
				{loading ? <p>Loading...</p> : <PostsList posts={posts} />}
			</div>
		</>
	)
}

export default App
