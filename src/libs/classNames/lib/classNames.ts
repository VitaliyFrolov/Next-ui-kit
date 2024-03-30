export function classNames(...className: any) {
    const argument = className;
    const str = argument.flat();
    const classNames = `${str.join(' ')}`;

    return classNames
};