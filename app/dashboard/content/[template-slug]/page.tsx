'use client'
import React from 'react'
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateSection';
import Template from '@/app/(data)/Template';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
interface PROPS {
    params: {
        'template-slug': string
    }
}

const CreateNewContent = (props: PROPS) => {
    const generateAiContent = (formData: any) => { }
    const SelectedTemplate: TEMPLATE | undefined = Template?.find((item) => item.slug == props.params['template-slug'])
    return (
        <div className='p-5'>
            <Link href={'/dashboard'} > <Button><ArrowLeft />Back</Button></Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-5'>
                {/* from section  */}
                <FormSection SelectedTemplate={SelectedTemplate} userFormInput={(v: any) => generateAiContent(v)} />

                {/* outputSection  */}
                <div className='col-span-2'>
                    <OutputSection />
                </div>
            </div>
        </div>
    )
}

export default CreateNewContent