import { useAppSelector } from "../../store/store"
import styles from "./PopupCardItem.module.css"
import Close from "../../image/icons8-cross-48.png"

type CardItemProps = {
    id: string,
    onClose: () => void
}


export default function PopupCardItem(props: CardItemProps) {
    const post = useAppSelector((state) => state.posts.find((post) => post.id === props.id))
    return (
      <div className={styles.wrapPopup}>
        <button onClick={props.onClose} className={styles.closeButton}>
          <img className={styles.closeImg} src={Close} alt="close"></img>
        </button>
        <article className={styles.popup} id={props.id}>
          <h2 className={styles.title}>{post?.title}</h2>
          <div className={styles.wrapbody}>
            <p className={styles.body}>{post?.body}</p>
          </div>
        </article>
      </div>
    );
}