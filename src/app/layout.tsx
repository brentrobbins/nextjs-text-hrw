
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
      <body>{children}</body>
    </html>
  )
}
