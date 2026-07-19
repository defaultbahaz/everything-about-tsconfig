import { Copy } from "@/components/Copy";
import styles from './Code.module.css';

export function CodeHeader() {
    return(
        <div className={styles.codeHeader}>
            <select id="services" name="services">
                <option value="web-design">Web Design</option>
                <option value="seo">SEO Optimization</option>
                <option value="marketing">Digital Marketing</option>
            </select>

            <Copy elementId="code"/>
        </div>
    )
}

