import ToastProvider from "@/components/ui/ToastProvider";
import "./globals.css";
import { ContextProvider } from "@/components/context/Context";


export const metadata = {
  title: {
    default: "Baby Mart",
    template: "%s | Baby Mart",
  },
  description: "Baby Mart app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full overflow-x-hidden relative">
        <ContextProvider>
          <ToastProvider>
            <main>{children}</main>
          </ToastProvider>
        </ContextProvider>
      </body>
    </html>
  );
}