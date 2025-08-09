import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/libraries", label: "My libraries" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const { pathname } = useRouter();
  const isActive = (href) => (href === "/" ? pathname === href : pathname.startsWith(href));

  return (
    <header className={styles.navbarHeader}>
      <nav className={styles.navbarContainer}>
        <Link href="/" className={styles.navbarLogo}>
          <Image
            src="/logo.png"
            alt="ScholarMind logo"
            width={45}
            height={45}
            priority
          />
        </Link>

        <div className={styles.navbarLinks}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.navbarActions}>
          <Link href="/login" className={styles.loginBtn}>Login</Link>
          <Link href="/get-started" className={styles.getStartedBtn}>Get started</Link>
          <button className={styles.mobileMenuBtn}><MenuIcon fontSize="small" /></button>
        </div>
      </nav>
    </header>
  );
}
