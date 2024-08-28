import { PostModel } from "../models/Post";

export async function fetchPosts(): Promise<PostModel[]> {
    try {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      const posts = data.posts as PostModel[]
      
      return posts
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      throw error
    }
}
