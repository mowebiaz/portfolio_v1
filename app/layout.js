import { inter } from './styles/fonts';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import "./styles/sass/globals.scss";

export const metadata = {
  title: 'Home',
  description: 'blablabla',
}


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
