import './globals.css'
import ThemeProvider from './components/ThemeProvider'
import NavBar from './components/NavBar'
import BodyClassProvider from './components/BodyClassProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <BodyClassProvider>
            <NavBar />
            {children}
          </BodyClassProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
