import { Roboto, Merienda, Inter, Pacifico, Rancho } from 'next/font/google'

export const roboto = Roboto({ weight: ['400','500'], subsets: ['latin'] })
export const merienda = Merienda({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

export const inter = Inter({ subsets: ['latin'] })
export const pacifico = Pacifico({ weight: '400', subsets: ['latin'] })
export const rancho = Rancho({ weight: '400', subsets: ['latin'] })

/*https://nextjs.org/docs/app/building-your-application/optimizing/fonts#using-multiple-fonts*/
