export type sliderItem = {
    url: string;
    title: string;
};

export interface SliderContextValue {
    goToSlide: (number: number) => void;
    changeSlide: (direction?: number) => void;
    slideCount: number;
    slideNumber: number;
    items: sliderItem[];
};