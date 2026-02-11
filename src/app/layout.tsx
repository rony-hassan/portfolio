import "./globals.css";
import ThemeProviderWrapper from "@/components/theme-provider";

export const metadata = {
    title: "Rony | Portfolio",
    description: "Aspiring SQA Engineer Portfolio Website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
            </body>
        </html>
    );
}