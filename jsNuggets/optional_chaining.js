const people = [
    {
        name : 'bob',
        location: { street: '123 main street',
        timezone : { offset: '+7:00'}},
    },{
        name: 'susan',
        location: { street: '123 Apple Street',
        timezone: {offset: '+9:00'}},
    },
]

people.foreach((person) => {
    // console.log(person.location
    //     && person.location.timezone 
    //     && person.location.timezone.offset
    // )
    console.log(person?.location?.timezone?.offset) // optional chaning
})