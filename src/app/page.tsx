'use client'

import Image from "next/image";

export default function Home() {
  return (
    <main className="my-10">
      <section className="flex justify-evenly sm:flex-row flex-col items-center">

        <div className="flex gap-2 flex-col">
          <h1 className="text-4xl">I'm Sean Schelin</h1>
          <h2 className="text-xl">A full stack developer looking for his first role</h2>
          <p className="text-xl ">Recent graduate from <a className="font-bold hover:text-purple-900 hover:underline transition duration-300 ease-in-out" href="https://chasacademy.se/">Chas Academy</a> </p>
          <p className="text-xl">Studied Full Stack Development .NET </p>
          <p className="text-xl">Former Live Sound Engineer </p>
          <p className="text-xl">Fan of muted pastels</p>
          <p className="font-bold">Find me on:</p>
          <ul>
            <li><a className=" font-bold hover:text-purple-900 underline transition duration-300 ease-in-out" href="https://www.linkedin.com/in/sean-harry-schelin-057227179/">LinkedIn</a></li>
            <li><a className=" font-bold hover:text-purple-900 underline transition duration-300 ease-in-out" href="https://github.com/seanie1995">Github</a></li>
          </ul>
        </div>
        <div className="mt-5 sm:mt-0">
          <Image
            src="/images/ProfPhoto.jpg"
            alt="Sean's profile photo"
            height={400}
            width={400}
            className="rounded-4xl"
          />
        </div>
      </section>

    </main>

  );
}
