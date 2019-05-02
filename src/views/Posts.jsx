import React from 'react';
import { observer, inject } from 'mobx-react';

class Posts extends React.Component {
	componentDidMount() {
		this.props.PostStore.loadPosts();
	};

  render() { 
		const { PostStore } = this.props;
		
    return(
			<div className="posts">
				{PostStore.postData.map(post => (
					<div key={post.id} className="post">
						<h3 className="post-title">{post.title}</h3>
						<p className="">{post.body}</p>
					</div>
				))}
			</div>
    );
  }
}

export default inject("PostStore")(observer(Posts));