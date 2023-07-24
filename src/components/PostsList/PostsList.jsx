import { useEffect, useState } from 'react'
import s from './PostsList.module.scss'
import axios from 'axios'
import PostItem from '../PostItem/PostItem.jsx'

const PostsList = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		axios
			.get('https://cloud.codesupply.co/endpoint/react/data.json')
			.then(response => {
				setData(response.data)
			})
			.catch(error => {
				console.error('Error fetching data:', error)
			})
	}, [])
	return (
		<div className={s.posts_list}>
			{data.map((item, id) => (
				<PostItem
					key={`${item.title}_${id}`}
					imgSrc={item.img}
					tag={item.tags}
					text={item.text}
					title={item.title}
					author={item.autor}
					date={item.date}
					views={item.views}
				/>
			))}
		</div>
	)
}

export default PostsList
