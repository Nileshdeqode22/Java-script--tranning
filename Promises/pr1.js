promise = new Promise(function(resolve, reject) {
    const x = "Js";
    const y = "Go";
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
    
    promise.
        then(function () {
            console.log('Success, You are a Js');
        }).
        catch(function () {
            console.log('Some error has occurred');
            
        });