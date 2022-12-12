import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout({
    children,
    title,
}: {
    children: React.ReactNode;
    title?: string | undefined;
}) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{title ? title : "CZAR+"}</title>
                <meta
                    name="CZAR+ is a software company with a specialized team to develop the right solution for your business."
                    content="Czar+ Page"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="h-screen w-100 overflow-auto invisibleScroll">
                    <div className="relative">{children}</div>
                </div>
            </main>
        </>
    );
}
