import Head from 'next/head';

const Aboutus = () => {
    return (
        <>
            <Head>
                <title>About Us | PieChat</title>
            </Head>
            <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white p-8 overflow-x-hidden">
                <div className="container mx-auto bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-800 shadow-lg rounded-lg p-10 transform hover:scale-105 transition-transform duration-500">
                    <h1 className="text-5xl font-extrabold text-center mb-8">
                        About <span className="text-yellow-500">PieChat</span>
                    </h1>
                    <p className="text-lg mb-6 leading-relaxed">
                        Welcome to <span className="text-yellow-400">PieChat</span>, a cutting-edge global chat application crafted by 
                        <span className="text-pink-400 font-bold text-lg"> M. Hassan Masood</span>. Our platform connects users from all corners of the world, 
                        fostering global conversations and vibrant discussions through diverse forums.
                    </p>
                    <p className="text-lg mb-6 leading-relaxed">
                        PieChat isn't just another chat app; it's a futuristic communication hub that brings people together, empowering them to share knowledge, 
                        ideas, and insights seamlessly. Whether you're a tech enthusiast, a creative mind, or someone seeking connection, 
                        <span className="text-green-400"> PieChat</span> is the perfect place to engage and collaborate.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Experience the future of communication with <span className="text-yellow-400">PieChat</span>—where every conversation matters and every voice is heard. 
                        Join our growing community and be a part of the global revolution in digital communication.
                    </p>
                    <div className="mt-10 text-center">
                        <p className="text-sm text-gray-300">© {new Date().getFullYear()} PieChat. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aboutus;
