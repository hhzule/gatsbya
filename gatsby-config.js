const dotenv = require("dotenv");

// if (process.env.NODE_ENV !== 'production') {
//     dotenv.config();
// }

dotenv.config();
module.exports = {
    plugins: [
        "gatsby-plugin-typescript",
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: "gatsby-plugin-firebase",
            options: {
                credentials: {
                    apiKey: "AIzaSyAzfLQuBLoj5EpojvqqZi-2wnLKtCMNi7c",
                    authDomain: "gatsbyblo.firebaseapp.com",
                    databaseURL: "https://gatsbyblo.firebaseio.com",
                    projectId: "gatsbyblo",
                    storageBucket: "gatsbyblo.appspot.com",
                    messagingSenderId: "383675647403",
                    appId: "1:383675647403:web:5129ead220562fbe81beee",
                }
            }
        }
    ],
};