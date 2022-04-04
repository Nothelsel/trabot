import { TwitterApi } from 'twitter-api-v2';
import 'dotenv/config'
import fetch from "node-fetch";

// const client = new TwitterApi({
//     // appKey: process.env.TWITTER_CONSUMER_KEY,
//     // appSecret: process.env.TWITTER_CONSUMER_SECRET,
//     accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
//     accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// });

async function getData(url) {
    return fetch(url)
        .then(res => res.json())
        .then(out =>
            { return out }
        )
}

console.log(getData('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD').then(data => {console.log(data);}))

// const twitterClient = new TwitterApi(process.env.BEARTOKEN);

// const roClient = twitterClient.readOnly;
// const user = await roClient.v2.userByUsername('sykursen')

// console.log(user)

