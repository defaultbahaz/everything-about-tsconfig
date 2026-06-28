import styles from './Content.module.css'
import type { ContentProps } from './Content.types'

export function Content({children}: ContentProps) {
    return(
        <main className={styles.ct}>
            {children}
        </main>
    )
}