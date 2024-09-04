import React from 'react'
import { TEMPLATE } from '../../_components/TemplateSection';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface PROPS {
    SelectedTemplate?: TEMPLATE;

}

const FormSection = ({ SelectedTemplate }: PROPS) => {
    return (
        <div className='p-5 shadow-md border rounded-lg'>
            {/* @ts-ignore  */}
            <Image src={SelectedTemplate?.icon}
                alt='icon' width={70} height={70} />
            <h2 className='text-2xl font-bold mb-2 text-primary'>{SelectedTemplate?.name}</h2>
            <p>{SelectedTemplate?.desc}</p>
            <form className='mt-6'>
                {SelectedTemplate?.form?.map((item, index) => (
                    <div className='my-2 flex flex-col gap-2 mb-7'>
                        <label className='font-bold'>{item.label}</label>
                        {item.field == 'input' ?
                            <Input /> :
                            item.field == 'textarea' ?
                                <Textarea /> : null
                        }
                    </div>
                ))}
                <Button className='w-full py-6 mt-4'>Generate Content</Button>
            </form>
        </div>
    )
}

export default FormSection