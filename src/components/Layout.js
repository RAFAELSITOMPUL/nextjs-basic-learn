import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
    return(
        <>
            <Header />
            <main className="max-w-screen-xl p-4 mx-auto mt-20">
                {children}
            </main>
            <Footer />
        </>
    )
}