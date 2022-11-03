import { Navbar } from "../components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Joshua Ibrom</title>
      </head>
      <body>
        <Navbar />
        <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32">{children}</div>
      </body>
    </html>
  );
}
