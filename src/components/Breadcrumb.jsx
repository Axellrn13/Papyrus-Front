import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "@/styles/Breadcrumb.module.css";

export default function Breadcrumb({ items = [] }) {
  return (
    <div className={styles.breadcrumb}>
      <Link href="/" className={styles.breadcrumbLink}>
        <HomeIcon style={{ fontSize: 35 }} />
      </Link>

      {items.map((item, index) => (
        <span key={index} className={styles.breadcrumbItem}>
          <NavigateNextIcon className={styles.separator} style={{ fontSize: 25 }} />
          {item.href ? (
            <Link href={item.href} className={styles.breadcrumbLink}>
              {item.label}
            </Link>
          ) : (
            <span className={styles.breadcrumbText}>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
