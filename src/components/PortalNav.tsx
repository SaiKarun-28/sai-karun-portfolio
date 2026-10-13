interface NavItem {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
  sectionId?: string;
}

interface PortalNavProps {
  navItems: NavItem[];
  onNavItemClick: (item: NavItem) => void;
  isMobile: boolean;
}

const PortalNav = ({ navItems, onNavItemClick, isMobile }: PortalNavProps) => {
  return (
    <nav className={isMobile ? 'mobile-nav' : 'desktop-nav'}>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onNavItemClick(item)}
              className="nav-link"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PortalNav;