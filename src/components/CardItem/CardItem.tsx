import { PostModel } from '../../models/Post';
import styles from './CardItem.module.css'
import Like from "../../image/Like.svg"
import BlackLike from "../../image/BlackLike.svg"
import { useState } from 'react';

type CardItemProps = {
    id?: number,
    title: string,
    body: string,
    isLiked: boolean,
    onDelete: () => void,
    onLike: () => void
}

export default function CardItem({title,body, isLiked, onDelete, onLike}: CardItemProps){
  

    return (
        <article className={styles.item}>
          <div className={styles.wrapbutton}>
            <button className={styles.trashbutton} onClick={(e: any) => {
              e.stopPropagation()
              onDelete();
            }}></button>
            <button onClick={(e: any) => {
              e.stopPropagation()
              onLike(); 
            }} 
            className={ isLiked ? styles.likebuttonclicked : styles.likebutton}></button>
          </div>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.wrapbody}>
              <p className={styles.body}>{body}</p>
            </div>
        </article>
    );
}
