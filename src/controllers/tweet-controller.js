import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService()

export let createTweet = async (req,res) => {

    try {

        const response = await tweetService.create(req.body)
        return res.status(201).json({
            success: true,
            message: "Succefully created the tweet!",
            data: response,
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong!",
            data: {},
            err: error
        })
        
    }
}
export const getTweet = async (req,res) => {
    try {
        const tweetId = req.params.id
        console.log(tweetId)
        const response = await tweetService.get(tweetId)
        console.log(response)
        return res.status(201).json({
            success: true,
            message: "Succefully fetched the tweet!",
            data: response,
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong!",
            data: {},
            err: error
        })
        
    }
}