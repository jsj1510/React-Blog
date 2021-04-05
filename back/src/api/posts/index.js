import Router from 'koa-router';
import * as postsCtrl from "./posts.ctrl" ;
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();


posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router(); //api/posts/:id 경로 따로만들기
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);
 
posts.use('/:id', postsCtrl.getPostById, post.routes());
export default posts;