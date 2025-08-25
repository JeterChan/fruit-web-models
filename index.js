const createModels = (mongoose) => {
    if(!mongoose) {
        throw new Error('Mongoose instance is required');
    }

    // 驗證 mongoose 連接狀態
    if (mongoose.connection.readyState === 0) {
        console.warn('⚠️ Warning: Mongoose is not connected to database');
    }

    return {
        Product: require('./Product.js')(mongoose),
        OrderItem: require('./OrderItem.js')(mongoose),
        Order: require('./Order.js')(mongoose),
        Admin: require('./Admin.js')(mongoose)
    };
};

module.exports = createModels;