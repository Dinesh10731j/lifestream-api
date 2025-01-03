const brain = require("brain.js");
const trainingData = require("../utils/trainingData")
const chatBot = async (req, res) => {
   
    try {
        const net = new brain.recurrent.LSTM();
        net.train(trainingData, {
           
                iterations: 2000,
                log:true,
                logPeriod: 100,
                learningRate: 0.01,
                errorThresh: 0.02
        });
        const { question } = req.body;


        const response = net.run(question) || "I'm not sure. Can you rephrase?";;


        res.status(200).json({ messsage: response, success: true });


    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error?.message

        })
    }
}


module.exports = chatBot;