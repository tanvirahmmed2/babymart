
import ContextProvider from "@/components/helper/Context";
import "./globals.css";


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
      <body className="w-full max-w-300 mx-auto overflow-x-hidden relative bg-white">
       <ContextProvider>
        <main>{children}</main>
       </ContextProvider>
      </body>
    </html>
  );
}