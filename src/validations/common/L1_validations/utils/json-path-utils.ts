import jsonpath from 'jsonpath';

function isListOfStringsOrNull(variable: any): boolean {
    return (
        Array.isArray(variable) &&
        variable.every(item => item === null || typeof item === 'string')
    );
}

function getJsonPath(
    payload: any,
    path: string,
    flattenResult: boolean = false
) {
    let output = jsonpath.query(payload, path);

    if (isListOfStringsOrNull(output)) {
        output = output.map(o => {
            if (o === null) return 'null';
            if (o === null) return 'null';
            return o;
        });
    }

    // flatten only if flag is true
    if (flattenResult) {
        output = output.flat(Infinity);
    }

    return output.length === 0 ? [] : output;
}

export default {
    getJsonPath,
};
