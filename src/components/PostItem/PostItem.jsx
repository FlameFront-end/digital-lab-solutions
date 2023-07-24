import React from 'react'
import s from './PostItem.module.scss'

const PostItem = ({ imgSrc, tag, title, text, author, views, date }) => {
	return (
		<div className={s.post_item}>
			<img src={imgSrc} alt='post banner' />
			<span className={s.tag}>{tag}</span>
			<h3 className={s.title}>{title}</h3>
			<div className={s.post_details}>
				<span className={s.author}>{author}</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='3'
					height='4'
					viewBox='0 0 3 4'
					fill='none'
				>
					<circle cx='1.5' cy='2' r='1.5' fill='#D7D7D7' />
				</svg>
				<span>{date}</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='3'
					height='4'
					viewBox='0 0 3 4'
					fill='none'
				>
					<circle cx='1.5' cy='2' r='1.5' fill='#D7D7D7' />
				</svg>
				<span>{views}</span>
			</div>
			<p className={s.text}>{text}</p>
		</div>
	)
}

export default PostItem
