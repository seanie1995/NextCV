import React from 'react'
import type { Education } from "../../../types/education"

type EducationProps = {
    data: Education
}

const EducationCard: React.FC<EducationProps> = ({ data }) => {
    return (
        <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 border-l-4 border-purple-600 flex flex-col justify-between transition-transform hover:scale-105 min-h-[180px]">
            <h2 className="text-2xl font-semibold mb-2">
                {data.program}
            </h2>
            <h3 className="text-xl text-purple-400 mb-3">
                {data.institution}
            </h3>
            <h4 className="text-lg text-gray-300">
                {data.startDate} - {data.endDate}
            </h4>
        </div>
    )
}

export default EducationCard
