const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
        sister: 'jane',
    },
};

// const firstname = bob.first;
// const lastname = bob.last;
// const sister = bob.siblings.sister;

const last = 'some value'

const { last: shakeAndBake, first, city, zip, siblings:{sister:favoriteSibling}} = bob

// console.log(first, city,zip, shakeAndBake, favoriteSibling)

function printPerson(person) {
    const {first,last} = person
    console.log(first,last)
}

printPerson(bob)
