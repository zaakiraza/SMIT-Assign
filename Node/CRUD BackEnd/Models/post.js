import mongoose from "mongoose";

const userPosts = new mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, "Please write something"],
            trim: true,
        },
        postUrl: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Mandatory Field"],
        },
        comments: {
            type: [
                {
                    userEmail: {
                        type: String,
                        required: true,
                    },
                    comment: {
                        type: String,
                        required: [true, "Comment cannot be empty"],
                    },
                    createdAt: {
                        type: Date,
                        default: Date.now,
                    },
                },
            ],
            default: [],
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("UserPosts", userPosts);
