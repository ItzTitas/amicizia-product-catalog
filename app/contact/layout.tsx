import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Amicizia Life Science | Contact Us",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
