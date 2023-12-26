import type { Metadata } from 'next'
import "./scss/index.scss";

export const metadata: Metadata = {
  title: `Jabo Bernardo's Portfolio | @hellojabo`,
  description: "I'm Jabo Bernardo, a web developer who loves turning ideas into cool websites. Check out my portfolio for some awesome projects that I've worked on. Let's keep it simple and fun – take a look, and let's chat about bringing your online dreams to life!",
  applicationName: "Jabo Bernardo's Portfolio | @hellojabo",
  referrer: 'origin-when-cross-origin',
  keywords: ["Jabo", "React", "NextJS", "Portfolio", "Web Developer", "Web Development", "Web Design", "Web Designer", "Frontend", "Frontend Developer", "Frontend Development", "Frontend Design", "Frontend Designer", "Fullstack", "Fullstack Developer", "Fullstack Development", "Fullstack Design", "Fullstack Designer", "Software Engineer", "Software Engineering", "Software Development", "Software Design", "Software Designer", "Web Engineer", "Web Engineering", "TailwindCSS", "TypeScript", "Node.js", "JavaScript"],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  icons: {
    icon: 'https://hellojabo.com/images/favicon.ico',
    apple: 'https://hellojabo.com/images/favicon.ico',
    shortcut: 'https://hellojabo.com/images/favicon.ico',
    other: {
      rel: 'icon',
      type: 'image/ico',
      url:  'https://hellojabo.com/images/favicon.ico',
    }
  },
  creator: "Jabo Bernardo",
  openGraph: {
    title: `Jabo Bernardo's Portfolio | @hellojabo`,
    description: "I'm Jabo Bernardo, a web developer who loves turning ideas into cool websites. Check out my portfolio for some awesome projects that I've worked on. Let's keep it simple and fun – take a look, and let's chat about bringing your online dreams to life!",
    type: 'website',
    url: "https://hellojabo.com",
    siteName: "Jabo Bernardo's Portfolio | @hellojabo",
    images: [
      {
        url: "https://hellojabo.com/Banner.png",
        width: 1920,
        height: 1080,
        alt: "Jabo Bernardo's Portfolio | @hellojabo",
      },
    ],
    locale: 'en_US',
  },
  manifest: "https://hellojabo.com/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          { children }
      </body>
    </html>
  )
}
