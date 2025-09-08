'use client'

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <section className="flex flex-col items-center gap-6">

        <div className="flex flex-col items-center gap-4">
          <Image
            src="/images/ProfPhoto.jpg"
            alt="Sean's profile photo"
            width={300}
            height={300}
            className="rounded-full w-72 h-72 object-cover"
          />

          <div className="text-center flex flex-col gap-2">
            <h2 className="text-xl">Sean Schelin</h2>
            <h1 className="text-5xl">Full Stack Developer</h1>
            <p className="text-xl">
              Recent graduate from{" "}
              <a
                className="font-bold hover:text-purple-900 hover:underline transition duration-300 ease-in-out"
                href="https://chasacademy.se/"
              >
                Chas Academy
              </a>
            </p>
            <p className="text-xl">Studied Full Stack Development .NET</p>
            <p className="font-bold">Find me on:</p>
            <ul className="flex flex-col gap-1">
              <li>
                <a
                  className="font-bold hover:text-purple-900 underline transition duration-300 ease-in-out"
                  href="https://www.linkedin.com/in/sean-harry-schelin-057227179/"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="font-bold hover:text-purple-900 underline transition duration-300 ease-in-out"
                  href="https://github.com/seanie1995"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>

      </section>
    </main>
  );
}
