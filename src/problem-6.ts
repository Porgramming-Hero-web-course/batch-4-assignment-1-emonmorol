{
    //

    interface Profile{
        name: string;
        age: number;
        email: string;
    }

    const updateProfile = (profile: Profile, newProfile:Partial<Profile>) =>{
        const updatedProfile: Profile = {...profile,...newProfile};
        return updatedProfile;
    }
    
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age:22 }));

    //
}