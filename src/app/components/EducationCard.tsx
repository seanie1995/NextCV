import React from 'react'
import type { Education } from "../../../types/education"


type EducationProps = {
    data: Education
}

const EducationCard: React.FC<EducationProps> = ({ data }) => {
    return (
        <div>
            <section className='flex flex-col gap-3 border-b-purple-900 border-b-1 pb-3 w-screen sm:w-1/2'>
                <h2 className='text-2xl font-bold '>{data.program}</h2>
                <h3 className='text-xl'>{data.institution}</h3>
                <h4 className='text-lg '> {data.startDate} - {data.endDate}</h4>

            </section>
        </div>

    )
}

export default EducationCard
