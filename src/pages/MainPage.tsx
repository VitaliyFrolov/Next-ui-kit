import { Form, formData } from '@/components/Form';
import styles from './MainPage.module.scss';

export default function MainPage() {
    return (
        <div>
            <Form
                model={formData}
            />
        </div>
    )
};