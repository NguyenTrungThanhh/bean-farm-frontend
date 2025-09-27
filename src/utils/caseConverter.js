const toCamel = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map(toCamel);
    } else if (obj !== null && obj.constructor === Object) {
        return Object.keys(obj).reduce((acc, key) => {
            // Giữ nguyên _id
            if (key === '_id') {
                acc[key] = toCamel(obj[key]);
                return acc;
            }

            const camelKey = key.replace(/([-_][a-z])/gi, (s) => s.toUpperCase().replace('-', '').replace('_', ''));
            acc[camelKey] = toCamel(obj[key]);
            return acc;
        }, {});
    }
    return obj;
};

const toSnake = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map(toSnake);
    } else if (obj !== null && obj.constructor === Object) {
        return Object.keys(obj).reduce((acc, key) => {
            const snakeKey = key
                .replace(/([A-Z])/g, '_$1')
                .toLowerCase()
                .replace(/^_/, ''); // xóa _ ở đầu nếu có
            acc[snakeKey] = toSnake(obj[key]);
            return acc;
        }, {});
    }
    return obj;
};

export { toCamel, toSnake };
