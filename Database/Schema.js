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
        sleep: {},
        diet: {},
        activity: {},
        alcohol: {},
        smoking: {},
        pharma: {
            medications: {},
            substances: {},
        },
        wearables: {},
    },
    notes : {},
    workouts: {},
}