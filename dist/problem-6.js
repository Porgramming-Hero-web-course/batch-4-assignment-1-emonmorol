"use strict";
{
    const updateProfile = (profile, newProfile) => {
        const updatedProfile = Object.assign(Object.assign({}, profile), newProfile);
        return updatedProfile;
    };
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 22 }));
    //
}
