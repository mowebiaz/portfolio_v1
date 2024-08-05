import { roboto } from './styles/fonts'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import './styles/sass/globals.scss'

export const metadata = {
  title: {
    template: 'MorganeWeb | %s',
    default: 'MorganeWeb', // a default is required when creating a template
  },
  description:
    'Morgane Couvet - développeur web freelance à Grenoble. Spécialisée en création de sites web modernes et performants, je transforme vos idées en réalité numérique.',
  openGraph: {
    type: 'website',
    siteName: 'MorganeWeb',
    url: 'https://www.morganeweb.dev/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Morgane Web',
  description:
    'Morgane Couvet - développeur web freelance à Grenoble. Spécialisée en création de sites web modernes et performants, je transforme vos idées en réalité numérique.',
  url: 'https://www.morganeweb.dev/',
  sameAs: [
    'https://github.com/mowebiaz',
    'https://www.linkedin.com/in/morgane-couvet/',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11 Boulevard Maréchal Leclerc',
    postalCode: '38000',
    addressLocality: 'Grenoble',
    addressCountry: 'FR',
  },
  telephone: '04 56 24 62 84',
  image: 'https://www.morganeweb.dev/images/morgane-web.webp',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'développement web',
  },
  priceRange: '€',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
