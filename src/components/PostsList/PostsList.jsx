import s from './PostsList.module.scss'
import PostItem from '../PostItem/PostItem.jsx'

const PostsList = ({ posts }) => {
	return (
		<div className={s.posts_list}>
			{posts.map((item, id) => (
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
