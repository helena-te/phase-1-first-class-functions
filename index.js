function receivesAFunction(callback) {
    callback();
    // exerciseRoutine(callback);
};


function returnsANamedFunction() {
    return function unicorns() {
        return `sparkles`;
    };
    
};

function returnsAnAnonymousFunction() {
    return function () {
        return `toast`
    };
};
