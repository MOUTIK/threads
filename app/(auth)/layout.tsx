import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Inter } from 'next/font/google'
import '../globals.css'
export const metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads App",
}
const inter = Inter({subsets: ['latin']})




export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en">
        <body className={`${inter.className} bg-gray-950`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

