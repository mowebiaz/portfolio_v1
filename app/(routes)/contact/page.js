import { FormContact } from '/app/components/FormContact/FormContact'
import { merienda } from '/app/styles/fonts'
import './page.scss'

export const metadata = {
  title: 'Contact',
  description: "Contactez-moi pour discuter de vos projets web. Que vous ayez une question ou souhaitiez collaborer, je suis à votre disposition pour vous offrir des solutions digitales sur mesure."
}
export default function Contact() {
  return (
    <main id='contact'>
      <h1 className={merienda.className}>Contact</h1>
    <FormContact />
    </main>
  )
}