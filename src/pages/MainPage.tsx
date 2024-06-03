'use client'
import { Form, formData } from '@/components/widget/Form';

export default function MainPage() {
    return (
        <div>
            <Form
                model={formData}
            />
        </div>
    )
};