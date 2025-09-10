import React from 'react'
import EducationCard from '../components/EducationCard'
import EducationList from "../../../public/data/education.json"
import type { Education } from '../../../types/education'

const EducationPage = () => {
    const typedEducationList: Education[] = EducationList

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-4xl font-bold mb-10 border-b-2 border-purple-600 pb-2 w-fit">
                Education
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {typedEducationList.map((item, index) => (
                    <EducationCard key={index} data={item} />
                ))}
            </div>
        </div>
    )
}

export default EducationPage
