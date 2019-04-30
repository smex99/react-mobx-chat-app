import { 
	observable, 
	decorate, 
	action, 
	configure,
	runInAction,
	flow,
} from 'mobx';

configure({ enforceActions: 'observed' });

class PostStore {
	postData = [];

	// runInAction
	// loadPosts = () => {
	// 	fetch('https://jsonplaceholder.typicode.com/posts')
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			runInAction(() => {
	// 				this.postData = data;
	// 			});
	// 		});
	// };

	// Async/await
	async loadPosts() {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await response.json();
		runInAction(() => {
			this.postData = data;
		});
	};

	// Generetor function
	// loadPosts = function*(id) {
	// 	const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	// 	const data = yield response.json();
	// 	this.postData = data;
	// };
}

decorate(PostStore, {
	postData: observable,
	// loadPosts: flow,
	loadPosts: action,
});

export default new PostStore();