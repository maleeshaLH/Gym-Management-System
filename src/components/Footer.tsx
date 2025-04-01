import { MapPin, PhoneCall, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-violet-200 text-black py-2">
            <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <MapPin className="w-6 h-6 " />
                    <p className="text-lg">Location</p>
                </div>
                <div className="flex flex-col items-center">
                    <PhoneCall className="w-6 h-6 " />
                    <p className="text-lg">+02 1234567890</p>
                </div>
                <div className="flex flex-col items-center">
                    <Mail className="w-6 h-6 " />
                    <p className="text-lg">demo@gmail.com</p>
                </div>
            </div>

        </footer>

);
};

export default Footer;
