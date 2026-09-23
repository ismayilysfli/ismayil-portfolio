import { navigation, site } from "@/data/site";
import { ArrowUpRightIcon, FileIcon, MenuIcon } from "./icons";

export function Navigation() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#top" aria-label="Ismayil Yusifli, back to top">
          <span>IY</span>
          <span className="brand-name">Ismayil Yusifli</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-resume" href={site.resumeUrl} download>
          <FileIcon width={16} height={16} />
          Resume
          <ArrowUpRightIcon width={15} height={15} />
        </a>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <MenuIcon />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a href={site.resumeUrl} download>
              Resume / CV
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
