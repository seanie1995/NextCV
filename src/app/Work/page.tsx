import React from 'react'

const Work = () => {
    return (
        <div>
            <h2 className='text-2xl my-10'>Work Experience</h2>
            <div className='flex gap-10 flex-wrap flex-col '>
                <section>
                    <h3 className='text-xl font-bold'>FemClinic – Frontend Developer (Internship)</h3>
                    <h4 className='text-lg'> July 2025 – Present</h4>
                    <ul>
                        <li>Actively participating in the development and improvement of FemClinic's website.</li>
                        <li>Implementing modern frontend technologies to create an intuitive and accessible digital experience.</li>
                    </ul>
                </section>

                <section>
                    <h3 className='text-xl font-bold'>PositionEtt – Junior Full Stack Developer (Internship)</h3>
                    <h4 className='text-lg'>December 2024 – May 2025</h4>
                    <ul>
                        <li>Developed dynamic components such as graphs, menus, and navbars in React for upcoming versions of PositionEtt's applications.</li>
                        <li>Built a mobile version of the internal time tracking system using React Native.</li>
                    </ul>
                </section>

                <section>
                    <h3 className='text-xl font-bold'>A&amp;E Labs – Junior Developer (Internship)</h3>
                    <h4 className='text-lg'>June 2024 – September 2024</h4>
                    <ul>
                        <li>Contributed to the development of a mobile-friendly web application in React with Firebase as the backend solution for authentication and data storage.</li>
                    </ul>
                </section>

                <section>
                    <h3 className='text-xl font-bold'>Freelance/Various Employers – Sound Technician</h3>
                    <h4 className='text-lg'>September 2019 – October 2022</h4>
                    <ul>
                        <li>Responsible for sound at various concerts, events, and performances.</li>
                        <li>Managed sound systems, rigging, and technical operations during events.</li>
                        <li>Also worked with artist services and often acted as stage manager.</li>
                    </ul>
                </section></div>
        </div>
    )
}

export default Work
