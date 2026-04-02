import "./globals.css";

export const metadata = {
  title: "FlexED",
  description: "FlexED - Smart School Management",
  icons: {
    icon: "/FlexEDlogo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}