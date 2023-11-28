import "../styles/globals.css";

export const metadata = {
  title: "Ostra Caracas",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
