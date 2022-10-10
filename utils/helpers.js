const toDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString();
};

module.exports = {
    toDate,
}