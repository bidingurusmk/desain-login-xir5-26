import Link from "next/link";

const Footer = () => {
    return (
        <div className="md:pl-30 px-2 md:pr-20 mt-10 py-8 bg-[#282828] flex 
      md:flex-row flex-col gap-4 justify-between items-start text-white">
            <div className="w-1/6">
                <h1 className="text-xl font-bold">Products</h1>
                <ul className="mt-4">
                    <li className="hover:text-orange-500"><Link href="/hosting">Hosting</Link></li>
                    <li className="hover:text-orange-500"><Link href="/domain">Domain</Link></li>
                    <li className="hover:text-orange-500"><Link href="/vps-hosting">VPS Hosting</Link></li>
                    <li className="hover:text-orange-500"><Link href="/vps-kvm">VPS KVM</Link></li>
                    <li className="hover:text-orange-500"><Link href="/email">Email</Link></li>
                </ul>
            </div>
            <div className="w-1/6">
                <h1 className="text-xl font-bold">Services</h1>
                <ul className="mt-4">
                    <li className="hover:text-orange-500"><Link href="/support">Support</Link></li>
                    <li className="hover:text-orange-500"><Link href="/consultation">Consultation</Link></li>
                </ul>
            </div>
            <div className="w-1/6">
                <h1 className="text-xl font-bold">Company</h1>
                <ul className="mt-4">
                    <li className="hover:text-orange-500"><Link href="/about">About Us</Link></li>
                    <li className="hover:text-orange-500"><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="w-1/6">
                <h1 className="text-xl font-bold">Legal</h1>
                <ul className="mt-4">
                    <li className="hover:text-orange-500"><Link href="/privacy">Privacy Policy</Link></li>
                    <li className="hover:text-orange-500"><Link href="/terms">Terms of Service</Link></li>
                </ul>
            </div>
            <div className="w-2/6">
                <h1 className="text-xl font-bold">Newsletter</h1>
                <p>Subscribe to our newsletter for the latest updates and offers.</p>
                <form className="mt-4">
                    <input type="email" placeholder="Enter your email" className="bg-[#333] text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Subscribe</button>
                </form>
            </div>
        </div>
    );
}
export default Footer;