// const initialFormValues = {
//     // text inputs
//     name: "",
//     specIns: "", //Special Instructions
//     // dropdown
//     size: "",
//     // checkboxes
//     pineapple: false,
//     jalepeno: false,
//     mandOranges: false,
//     ham: false,
//   };

import {v4 as uuid} from 'uuid'

export default  [
    {
        id: uuid(),
        name: 'Steve',
        size: 'Medium',
        pineapple: false,
            jalepeno: false,
            mandOranges: false,
            ham: false,
        specIns: ""
    },
    {   
        id: uuid(),
        name: 'Stanklin',
        size: 'Large',
        pineapple: true,
            jalepeno: true,
            mandOranges: true,
            ham: true,
        specIns: "3000 NAPKINS NEEDED"
    }
]