import { FormContact } from '/app/components/FormContact/FormContact'
import { merienda } from '/app/styles/fonts'
import './page.scss'

export const metadata = {
  title: 'Contact',
}
export default function Contact() {
  return (
    <main id='contact'>
      <h1 className={merienda.className}>Contact</h1>
    <div>jhlhljkhhlkkhkhlkkhlkhk</div>
    <FormContact />
    </main>
  )
}