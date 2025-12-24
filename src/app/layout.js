
import "./globals.css";


export const metadata = {
  title: "Restaurant",
  description: "Restaurant app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
