import React from "react";
import Image from "next/image";

const AboutMe = () => {

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="text-white space-y-6">
                    <h2 className="text-4xl font-bold border-b-2 border-purple-600 pb-2 w-fit">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Hi, I’m <span className="font-bold text-purple-400">Sean Schelin</span>,
                        a Full Stack Developer passionate about building clean, modern
                        applications. I enjoy working with technologies like NextJS,
                        .NET, and Typescript, and I love learning new tools to improve
                        my craft.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        For me, the goal isn’t simply to sharpen my own skills for their own sake.
                        What matters is how those skills can serve others. To contribute, support,
                        and create space where others can thrive as well.
                    </p>

                    <p className="text-lg text-gray-300 leading-relaxed">
                        Outside of coding, I enjoy listening to and creating music, reading, gaming and miniature painting
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <Image
                        src="/images/about-me.jpg"
                        alt="Sean's profile photo"
                        width={500}
                        height={300}
                        className="rounded-lg object-cover shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
