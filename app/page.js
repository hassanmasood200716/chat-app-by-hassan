import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>PieChat - Connect with the World</title>
        <meta name="description" content="PieChat is your go-to chat app for seamless communication." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Welcome to <span className="text-yellow-300 ">PieChat</span>
          </h1>
          <p className="text-lg md:text-2xl mb-12">
            Connect, chat, and share with people around the globe in real-time.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
            <a href="/forums" className="bg-yellow-300 text-blue-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400">
              Chat On Forums
            </a>
            <a href="/aboutus" className="bg-white text-blue-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200">
               About Us
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export const metadata = {
  title: 'Home - PieChat',
  description: 'Pie chat helps you to connect with people of your choices',
};
