import { AppKitProvider } from '../context/appkitprovider'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AppKitProvider>{children}</AppKitProvider>
      </body>
    </html>
  )
}