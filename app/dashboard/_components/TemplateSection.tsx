
import Template from '@/app/(data)/Template'
import React, { useEffect, useState } from 'react'
import TemplateCards from './TemplateCards'

export interface TEMPLATE {
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?: FORM[]
}
export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}

const TemplateSection = ({ userSearchInput }: any) => {
    const [templateList, settemplateList] = useState(Template)
    useEffect(() => {
        if (userSearchInput) {
            const filterData = Template.filter(item => item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
            settemplateList(filterData)
        } else {
            settemplateList(Template)
        }

    }, [userSearchInput]
    )
    return (
        <div className='grid grid-cols-1  md-grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
            {templateList.map((item: TEMPLATE, index: number) => (
                <TemplateCards {...item} />
            ))}
        </div>
    )
}

export default TemplateSection