'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  MAIN_NAV,
  CONTACT_INFO,
  type NavDropdownEntry,
  type MegaMenuColumn,
} from '@/lib/nav-config'

// ─── Icon helpers ─────────────────────────────────────────────────────────────

function PhoneIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82A16 16 0 0 0 16 16.91l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function ClockIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function MapPinIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function CalendarIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}

function ChevronDownIcon({ size = 11 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

// ─── Desktop: standard dropdown ───────────────────────────────────────────────

function DesktopDropdown({ items, onClose }: { items: NavDropdownEntry[]; onClose: () => void }) {
  return (
    <div className="desktop-dropdown">
      {items.map((item, i) => {
        if (!item.href) {
          return (
            <div key={i} className="desktop-dropdown__label">{item.label}</div>
          )
        }
        return (
          <Link
            key={i}
            href={item.href}
            className={`desktop-dropdown__item${item.featured ? ' desktop-dropdown__item--featured' : ''}`}
            onClick={onClose}
          >
            {item.label}
            {item.tag && <span className="desktop-dropdown__tag">{item.tag}</span>}
          </Link>
        )
      })}
    </div>
  )
}

// ─── Desktop: mega-menu ───────────────────────────────────────────────────────

function DesktopMegaMenu({ columns, onClose }: { columns: MegaMenuColumn[]; onClose: () => void }) {
  return (
    <div className="mega-menu">
      <div className="mega-menu__inner">
        {columns.map((col, ci) => (
          <div key={ci} className="mega-menu__col">
            {col.groups.map((group, gi) => (
              <div key={gi} className={gi > 0 ? 'mega-menu__group mega-menu__group--spaced' : 'mega-menu__group'}>
                <div className="mega-menu__cat">{group.category}</div>
                {group.items.map((item, ii) => {
                  if (!item.href) {
                    return (
                      <span
                        key={ii}
                        className={`mega-menu__static${item.isSub ? ' mega-menu__static--sub' : ''}`}
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                    )
                  }
                  return (
                    <Link
                      key={ii}
                      href={item.href}
                      className={`mega-menu__link${!item.isSub ? ' mega-menu__link--bold' : ' mega-menu__link--sub'}`}
                      onClick={onClose}
                    >
                      {item.label}
                      {item.tag && <span className="mega-menu__tag">{item.tag}</span>}
                    </Link>
                  )
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Mobile: nav section (accordion item) ────────────────────────────────────

function MobileSection({
  label,
  href,
  children,
  open,
  onToggle,
  onClose,
  variant,
}: {
  label: string
  href?: string
  children?: React.ReactNode
  open: boolean
  onToggle: () => void
  onClose: () => void
  variant?: 'vet'
}) {
  const hasChildren = !!children

  if (!hasChildren) {
    return (
      <div className="mobile-nav__row">
        <Link
          href={href ?? '/'}
          className={`mobile-nav__link${variant === 'vet' ? ' mobile-nav__link--vet' : ''}`}
          onClick={onClose}
        >
          {label}
        </Link>
      </div>
    )
  }

  return (
    <div className="mobile-nav__section">
      <button
        type="button"
        className="mobile-nav__row mobile-nav__row--toggle"
        onClick={onToggle}
        aria-expanded={open}
      >
        {href ? (
          <Link href={href} className="mobile-nav__link" onClick={(e) => { e.stopPropagation(); onClose() }}>
            {label}
          </Link>
        ) : (
          <span className="mobile-nav__link">{label}</span>
        )}
        <span className={`mobile-nav__chevron${open ? ' mobile-nav__chevron--open' : ''}`}>
          <ChevronDownIcon size={16} />
        </span>
      </button>
      {open && <div className="mobile-nav__sub">{children}</div>}
    </div>
  )
}

// ─── Mobile: conditions mega-menu (flattened accordion) ───────────────────────

function MobileConditions({ columns, onClose }: { columns: MegaMenuColumn[]; onClose: () => void }) {
  return (
    <>
      {columns.flatMap((col) =>
        col.groups.map((group, gi) => (
          <div key={gi}>
            <div className="mobile-nav__sub-label">{group.category}</div>
            {group.items.map((item, ii) =>
              item.href ? (
                <Link
                  key={ii}
                  href={item.href}
                  className={`mobile-nav__sub-link${item.isSub ? ' mobile-nav__sub-link--sub' : ''}${item.hasOwnPage ? ' mobile-nav__sub-link--page' : ''}`}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={ii}
                  className={`mobile-nav__sub-static${item.isSub ? ' mobile-nav__sub-static--sub' : ''}`}
                >
                  {item.label}
                </span>
              )
            )}
          </div>
        ))
      )}
    </>
  )
}

// ─── Mobile: dropdown items ───────────────────────────────────────────────────

function MobileDropdownItems({ items, onClose }: { items: NavDropdownEntry[]; onClose: () => void }) {
  return (
    <>
      {items.map((item, i) => {
        if (!item.href) {
          return <div key={i} className="mobile-nav__sub-label">{item.label}</div>
        }
        return (
          <Link
            key={i}
            href={item.href}
            className={`mobile-nav__sub-link${item.featured ? ' mobile-nav__sub-link--page' : ''}`}
            onClick={onClose}
          >
            {item.label}
            {item.tag && <span className="mobile-tag">{item.tag}</span>}
          </Link>
        )
      })}
    </>
  )
}

// ─── Main Header component ────────────────────────────────────────────────────

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})
  const [openDesktopItem, setOpenDesktopItem] = useState<string | null>(null)

  function toggleSection(key: string) {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  function closeMobile() {
    setMobileOpen(false)
    setOpenSections({})
  }

  function closeDesktop() {
    setOpenDesktopItem(null)
  }

  return (
    <>
      {/* ── Skip to content ─────────────────────────────────────────────────── */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* ── Fixed header wrapper ─────────────────────────────────────────────── */}
      <header id="site-header" className="site-header">

        {/* ── Topbar ────────────────────────────────────────────────────────── */}
        <div className="topbar">
          <div className="topbar__inner">
            <div className="topbar__info">
              <div className="topbar__item">
                <PhoneIcon size={13} />
                <a href={CONTACT_INFO.phoneHref} className="topbar__link">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="topbar__sep topbar__sep--hide-md" />
              <div className="topbar__item topbar__item--hide-md">
                <ClockIcon />
                {CONTACT_INFO.hours}
              </div>
              <div className="topbar__sep topbar__sep--hide-sm" />
              <div className="topbar__item topbar__item--hide-sm">
                <MapPinIcon />
                <a
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className="topbar__link"
                >
                  {CONTACT_INFO.address}
                </a>
              </div>
            </div>
            <div className="topbar__ctas">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener"
                className="topbar__social"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <Link href="/contact-pet-owners" className="topbar-btn topbar-btn--primary">
                <CalendarIcon />
                Request a Consultation
              </Link>
              <Link href="/contact-referrers" className="topbar-btn topbar-btn--secondary">
                Refer a Patient
              </Link>
            </div>
          </div>
        </div>

        {/* ── Navbar ────────────────────────────────────────────────────────── */}
        <nav className="navbar" aria-label="Main navigation">
          <div className="navbar__inner">

            {/* Logo */}
            <Link href="/" className="logo" aria-label="Animal Alliance Radiation Oncology — Home">
              <div className="logo__main">
                Animal <em>Alliance</em>
              </div>
              <div className="logo__sub">Radiation Oncology · Palm Beach</div>
            </Link>

            {/* Desktop nav */}
            <div className="desktop-nav" role="menubar">
              {MAIN_NAV.map((item) => {
                const hasMega = !!item.megaMenu
                const hasDropdown = !!item.dropdown
                const hasMenu = hasMega || hasDropdown
                const isOpen = openDesktopItem === item.label

                return (
                  <div
                    key={item.label}
                    className={`nav-item${hasMega ? ' nav-item--mega' : ''}${isOpen ? ' nav-item--open' : ''}`}
                    role="none"
                    onMouseEnter={() => hasMenu && setOpenDesktopItem(item.label)}
                    onMouseLeave={() => hasMenu && setOpenDesktopItem(null)}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`nav-link${item.variant === 'vet' ? ' nav-link--vet' : ''}${hasMenu ? ' nav-link--has-menu' : ''}`}
                        role="menuitem"
                        aria-haspopup={hasMenu ? 'true' : undefined}
                        onClick={hasMenu ? closeDesktop : undefined}
                      >
                        {item.label}
                        {hasMenu && <ChevronDownIcon />}
                      </Link>
                    ) : (
                      <span
                        className={`nav-link nav-link--no-href${hasMenu ? ' nav-link--has-menu' : ''}`}
                        role="menuitem"
                        aria-haspopup={hasMenu ? 'true' : undefined}
                        tabIndex={0}
                      >
                        {item.label}
                        {hasMenu && <ChevronDownIcon />}
                      </span>
                    )}

                    {hasDropdown && item.dropdown && (
                      <DesktopDropdown items={item.dropdown} onClose={closeDesktop} />
                    )}
                    {hasMega && item.megaMenu && (
                      <DesktopMegaMenu columns={item.megaMenu} onClose={closeDesktop} />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Phone */}
            <div className="navbar__phone">
              <a href={CONTACT_INFO.phoneHref} className="navbar__phone-link" aria-label={`Call us at ${CONTACT_INFO.phone}`}>
                <PhoneIcon size={16} />
                <span className="navbar__phone-num">{CONTACT_INFO.phone}</span>
              </a>
            </div>

            {/* Hamburger */}
            <button
              type="button"
              className="hamburger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile menu overlay ───────────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Header row */}
          <div className="mobile-menu__head">
            <Link href="/" onClick={closeMobile} aria-label="Animal Alliance Radiation Oncology — Home">
              <div className="logo__main" style={{ fontSize: 18 }}>
                Animal <em>Alliance</em>
              </div>
              <div className="logo__sub">Radiation Oncology · Palm Beach</div>
            </Link>
            <button
              type="button"
              className="mobile-menu__close"
              onClick={closeMobile}
              aria-label="Close navigation menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Nav items */}
          <nav className="mobile-menu__body" aria-label="Mobile navigation">
            {MAIN_NAV.map((item) => {
              const key = item.label
              const hasDropdown = !!item.dropdown || !!item.megaMenu

              return (
                <MobileSection
                  key={key}
                  label={item.label}
                  href={item.href}
                  open={openSections[key] ?? false}
                  onToggle={() => toggleSection(key)}
                  onClose={closeMobile}
                  variant={item.variant}
                >
                  {item.dropdown && (
                    <MobileDropdownItems items={item.dropdown} onClose={closeMobile} />
                  )}
                  {item.megaMenu && (
                    <MobileConditions columns={item.megaMenu} onClose={closeMobile} />
                  )}
                  {!hasDropdown ? undefined : null}
                </MobileSection>
              )
            })}
          </nav>

          {/* Footer CTAs */}
          <div className="mobile-menu__footer">
            <div className="mobile-menu__info">
              <PhoneIcon size={14} />
              {CONTACT_INFO.phone}
            </div>
            <div className="mobile-menu__info">
              <ClockIcon size={14} />
              {CONTACT_INFO.hours}
            </div>
            <Link href="/contact-pet-owners" onClick={closeMobile} className="mobile-btn mobile-btn--primary">
              Request a Consultation →
            </Link>
            <Link href="/contact-referrers" onClick={closeMobile} className="mobile-btn mobile-btn--secondary">
              Refer a Patient →
            </Link>
          </div>
        </div>
      )}

      {/* ── Mobile overlay backdrop ───────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="mobile-backdrop"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}
    </>
  )
}
