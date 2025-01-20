import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const topics = [
    {
        text: "python",
        img: "/images/python.png",
        desc: "Let's discuss everything related to Python.",
        slug: "python-discuss-new"
    },
    {
        text: "php",
        img: "/images/php.png",
        desc: "Conversations about PHP, a popular server-side scripting language.",
        slug: "php-conversations-new"
    },
    {
        text: "swift",
        img: "/images/Swift.png",
        desc: "Delve into Swift, Apple's language for iOS and macOS development.",
        slug: "swift-development-new"
    },
    {
        text: "typescript",
        img: "/images/typescript.png",
        desc: "Talk about TypeScript, a typed superset of JavaScript.",
        slug: "typescript-talk-new"
    },
    {
        text: "c#",
        img: "/images/csharp.png",
        desc: "Discuss C#, a versatile language for building a variety of applications.",
        slug: "csharp-discuss-new"
    },
    {
        text: "html & css",
        img: "/images/htmlcss.png",
        desc: "Discuss HTML & CSS, the building blocks of the web.",
        slug: "html-css-talk-new"
    },
];
const Forums = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-800 to-indigo-900 text-white">
            <div className="container mx-auto pt-10 w-full md:w-[80vw] px-4 sm:px-6">
                <h1 className="text-center text-4xl pb-8 font-bold text-yellow-400">Discussion Forums</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {topics.map((topic) => {
                        return (
                            <div key={topic.img} className="shadow-lg bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 p-4 flex flex-col py-10 px-5 justify-center items-center rounded-lg transform hover:scale-105 transition-transform duration-300">
                                <Image src={topic.img} alt="ima" width={96} height={96} className="rounded-full border-4 border-white" />
                                <h2 className="text-xl p-4 font-bold text-yellow-300">{topic.text}</h2>
                                <p className="text-center text-white">{topic.desc}</p>
                                <Link href={`/forum/${topic.slug}`}>
                                    <button className="mt-4 px-4 py-2 border bg-green-500 text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
                                        Discuss Now
                                    </button>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Forums;


