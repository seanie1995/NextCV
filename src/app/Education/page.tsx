import React from 'react'
import EducationCard from '../components/EducationCard'
import EducationList from "../../../public/data/education.json"
import type { Education } from '../../../types/education'

const EducationPage = () => {
    const typedEducationList: Education[] = EducationList

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header className="mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
                    Education
                </h2>
                <p className="mt-4 text-gray-400 max-w-xl">
                    My academic background and qualifications.
                </p>
            </header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {typedEducationList.map((item, index) => (
                    <EducationCard key={index} data={item} />
                ))}
            </div>
        </div>
    )
}

export default EducationPage
