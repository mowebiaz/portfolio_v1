import { Roboto, Inter, Pacifico, Rancho } from 'next/font/google'
import localFont from 'next/font/local'

export const roboto = Roboto({ weight: ['400','500'], subsets: ['latin'] })

export const cocon = localFont({ src: '../../public/fonts/cocon-regular-font-webfont.woff2'})


export const inter = Inter({ subsets: ['latin'] })
export const pacifico = Pacifico({ weight: '400', subsets: ['latin'] })
export const rancho = Rancho({ weight: '400', subsets: ['latin'] })

/*https://nextjs.org/docs/app/building-your-application/optimizing/fonts#using-multiple-fonts*/
