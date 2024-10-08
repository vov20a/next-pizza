export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h1>Layout</h1>
        {children}
      </body>
    </html>
  )
}
