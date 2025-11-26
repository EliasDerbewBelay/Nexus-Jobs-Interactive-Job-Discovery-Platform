import Link from 'next/link'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          JobNexus
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 font-medium md:flex">
          <Link
            href="/jobs"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Browse Jobs
          </Link>
          <Link
            href="/companies"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Companies
          </Link>
          <Link
            href="/career-advice"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Resources
          </Link>

          {/* Auth Buttons */}
          <div className="ml-4 flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>

          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-background/95 border-t backdrop-blur md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link
              href="/jobs"
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Jobs
            </Link>
            <Link
              href="/companies"
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Companies
            </Link>
            <Link
              href="/career-advice"
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <div className="flex flex-col gap-2 border-t pt-2">
              <Button variant="outline" asChild className="justify-center">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Sign In
                </Link>
              </Button>
              <Button asChild className="justify-center">
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
