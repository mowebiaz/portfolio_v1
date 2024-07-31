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
  icons: {
    icon: '/icon.ico',
  },
  }

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
