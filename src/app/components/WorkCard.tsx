import React from 'react'
import type { WorkExperience } from '../../../types/work'

type WorkCardProps = {
    data: WorkExperience;
};

const WorkCard: React.FC<WorkCardProps> = ({ data }) => {
    return (

        <div>
            <section className='flex flex-col gap-3 border-b-purple-900 border-b-1 pb-3 w-screen sm:w-1/2'>
                <h3 className='text-xl font-bold'>{data.company} - {data.title}</h3>
                <h4 className='text-lg font-bold'> {data.period}</h4>
                <ul>
                    {data.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}</ul>
            </section>
        </div>

    )
}

export default WorkCard
