'use client'
import React, { useState } from 'react';
import FormSection from '../_components/FormsSection'; // Adjusted import
import OutputSection from '../_components/OutputSection'; // Adjusted import
import { TEMPLATE } from '../../_components/TemplateSection';
import Template from '@/app/(data)/Template';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModal';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { aiOutput } from '@/utils/schema';
interface PROPS {
    params: {
        'template-slug': string
    }
}

const CreateNewContent = (props: PROPS) => {
    const SelectedTemplate: TEMPLATE | undefined = Template?.find((item) => item.slug == props.params['template-slug'])
    const [AiOutput, setAiOutput] = useState<string>('')
    const [loading, setloading] = useState(false);
    const { user } = useUser();
    const generateAiContent = async (formData: any) => {
        setloading(true);
        const SelectedPrompt = SelectedTemplate?.aiPrompt;
        const FinalAiPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
        const result = await chatSession.sendMessage(FinalAiPrompt)
        setAiOutput(result?.response.text())
        await saveInDb(formData, SelectedTemplate?.slug, result?.response.text())
        setloading(false);
    }
    const saveInDb = async (
        formData: any,
        slug: string | undefined,
        aiRes: string | undefined
    ) => {
        // Ensure values are defined or fallback to a default value
        const formDataString = formData || ''; // Default to empty string if undefined
        const templateSlug = slug || ''; // Default to empty string if undefined
        const aiResponse = aiRes || ''; // Default to empty string if undefined
        const createdBy = user?.primaryEmailAddress?.emailAddress || ''; // Fallback for user email
        const createdAt = moment().format('YYYY-MM-DD') || ''; // Always have a date

        // Insert data into the database
        const result = await db.insert(aiOutput).values({
            formData: formDataString,
            templateSlug: templateSlug,
            aiResponse: aiResponse,
            createdBy: createdBy,
            createdAt: createdAt,
        });

        console.log(result); // Log the result to verify the insert
    };


    return (
        <div className='p-5'>
            <Link href={'/dashboard'} > <Button><ArrowLeft />Back</Button></Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-5'>
                {/* from section  */}
                <FormSection SelectedTemplate={SelectedTemplate} userFormInput={(v: any) => generateAiContent(v)} loading={loading} />

                {/* outputSection  */}
                <div className='col-span-2'>
                    <OutputSection AiOutput={AiOutput} />
                </div>
            </div>
        </div>
    )
}

export default CreateNewContent