import { ContactSection } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import { ProjectsSection } from "@/components/projects";
import { BASE_URL } from "@/lib/constants";

export default function Home() {

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leighton Tidwell",
    url: BASE_URL,
    image: `${BASE_URL}/opengraph-image`,
    jobTitle: "Software Engineer",
    description:
      "AI-first software engineer with 9+ years of experience building AI-enabled fitness platforms and mentoring teams on agentic development. Previously delivered mission-critical systems across the DoD and private sector.",
    knowsAbout: [
      "Artificial Intelligence",
      "AI-First Development",
      "Agentic Workflows",
      "React",
      "Next.js",
      "GraphQL",
      "AWS",
      "TypeScript",
      "Software Engineering",
      "Full Stack Development",
      "Claude Code",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Future",
    },
    sameAs: [
      "https://www.linkedin.com/in/leightontidwell/",
      "https://github.com/leighton-tidwell",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Maryland",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Leighton Tidwell",
    url: BASE_URL,
    description:
      "Personal portfolio of Leighton Tidwell, an AI-first software engineer specializing in agentic workflows and AI-enabled platforms.",
    author: {
      "@type": "Person",
      name: "Leighton Tidwell",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Leighton Tidwell | AI-First Engineer",
    url: BASE_URL,
    description:
      "AI-first software engineer blending disciplined craft, agentic workflows, and faith-driven purpose.",
    mainEntity: {
      "@type": "Person",
      "@id": `${BASE_URL}#person`,
      name: "Leighton Tidwell",
    },
  };

  // JSON-LD Nextjs ref: https://nextjs.org/docs/app/guides/json-ld

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
