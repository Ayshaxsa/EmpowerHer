const profile = {
    name : "username",
    age : 19,
    address : {
        city : "x",
        pincode : 8098
    }
};

const updates = {
    age : 21,
    address : {
        city : "y",
        pincode : 9877,
        country : "India"
    }
};

const mergedprof = {
    ...profile,
    ...updates,
    address: {
        ...profile.address,
        ...updates.address
    }
}

console.log(mergedprof)