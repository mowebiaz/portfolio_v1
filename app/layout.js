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
    site_name: 'MorganeWeb',
    url: 'https://morgane-couvet.vercel.app/',
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Morgane Web',
  description:
    'Morgane Couvet - développeur web freelance à Grenoble. Spécialisée en création de sites web modernes et performants, je transforme vos idées en réalité numérique.',
  url: 'https://morgane-couvet.vercel.app/',
  sameAs: [
    'https://github.com/mowebiaz',
    'https://www.linkedin.com/in/morgane-couvet/',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11 Boulevard Maréchal Leclerc',
    postalCode: '38000',
    addressLocality: 'Grenoble',
    addressCountry: 'France',
  },
  image:
    'https://morgane-couvet.vercel.app/images/morgane-web.webp',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'développement web',
  },
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
