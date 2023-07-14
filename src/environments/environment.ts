export const host = 'http://localhost:3000';
export const enviroment = {
    home: {
        allPosts: host + '/allPostsData',
        category: host + '/categoryData',
        authors: host + '/authorsData'
    },

    blog: {
        allPostsSlide: host + '/allPostsSlideInner'
    },

    blogPost: {
        readNext: host + '/readNextArr'
    },

    aboutUs: {
        knowMore: host + '/knowMoreData'
    },

    category: {
        categoryAllPosts: host + '/categoryAllPosts',
        minCategory: host + '/minCategoryData',
        minTags: host + '/minTagsData'
    },

    author: {
        author: host + '/oneAuthorData',
        myPosts: host + '/myPostsData'
    },
     
    footer: {
        footerUrl: host + '/footerEmail'
    },

    contact: {
        contactUrl: host + '/contactForm'
    }
}