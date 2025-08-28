import { Footer } from "./Footer";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { Contact } from "./Contact";
import './Home.css'
export function HomePage() {
    return (
        <>
            <Header />
            <MainContent />
            <Contact />
            <Footer />
        </>
    )
}