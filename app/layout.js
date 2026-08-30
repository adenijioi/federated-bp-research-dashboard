import "./globals.css";
import "./verified.css";

export const metadata = {
  title: "Federated BP Classification | Research Dashboard",
  description: "Interactive dashboard for a privacy-preserving federated multimodel blood pressure classification project."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
