import { useDispatch, useSelector } from "react-redux";
import CardItem from "./components/CardItem/CardItem";
import Layout from "./components/Layout/Layout";
import { RootState, store, useAppDispatch } from "./store/store";
import { useEffect } from "react";
import { fetchInitialPosts } from "./slices/postsSlice";
import styles from "./App.module.css"
import PostsRoot from "./components/PostsRoot/PostsRoot";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchInitialPosts())
  }, [])

  return (
    <Layout>
        <PostsRoot />
    </Layout>
   
  )
}

export default App;
