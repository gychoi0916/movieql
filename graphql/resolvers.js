const nicolas = {
    name: "Nicolas",
    age: 20,
    gender: "male"
};
const resolvers = {
    Query: {
        person: () => nicolas
    }
}

export default resolvers;