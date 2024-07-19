import { roboto } from './styles/fonts';
import { cocon } from './styles/fonts';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import "./styles/sass/globals.scss";

export const metadata = {
  title: {
    template: 'MorganeWeb | %s',
    default: 'MorganeWeb', // a default is required when creating a template
  },
  description: 'blablabla',
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
  );
}
