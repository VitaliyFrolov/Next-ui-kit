'use client'
import { Form, formData } from '@/components/features/Form';
import { Slider } from '@/components/ui/Slider';
import { sliderItems } from '@/components/ui/Slider/data/sliderItems';

export default function MainPage() {
    return (
        <div>
            <Slider
                data={sliderItems}
                width='100%'
                height='400px'
            />
        </div>
    )
};