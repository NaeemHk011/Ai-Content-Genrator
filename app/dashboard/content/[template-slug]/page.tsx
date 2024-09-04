import React from 'react'

import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateSection';
import Template from '@/app/(data)/Template';
interface PROPS {
    params: {
        'template-slug': string
    }
}

const CreateNewContent = (props: PROPS) => {
    const SelectedTemplate: TEMPLATE | undefined = Template?.find((item) => item.slug == props.params['template-slug'])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
            {/* from section  */}
            <FormSection SelectedTemplate={SelectedTemplate} />

            {/* outputSection  */}
            <OutputSection />
        </div>
    )
}

export default CreateNewContent