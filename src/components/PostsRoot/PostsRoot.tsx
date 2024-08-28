import { useAppSelector } from "../../store/store"
import { useState, useCallback } from "react"
import CardItem from "../CardItem/CardItem"
import styles from '../PostsRoot/PostsRoot.module.css'
import PopupCardItem from "../PopupCardItem/PopupCardItem"
import { useDispatch } from 'react-redux';
import { deletePost, likePost} from '../../slices/postsSlice';

export default function PostsRoot() {
    const posts = useAppSelector((state) => state.posts);

    const [showOnlyLiked, setShowOnlyLiked] = useState(false)

    const filterPosts = () => {
      setShowOnlyLiked(!showOnlyLiked)
    }

    const [postPopupState, setPostPopup] = useState({
      isOpen: false,
      id: "",
    });

    const toggleOpen = useCallback((id: string) => {
      setPostPopup({
        isOpen: true,
        id: id,
      });
    }, []);

    const onPopupClose = useCallback(() => {
      setPostPopup({
        isOpen: false,
        id: postPopupState.id,
      });
    }, []);

    const dispatch = useDispatch();

    const handleDelete = useCallback((id: string) => {
      dispatch(deletePost(id));
    }, []);
    
    const handleLike = useCallback((id: string) => {
      dispatch(likePost(id));
    }, []);
    
    return (
      <>
        <button onClick={filterPosts} className={styles.buttonfilter}></button>
        <section className={styles.imgsection}>
          <div className={styles.wrapPost}>
            {(showOnlyLiked ? posts.filter(post => post.isLiked) : posts).map((post) => (
              <button
                className={styles.button}
                onClick={() => toggleOpen(post.id)}
              >
                <CardItem
                  onDelete={() => handleDelete(post.id)}
                  onLike={() => handleLike(post.id)}
                  title={post.title}
                  body={post.body}
                  isLiked={post.isLiked}
                  key={post.id}
                />
              </button>
            ))}
            {postPopupState.isOpen && (
              <PopupCardItem id={postPopupState.id} onClose={onPopupClose} />
            )}
          </div>
        </section>
      </>
    );
}