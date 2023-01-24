import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName,lastName,fileName) {
    return Promise.allSettled([
        signUpUser(fileName, lastName),
        uploadPhoto(fileName)
    ]).then((result) => {
        const data = [];

        result.forEach ((index) => {
            if (index.status === 'fulfilled') {
                data.push({
                    status: index.status,
                    value: index.value,
                });
            } else{
                data.push({
                    status: index.status,
                    value: `Error: ${ index.reason.message} `,
                });
            }
        });
        return data;
    });
}
