import Post from './models/post';

export default function createFakeData() {
    const posts = [...Array(40).keys()].map(i => ({
        title:`포스트 #${i}`,
        body:'asdasdasdasdasdaasdasdddddddddddddddddsadasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa        aaaaaaa222222222222222222azzzzzzzzzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaazzzzzzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssxxxxxxxx                xxxxxxxxxxzzzzzzzzzzzzsdasdad',
        tags:['가짜', '데이터'],
    }))
    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    });
}