function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        
        const error = false;

        if (!error) {
            resolve (`{ status: 200, body: "Success"}`)
        } else{
            reject(new Error(("The fake API is not working currently")))
        };
        
    });
}
