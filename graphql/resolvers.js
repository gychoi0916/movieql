import { people, getById } from "./db";

const resolvers = {
    Query: {
        people: () => people,
        person: (_,{id}) =>  getById(id)
        // person: () => nicolas
    }
}

export default resolvers;