
const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};

const Articles = {
    text: 'Articles',
    link: '/articles',
    icon: 'icon-book-open',
    submenu: [
        {
            text: 'Articles List',
            link: '/articles/articleslist'
        },
        {
            text: 'Create Article',
            link: '/articles/createarticle'
        }
    ]
};

const headingMain = {
    text: 'Main Navigation',
    heading: true
};

export const menu = [
    headingMain,
    Home,
    Articles
];
