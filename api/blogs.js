export const config = {
    runtime: 'edge',
}

const blogs = [
    {
        id: '1',
        slug:'uses-dictionary',
        title: 'Making this the first true ones the uses a dictionary.',
        screens: '/images/blog/img-1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint magni harum nihil voluptates, recusandae.',
        author: 'Loura Sweety',
        create_at: '25 Sep 2022',
        blogSingleImg:'/images/blog/img-4.jpg', 
        comment:'35',
        share:'26',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        slug:'plumbing-company',
        title: 'A Behind the scenes look of your plumbing company',
        screens: '/images/blog/img-2.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint magni harum nihil voluptates, recusandae.',
        author: 'David Luis',
        create_at: '23 Sep 2022',
        blogSingleImg:'/images/blog/img-5.jpg', 
        comment:'80',
        share:'45',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        slug:'get-to-work',
        title: 'Now grab your tool belt and get to work!',
        screens: '/images/blog/img-3.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint magni harum nihil voluptates, recusandae.',
        author: 'Jenefer Willy',
        create_at: '21 Sep 2022',
        blogSingleImg:'/images/blog/img-6.jpg',
        comment:'95',
        share:'58',
        blClass:'format-video',
    },
];

export default blogs;