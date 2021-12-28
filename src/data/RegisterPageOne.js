const Data = [
    [
        {
            label: 'First Name',
            name: 'firstName',
            type: 'text',
            placeholder: "Student's First Name",
            feedback: 'first name is required'
        },
        {
            label: 'Last Name',
            name: 'lastName',
            type: 'text',
            placeholder: "Student's Last Name",
            feedback: 'last name is required'
        },
        {
            label: 'Sub Division',
            name: 'subDivision',
            type: 'text',
            placeholder: "Sub Division of Origin",
            feedback: 'sub division is required'
        }
    ],
    
    [
        {
            label: 'Date of Birth',
            name: 'dateOfBirth',
            type: 'date',
            placeholder: "Date of Birth",
            feedback: 'date of birth is required'
        },
        {
            label: 'Place of Birth',
            name: 'placeOfBirth',
            type: 'text',
            placeholder: "Place of Birth",
            feedback: 'place of birth is required'
        },
        {
            label: 'Phone Number',
            name: 'phoneNumber',
            type: 'number',
            placeholder: "Phone Number",
            feedback: 'phone number is required'
        },
    ],
    
    [
        {
            label: 'Gender',
            name: 'gender',
            data: [
                {value: '', text: 'Select Gender'},
                {value: 'Male', text: 'Male'},
                {value: 'Female', text: 'Female'},
            ],
            feedback: 'gender is required'
        },
        {
            label: 'Country',
            name: 'country',
            data: [
                {value: '', text: 'Select Country'},
                {value: 'Cameroon', text: 'Cameroon'},
                {value: 'Nigeria', text: 'Nigeria'},
            ],
            feedback: 'country is required'
        },
        {
            label: 'Region',
            name: 'region',
            data: [
                {value: '', text: 'Select Region'},
                {value: 'North West', text: 'North West'},
                {value: 'Central', text: 'Central'},
            ],
            feedback: 'region is required'
        },
    ],
];
export default Data;