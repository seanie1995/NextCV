import React from 'react'
import type { Skills } from "../../../types/skills"

type SkillsCardProps = {
    data: Skills
}

const SkillsCard: React.FC<SkillsCardProps> = ({ data }) => {
    return (
        <div className='border-1 sm:w-1/2 max-h-1/2 p-2'>
            <h3 className='border-b-1 text-2xl'>{data.category}</h3>
            <ul className='flex justify-between gap-2 flex-col'>
                {data.skills.map((item, index) => (
                    <li className='text-xl' key={index}>{item}</li>
                ))}</ul>

        </div>
    )
}

export default SkillsCard
