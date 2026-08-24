import Image from "next/image";
import { ProjectAccordion } from "./components/project-accordion";
import { ThemeToggle } from "./components/theme-toggle";
import {
  contactLinks,
  currentActivities,
  musicChannelUrl,
  primaryContactLinks,
  profile,
  reading,
  readingIntroduction,
  selectedProjects,
  timeline,
} from "./content";
import { siteConfig } from "./site";

function SocialIcon({ name }: { name: "GitHub" | "LinkedIn" | "X" }) {
  if (name === "GitHub") {
    return (
      <svg
        className="social-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2.25a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.71c-2.72.59-3.3-1.16-3.3-1.16-.44-1.13-1.09-1.43-1.09-1.43-.89-.61.07-.6.07-.6.98.07 1.5 1.01 1.5 1.01.88 1.5 2.3 1.07 2.86.82.09-.63.34-1.07.62-1.32-2.17-.25-4.45-1.09-4.45-4.82 0-1.06.38-1.94 1-2.62-.1-.25-.43-1.24.1-2.59 0 0 .82-.26 2.68 1a9.3 9.3 0 0 1 4.88 0c1.86-1.26 2.67-1 2.67-1 .54 1.35.2 2.34.1 2.59.63.68 1.01 1.56 1.01 2.62 0 3.75-2.29 4.57-4.47 4.81.35.31.66.91.66 1.83v2.72c0 .26.18.57.67.47A9.75 9.75 0 0 0 12 2.25Z" />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg
        className="social-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6.2 8.1H2.9V21h3.3V8.1ZM4.55 3A1.93 1.93 0 1 0 4.55 6.86 1.93 1.93 0 0 0 4.55 3ZM21.1 13.6c0-3.88-2.07-5.68-4.83-5.68-2.22 0-3.22 1.22-3.77 2.08V8.1H9.2V21h3.3v-6.38c0-1.68.32-3.31 2.4-3.31 2.05 0 2.08 1.92 2.08 3.42V21h3.3l.82-7.4Z" />
      </svg>
    );
  }

  return (
    <svg
      className="social-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.51 11.24h-6.66l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  );
}

function CountryLocation() {
  return (
    <span className="country-location">
      <a
        className="country-trigger"
        href="https://www.openstreetmap.org/?mlat=41.6086&mlon=21.7453#map=7/41.6086/21.7453"
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby="macedonia-location-caption"
      >
        {profile.introduction.country}
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 14s4-3.75 4-7.5a4 4 0 1 0-8 0C4 10.25 8 14 8 14Z" />
          <circle cx="8" cy="6.5" r="1.35" />
        </svg>
      </a>
      <span className="location-popover">
        <span className="location-map-frame">
          <iframe
            title="Map showing North Macedonia"
            src="https://www.openstreetmap.org/export/embed.html?bbox=19.2%2C40.7%2C23.1%2C42.4&layer=mapnik&marker=41.6086%2C21.7453"
            loading="lazy"
          />
        </span>
        <span className="location-caption" id="macedonia-location-caption">
          <span>
            <strong>North Macedonia</strong>
            <small>Southeast Europe</small>
          </span>
          <span aria-hidden="true">↗</span>
        </span>
      </span>
    </span>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${profile.portrait.src}`,
    jobTitle: profile.descriptor,
    description: siteConfig.description,
    homeLocation: {
      "@type": "Country",
      name: "North Macedonia",
    },
    worksFor: {
      "@type": "Organization",
      name: "MCA.mk",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Faculty of Computer Science and Engineering, UKIM",
    },
    knowsAbout: [
      "Software engineering",
      "Web development",
      "Angular",
      ".NET",
      "Next.js",
      "Artificial intelligence",
    ],
    sameAs: [contactLinks[0].href, contactLinks[1].href, musicChannelUrl],
  };

  return (
    <div className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ThemeToggle />

      <main>
        <header className="hero">
          <div className="hero-copy">
            <h1 className="signature-heading">
              <span>{profile.name}</span>
              <Image
                src={profile.signature.src}
                alt=""
                width={240}
                height={96}
                className="signature-image"
              />
            </h1>
            <p className="hero-descriptor">{profile.descriptor}</p>
            <p className="hero-introduction">
              {profile.introduction.before}
              <CountryLocation />
              {profile.introduction.after}
            </p>

            <nav className="social-links" aria-label="Primary contact links">
              <ul>
                {primaryContactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <SocialIcon name={link.label} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hero-cta">
              <a
                className="lets-talk-button"
                href="mailto:vasiljkovdarko@gmail.com?subject=Let%27s%20talk%20about%20a%20project"
              >
                Let&apos;s talk
                <span aria-hidden="true">↗</span>
              </a>
              <p>Have something interesting in mind? I&apos;d love to hear about it.</p>
            </div>
          </div>

          <figure className="hero-portrait">
            <Image
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              width={1200}
              height={1500}
              sizes="(max-width: 640px) 224px, (max-width: 959px) 240px, 208px"
              className="portrait-image"
              preload
              unoptimized
            />
          </figure>
        </header>

        <div className="reading-column">
          <section aria-labelledby="now-heading" className="section-block hero-next">
            <h2 id="now-heading">Now</h2>
            <ul className="dash-list">
              {currentActivities.map((activity) => (
                <li key={activity.before}>
                  <span aria-hidden="true">—</span>
                  <span>
                    {activity.before}
                    {activity.link ? (
                      <a
                        href={activity.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {activity.link.label}
                      </a>
                    ) : null}
                    {activity.after}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby="work-heading" className="section-block work-section">
          <h2 id="work-heading">Selected Work</h2>
          <ProjectAccordion projects={selectedProjects} />
        </section>

        <div className="reading-column">
          <section aria-labelledby="reading-heading" className="section-block">
            <h2 id="reading-heading">Reading</h2>
            <p className="section-description">{readingIntroduction}</p>
            <ul className="reading-list">
              {reading.map((item) => (
                <li key={item.title}>
                  <span>
                    <span className="reading-title-row">
                      <span>{item.title}</span>
                      {item.badge ? (
                        <span className="book-badge">{item.badge}</span>
                      ) : null}
                    </span>
                    <span className="text-muted"> · {item.detail}</span>
                  </span>
                  {item.rating !== null ? (
                    <span className="reading-rating">
                      <span className="sr-only">
                        {item.rating} out of 5 stars
                      </span>
                      <span aria-hidden="true">
                        {"★".repeat(item.rating)}
                        {"☆".repeat(5 - item.rating)}
                      </span>
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="timeline-heading" className="section-block">
            <h2 id="timeline-heading">Timeline</h2>
            <ol className="timeline-list">
              {timeline.map((item, index) => (
                <li key={`${item.year}-${index}`}>
                  <p className="timeline-year">{item.year}</p>
                  <p>{item.event}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <Image
              src={profile.signature.src}
              alt=""
              width={180}
              height={72}
              className="footer-logo"
            />
            <div>
              <p className="footer-name">{profile.name}</p>
              <p className="footer-copyright">© 2026</p>
            </div>
          </div>

          <nav aria-label="Contact links">
            <ul>
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
