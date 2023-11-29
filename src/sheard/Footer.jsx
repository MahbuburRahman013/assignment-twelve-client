import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer className="bg-gray-900 text-white py-8">
                <div className="container px-3 lg:px-0 mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold">GoulHome Hub</h3>
                        <p className="text-sm">Your Partner in Premium Living</p>
                    </div>

                    <div className="flex items-center">
                        <div className="mr-6">
                            <h4 className="text-lg font-bold mb-2">Connect with Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
                            <p className="text-sm">123 Main Street, Cityville</p>
                            <p className="text-sm">info@goulhomehub.com</p>
                            <p className="text-sm">(555) 123-4567</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-500">
                    <p>&copy; {currentYear} GoulHome Hub. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;