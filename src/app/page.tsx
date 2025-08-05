'use client'

import Image from "next/image";

export default function Home() {
  return (
    <main className="my-10">
      <section className="flex justify-evenly">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-4xl">I'm Sean Schelin</h1>

          <Image
            src="/images/ProfPhoto.jpg"
            alt="Sean's profile photo"
            height={400}
            width={400}
          />
        </div>
        <div className="mt-10 flex gap-2 flex-col">
          <h2 className="text-xl">A full stack developer looking for his first role</h2>
          <p className="text-xl ">Recent graduate from <a className="font-bold hover:text-blue-900 hover:underline transition duration-300 ease-in-out" href="https://chasacademy.se/">Chas Academy</a> </p>
          <p className="text-xl">Studied Full Stack Development .NET </p>
          <p className="text-xl">Former Live Sound Engineer </p>
          <p className="text-xl">Fan of muted pastels</p>
          <p className="font-bold">Find me on:</p>
          <ul>
            <li><a className=" font-bold hover:text-blue-900 transition duration-300 ease-in-out" href="https://www.linkedin.com/in/sean-harry-schelin-057227179/">LinkedIn</a></li>
            <li><a className=" font-bold hover:text-blue-900  transition duration-300 ease-in-out" href="https://github.com/seanie1995">Github</a></li>
          </ul>
        </div>
      </section>

    </main>

  );
}
