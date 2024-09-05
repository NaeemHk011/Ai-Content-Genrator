'use client'
import React, { useState } from 'react'
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateSection';
import Template from '@/app/(data)/Template';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModal';
interface PROPS {
    params: {
        'template-slug': string
    }
}

const CreateNewContent = (props: PROPS) => {
    const [aiOutput, setaiOutput] = useState<String>('')
    const [loading, setloading] = useState(false);
    const generateAiContent = async (formData: any) => {
        setloading(true);
        const SelectedPrompt = SelectedTemplate?.aiPrompt;
        const FinalAiPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
        const result = await chatSession.sendMessage(FinalAiPrompt)
        console.log(result.response.text());
        setaiOutput(result?.response.text)
        setloading(false);
    }
    const SelectedTemplate: TEMPLATE | undefined = Template?.find((item) => item.slug == props.params['template-slug'])
    return (
        <div className='p-5'>
            <Link href={'/dashboard'} > <Button><ArrowLeft />Back</Button></Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-5'>
                {/* from section  */}
                <FormSection SelectedTemplate={SelectedTemplate} userFormInput={(v: any) => generateAiContent(v)} loading={loading} />

                {/* outputSection  */}
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    )
}

export default CreateNewContent