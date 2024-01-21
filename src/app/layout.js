import { Orbitron } from "next/font/google";
import "./globals.css";

const inter = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: "Lung Lens",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
