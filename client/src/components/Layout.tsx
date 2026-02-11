/* Swiss Design - Technical Documentation Layout
 * Grid-based precision with sidebar navigation
 * Deep slate backgrounds with electric blue accents
 */

import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Overview", href: "/" },
    { name: "Tier 1: Integration Testing", href: "/tier1" },
    { name: "Tier 2: E2E Evaluation", href: "/tier2" },
    { name: "Implementation Strategies", href: "/strategies" },
    { name: "Recommendations", href: "/recommendations" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar Navigation - Desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:w-80 lg:fixed lg:inset-y-0 bg-card border-r border-border">
        <div className="flex flex-col h-full">
          {/* Logo/Title */}
          <div className="px-6 py-8 border-b border-border">
            <Link href="/">
              <h1 className="text-xl font-bold text-primary mono cursor-pointer">
                MCP Tool Evaluation
              </h1>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              A comprehensive guide for teams
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={`block px-3 py-2.5 text-sm rounded transition-colors ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-border text-xs text-muted-foreground">
            <p>Built with Swiss Design principles</p>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-50 bg-card border-b border-border">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/">
            <h1 className="text-lg font-bold text-primary mono cursor-pointer">
              MCP Evaluation
            </h1>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="px-4 py-4 space-y-1 border-t border-border">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 text-sm rounded transition-colors ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
          </nav>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-1 lg:ml-80">
        {children}
      </main>
    </div>
  );
}
