import CommentService from "../services/comment-service.js"

const commentService = new CommentService()

export const createComment = async (req,res) => {

    try {
        const response = await commentService.createComment(req.query.modelId, req.query.modelType, req.user.id, req.body.content)
        console.log("user ID ::::===>  ",req.userId)
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully created a comment'

        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: 'Something went wrong'
        })
        
    }
}

