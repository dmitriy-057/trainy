import shortId from 'shortId'
export const fetchAllUsers = () => {
    console.log('AllUsers')
};

export const fetchUserById = id => {
    console.log('fetchUserById')
};

export const updateUserById = id => {
    console.log('updateUserById')
};
 export const addUser = name => {
    const user = {
        id: shortId.generate(),
        name,
    };
    console.log(user);
 }

