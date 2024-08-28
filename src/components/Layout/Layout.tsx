import styles from './Layout.module.css'

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({children}:LayoutProps){
    return (
      <div className={styles.page}>
        <h1 className={styles.header}>Posts Desk</h1>

        <div>{children}</div>
        <a
          className={styles.footer}
          target="_blank"
          href="https://t.me/BAD_FRONTEND"
        >
          <footer>Made by BAD FRONTEND</footer>
        </a>
      </div>
    );
}