import styles from './Background.module.css'
import type { BackgroundProps } from './Background.types'

export function Background({ children }: BackgroundProps) {
    return(
        <div className={styles.bg}>
            {children}
        </div>
    )
}