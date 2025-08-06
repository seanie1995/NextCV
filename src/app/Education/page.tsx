import React from 'react'
import EducationCard from '../components/EducationCard'
import EducationList from "../../../public/data/education.json"
import type { Education } from '../../../types/education'

const EducationPage = () => {
    const typedEducationList: Education[] = EducationList
    return (
        <div>
            <h2 className="text-2xl my-10">Education</h2>
            <div className='flex gap-5 flex-col'>
                {typedEducationList.map((item, index) => (
                    <EducationCard key={index} data={item} />
                ))}
            </div>

        </div>
    )
}

export default EducationPage
