export const people = [
    {
        id: 1,
        name: "Nicolas",
        age: 20,
        gender: "male"
    },
    {
        id: 2,
        name: "Jisu",
        age: 20,
        gender: "female"
    },
    {
        id: 3,
        name: "Nana",
        age: 20,
        gender: "male"
    },
    {
        id: 4,
        name: "Seulgi",
        age: 20,
        gender: "female"
    },
    {
        id: 5,
        name: "Wendy",
        age: 20,
        gender: "female"
    },
    {
        id: 6,
        name: "Joy",
        age: 20,
        gender: "female"
    },
    {
        id: 7,
        name: "bts",
        age: 20,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}