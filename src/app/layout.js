import ToastProvider from "@/components/ui/ToastProvider";
import "./globals.css";


export const metadata = {
  title: "Restaurant",
  description: "Restaurant app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <main>{children}</main>
        </ToastProvider>
      </body>
    </html>
  );
}