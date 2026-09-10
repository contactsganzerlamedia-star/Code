export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>© {year} Sganzerla Media. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-foreground">
            Services
          </a>
          <a href="#work" className="hover:text-foreground">
            Work
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
