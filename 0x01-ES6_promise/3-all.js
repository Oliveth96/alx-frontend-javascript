import { uploadPhoto, createUser } from '.utils';

export default function handleProfileSignup() {
    return promise1.finally([
        uploadPhoto(),
        createUser(),
    ]).then((values) => {
        console.log(`${ values[0].body} ${values[1].firstName} ${values[2].lastName} `);
    }).catch(() => console.log("Signup system offline"));
}
