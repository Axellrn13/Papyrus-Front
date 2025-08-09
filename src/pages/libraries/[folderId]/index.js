import { useRouter } from "next/router";
import Link from "next/link";
import { folders, papersByFolder } from "@/data/mock";
import styles from "@/styles/Folder.module.css";
import FolderIcon from "@mui/icons-material/Folder";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import AddIcon from "@mui/icons-material/Add";
import { Separator } from "@/components/ui/separator";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

export default function FolderView() {
  const { query } = useRouter();
  const { folderId } = query;

  const folder = folders.find((f) => f.id === folderId);
  const papers = papersByFolder[folderId] ?? [];

  if (!folder) return <div className={styles.page}>Folder not found.</div>;

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTitle}>FOLDERS</div>
        <ul className={styles.sidebarList}>
          {folders.map((f) => (
            <li key={f.id}>
              <Link
                href={`/libraries/${f.id}`}
                className={`${styles.sidebarItem} ${
                  f.id === folderId ? styles.active : ""
                }`}
              >
                <FolderIcon />
                {f.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className={styles.content}>
        <div className={styles.headerBreadcrumb}>
          <Breadcrumb
            items={[
              { label: "My libraries", href: "/libraries" },
              { label: folder?.name, href: "" },
            ]}
          />
          <div className={styles.rightCornerBtns}>
            <Button startIcon={<ChatBubbleIcon />} btnText={"Chat with AI"} />
            <Button startIcon={<AddIcon />} btnText={"Add"} />
          </div>
        </div>
        <Separator
          style={{
            height: 1,
            width: "100%",
            background: "rgba(255,255,255,0.12)",
            marginTop: "40px",
            marginBottom: "30px",
          }}
        />

        <input className={styles.search} placeholder="Search papers..." />

        <div className={styles.table}>
          <div className={styles.thead}>
            <div>Title</div>
            <div>Author</div>
            <div>Year</div>
            <div>Journal</div>
            <div>Type</div>
          </div>

          {papers.map((p) => (
            <Link key={p.id} href={`/papers/${p.id}`} className={styles.trow}>
              <div className={styles.titleCell}>
                <div className={styles.paperTitle}>{p.title}</div>
                <div className={styles.paperSubtitle}>
                  This is a sample abstract excerpt…
                </div>
              </div>
              <div>{p.authors}</div>
              <div>{p.year}</div>
              <div className={styles.journalCell}>{p.journal}</div>
              <div>{p.type}</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
