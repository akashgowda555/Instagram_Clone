import { users } from "./users"

export const POSTS = [
    {
        imageUrl:"https://i.pinimg.com/736x/b7/5e/76/b75e769d20b660ebe222f69e23dc287f.jpg",
        user: users[0].user,
        likes: 500,
        caption: "put my demons to bed",
        profile_picture: users[0].image,
        comments : [
            {
                user: "manoj",
                comment: "this is lit"
            },
            {
                user: "nikhil",
                comment: "lets fkn goooo"
            }
        ]
    },
    {
        imageUrl:"https://i.pinimg.com/736x/82/2b/72/822b72198673368ed5c8f7b57e87ef4d.jpg",
        user: users[1].user,
        likes: 700,
        caption: "jinchakkkkkk",
        profile_picture: users[1].image,
        comments : [
            {
                user: "souj",
                comment: "damnnnnnnnnn"
            },
            {
                user: "nikhil",
                comment: "beautiful"
            }
        ]
    }
]