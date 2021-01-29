import * as yup from 'yup'

export default yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 chars long'),
    specIns: yup
        .string(),
    size: yup
        .string()
        .required("Size is required"),
    pineapple: yup
        .boolean()
        .oneOf([true]),
    jalepeno: yup
        .boolean()
        .oneOf([true]),
    mandOranges: yup
        .boolean()
        .oneOf([true]),
    ham:yup
        .boolean()
        .oneOf([true]),
    
})