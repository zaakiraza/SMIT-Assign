import express from 'express'
import { getAllPosts, singleUserPosts, getAllPostCount, singleUserPostCount, addPost, deleteSinglePost, addComment, singlePost } from '../Controllers/postsController.js';

export const postRoutes = express.Router();

postRoutes.get('/allPost', getAllPosts);
postRoutes.get('/singleUserPost/:email', singleUserPosts);
postRoutes.get('/postCount', getAllPostCount);
postRoutes.get('/singlePostCount/:email', singleUserPostCount);
postRoutes.post('/:token', addPost);
postRoutes.delete('/deleteSingle/:email', deleteSinglePost);
postRoutes.put('/addComment/:token', addComment);
postRoutes.get('/singlePost/:id', singlePost);