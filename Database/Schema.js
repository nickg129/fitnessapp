// Should represent our basic user with fully collected data

const schema = {
    id: 0000001,
    firstName: 'Dummy',
    lastName: 'user',
    email: 'dummy.user@gmail.com',
    password: 'hunter1',
    biometrics: {
        height: [64, 'in'],
        weight: [180, 'lbs'],
        gender: 'male',
        age: '27',
    },
    lifeStyle: {
        sleep: {
            hours: 7,
            quality: 'restful',
        },
        diet: {
            hqProtein: {
                percent: 10,
                soucres: ['Chicken','Ground Turkey','Protein Powder']
            },
            lqProtein: {
                percent: 12,
                sources: ['Fried Chicken','Fast Food Burgers']
            },
            hqCarbs: {},
            lqCarbs: {},
            hqFats: {},
            lqFats: {},
            sugars: {},
            suppliments: {},

        },
        activity: {
            intense: [
                {   hours: 2,
                    activity: "Gym Lifting",
                },
            ],
            moderate: [],
            lowImpact: [],
        },
        alcohol: {
            days: 3,
            peakDrinks: 4,
            averageDrinks: 2,
        },
        smoking: {
            days: 2,
            total: [5, 'cigs'],
        },
        pharma: {
            medications: [],
            substances: [],
        },
        wearables: {
            fitbit: false,
            myzone: false,
        },
    },
    notes : [
        {   Date: '1/1/2018', 
            Content: 'Sick gainz today',
        },
        {   Date: '1/2/2018',
            Content: 'Back at it again with the sick gainz',
        },
    ],
    workouts: ['For time \n 100 push ups \n', 'AMRAP 12 \n push ups'],
}