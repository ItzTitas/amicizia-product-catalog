import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundContent() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <div className="relative mb-8 h-64 w-64 md:h-80 md:w-80">
                <Image
                    src="/error.jpg"
                    alt="Page Not Found"
                    fill
                    unoptimized
                    className="object-contain rounded-lg shadow-lg"
                />
            </div>

            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                the page you are looking for is not here vro!
            </h1>

            <p className="mb-10 max-w-md text-lg text-muted-foreground">
                The page you are looking for might have been removed, had its name changed,
                or is temporarily unavailable.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="default" size="lg" className="group">
                    <Link href="/">
                        <Home className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                        Back to Home
                    </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                    <Link href="/products">
                        <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        View Products
                    </Link>
                </Button>
            </div>

            <div className="mt-16 text-sm text-muted-foreground">
                Amicizia Life Science — A noble cause to serve livestock.
            </div>
        </div>
    );
}
