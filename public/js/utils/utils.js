const renderWordResponse = (res) => {
    if (!res) {
        throw Error ('response not valid')
    };
    
    if (!res.length) {
        throw Error ('empty response')
    };

    console.log(res.task)
}