export function deferize(fn, timeout) {
    let promise = null;
    let query = "";

    return (q) => {
        query = q;
        if (!promise) {
            promise = new Promise(resolve => {
                window.setTimeout(_ => {
                    resolve(fn(query));
                    promise = null;
                }, timeout);
            });
        }

        return promise;
    }
}
