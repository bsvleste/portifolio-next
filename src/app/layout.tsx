import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/Sidebar'
const roboto = Roboto({
  weight: ['100', '300', '400', '500', "700", "900"],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BSVC☕DE',
  description: 'Explore a diversidade e inovação em cada projeto neste portfólio cativante e versátil. Desde design gráfico arrojado até desenvolvimento web intuitivo, cada peça é uma manifestação do compromisso com a excelência criativa. Descubra uma variedade de trabalhos que transcendem fronteiras, combinando habilidades técnicas sólidas com uma visão artística única. Este portfolio reflete não apenas uma gama de habilidades, mas também uma paixão palpável por contar histórias e criar experiências memoráveis. Envolvente, inspirador e repleto de originalidade, este é um convite para explorar um mundo de criatividade sem limites.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.className} antialiased scroll-smooth`} >
      <body>
        <div className='min-h-screen bg-app lg:grid lg:grid-cols-app '>
          <Sidebar />
          <main className='mt-32 px-4 lg:mt-0  lg:col-start-2 lg:px-8'>
            {children}
          </main>
        </div>
      </body >
    </html >
  )
}
