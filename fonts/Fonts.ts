import { Inter, Roboto } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { Hind_Madurai } from 'next/font/google'

export const montserat = Montserrat({
    weight: ['200', '300', '400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })

  export const hind = Hind_Madurai({
    weight: ['300','400','500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })

  export const inter = Inter({
    weight: ['300','400','500', '700'],
    style: ['normal'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
  })