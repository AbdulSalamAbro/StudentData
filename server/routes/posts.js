import express from 'express';

//this command we write to import the posts which we have created inside the controller folder
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;

//here we just create all the routes for backend 
//next step is to create controller folder and inside that we create posts inside that posts create alll the handlers for routes
//the resons for creating another folder is b/c here if we write all logic it will be complex and lost and hard to see the all things

//the next steps is to create a folder model inside which we make the models