
const ok = data => {
    return {
        status: 200,
        message: 'OK',
        data
    }
}

const created = data => {
    return {
        status: 201,
        message: 'Created',
        data
    }
}

const conflict = reason => {
    return {
        status: 409,
        message: reason,
        data: null
    }
}

const internalServerError = reason => {
    return {
        status: 500,
        message: reason,
        data: null
    }
}

const notFound = reason => {
    return {
        status: 404,
        message: reason,
        data: null
    }
}

module.exports = {
    ok,
    created,
    conflict,
    internalServerError,
    notFound
}