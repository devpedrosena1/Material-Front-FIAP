import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/Dashboard'>Dashboard</Link></li>
          <li><Link href='/Dashboard/config'>Confuguração</Link></li>
          <li><Link href='/Dashboard/perfil'>Perfil</Link>
            <ul>
              <li><Link href="/Dashboard/perfil/joao">João</Link></li>
              <li><Link href="/Dashboard/perfil/maria">Maria</Link></li>
              <li><Link href="/Dashboard/perfil/anna">Anna</Link></li>
            </ul>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
