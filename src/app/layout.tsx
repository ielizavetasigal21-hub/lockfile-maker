export const metadata = { title: "FilmSlate", description: "Indie cinema" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
        {children}
      </body>
    </html>
  );
}