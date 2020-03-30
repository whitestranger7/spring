export const nameValidation = e => {
    let validation;
    if (e.target.value.length >= 3 || e.target.value === '') {
        validation = true;
    } else {
        validation = false;
    }

    return validation;
};

export const passwordValidation = e => {
    let validation;
    if (
        (e.target.value.length >= 4 &&
            e.target.value.search(/[a-zA-Z]/) !== -1 &&
            e.target.value.search(/[0-9]/) !== -1) ||
        e.target.value === ''
    ) {
        validation = true;
    } else {
        validation = false;
    }

    return validation;
};

export const ageValidation = e => {
    let validation;
    if (e.target.value === '0') {
        validation = false;
    } else {
        validation = true;
    }
    return validation;
};
