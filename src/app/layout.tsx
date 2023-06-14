import Link from "next/link"

export const metadata = {
  title: 'Human Rights Watch',
  description: 'Human Rights Watch text version',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <main>
            <h1 className="title">
              Human Rights Watch | <Link href="/">Latest News</Link>
            </h1>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
