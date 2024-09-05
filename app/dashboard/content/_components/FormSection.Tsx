'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateSection';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface PROPS {
    SelectedTemplate?: TEMPLATE;

}

const FormSection = ({ SelectedTemplate }: PROPS) => {
    const [formData, setformData] = useState<any>()
    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setformData({ ...formData, [name]: value })

    }
    const OnSubmit = (e: any) => {
        e.preventDefault();

    }
    return (
        <div className='p-5 shadow-md border rounded-lg bg-white'>
            {/* @ts-ignore  */}
            <Image src={SelectedTemplate?.icon}
                alt='icon' width={70} height={70} />
            <h2 className='text-2xl font-bold mb-2 text-primary'>{SelectedTemplate?.name}</h2>
            <p>{SelectedTemplate?.desc}</p>
            <form className='mt-6' onSubmit={OnSubmit}>
                {SelectedTemplate?.form?.map((item, index) => (
                    <div className='my-2 flex flex-col gap-2 mb-7'>
                        <label className='font-bold'>{item.label}</label>
                        {item.field == 'input' ?
                            <Input name={item.name} required={item.required} onChange={handleInputChange} /> :
                            item.field == 'textarea' ?
                                <Textarea name={item.name} required={item.required} onChange={handleInputChange} /> : null
                        }
                    </div>
                ))}
                <Button type='submit' className='w-full py-6 items-center'>Generate Content</Button>
            </form>
        </div>
    )
}

export default FormSection