export class Validator {
    validateUsername(username) {
        const pattern = /^(?!.*[0-9]{4})[a-zA-Z][a-zA-Z0-9_-]*[A-Za-z]$/;
        return pattern.test(username);
    }
}