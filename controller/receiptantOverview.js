const UserSignupModel = require("../model/signup.model");

const receiptantOverview = async (req, res) => {
    try {
       
        const receiptantMonthlyData = await UserSignupModel.aggregate([
            { $match: { role: 'recipient' } }, 
            {
                $group: {
                    _id: {
                        year: { $year: "$createdAt" }, 
                        month: { $month: "$createdAt" }, 
                    },
                    count: { $sum: 1 }, 
                },
            },
            { $sort: { "_id.year": 1, "_id.month": 1 } }, 
        ]);

        
        const formattedData = receiptantMonthlyData.map(item => ({
            year: item._id.year,
            month: item._id.month,
            count: item.count,
        }));

        const receiptantMonthly = await UserSignupModel.aggregate([
            { $match: { role: 'receiptant' } }, ])

        res.status(200).json({
            success: true,
            data: formattedData,
           
        });
    } catch (error) {
        res.status(500).json({
            msg: "Internal server error",
            success: false,
            error: error.message,
        });
    }
};

module.exports = receiptantOverview;
