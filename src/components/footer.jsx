export default function Footer() {
    return (
        <footer className="bg-green-700 text-white p-4 mt-0 border-2 border-green-800">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-sm">© 2023 Plant Blogs. All rights reserved.</p>
                <p className="text-sm">Created By M Huzaifa Alam</p>
                <p className="text-sm">Follow us on social media!</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="hover:text-yellow-400">Facebook</a>
                    <a href="#" className="hover:text-yellow-400">Twitter</a>
                    <a href="#" className="hover:text-yellow-400">Instagram</a>
                </div>
            </div>
        </footer>
    );
}