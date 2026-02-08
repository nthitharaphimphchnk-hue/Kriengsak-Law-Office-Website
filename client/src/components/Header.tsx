import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchComponent } from "@/components/Search";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "หน้าแรก", href: "/" },
    { label: "บริการ", href: "/services" },
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "ความรู้", href: "/knowledge" },
    { label: "FAQ", href: "/faq" },
    { label: "ความคิดเห็น", href: "/testimonials" },
    { label: "ติดต่อ", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 font-bold text-primary hover:opacity-80 transition-opacity">
            <img src="/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="hidden sm:inline text-sm">ดร.เกรียงศักดิ์</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Search and CTA Button */}
        <div className="hidden sm:flex items-center gap-2">
          <SearchComponent />
          <a href="tel:0816116174">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              โทร: 081-611-6174
            </Button>
          </a>
        </div>

        {/* Search and Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <SearchComponent />
          <button
            className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <a href="tel:0816116174" className="px-4 py-2">
              <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                โทร: 081-611-6174
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
