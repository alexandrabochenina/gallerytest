import {createSlice, createAction, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import { PostModel } from '../models/Post'
import { fetchPosts } from '../data/posts'

interface PostsState {
    posts: PostModel[];
}

export const fetchInitialPosts = createAsyncThunk(
    'posts/initial',
    async(arg, thunkAPI) => {
        return await fetchPosts()
    }
)

const postsSlice = createSlice({
    name: 'Posts',
    initialState: {posts: []} as PostsState,
    reducers: {
        deletePost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        likePost: (state, action: PayloadAction<string>) => {
            let post = state.posts.find(post => post.id === action.payload)
            if(!post) {
                return
            }
            post.isLiked = !post.isLiked
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchInitialPosts.fulfilled, (state, action) => {
            state.posts.push(...action.payload)
        })
    }
})

export const { reducer } = postsSlice
export const { deletePost, likePost} = postsSlice.actions;