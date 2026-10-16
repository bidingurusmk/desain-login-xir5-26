import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Hosting Page",
    description: "Hosting Page"
}
const HostingPage = () =>{
    return (
        <div>
            <Header>
                <h1 className="text-[60px] font-bold">Hosting Page</h1>
            </Header>
            <Footer />
        </div>
    );
}
export default HostingPage;