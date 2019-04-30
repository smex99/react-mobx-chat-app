import React from 'react';
import { observer, inject } from 'mobx-react';

class Posts extends React.Component {
	componentDidMount() {
		this.props.PostStore.loadPosts();
	};

  render() { 
		const { PostStore } = this.props;
		
    return(
			<React.Fragment>
				{PostStore.postData.map(post => (
					<div className="posts">
						<h3 className="">{post.title}</h3>
						<p className="">{post.body}</p>
					</div>
				))}
			</React.Fragment>
    );
  }
}

export default inject("PostStore")(observer(Posts));