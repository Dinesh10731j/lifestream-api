const brain = require("brain.js");
const fs = require("fs");
const path = require("path");
const trainingData = require("../utils/trainingData");

const MODEL_PATH = path.resolve(__dirname, "../model/chatBotModel.json");
const BACKUP_PATH = `${MODEL_PATH}.bak`;
let net;


const trainModel = () => {
    console.log("Starting model training...");
    net = new brain.recurrent.LSTM({ hiddenLayers: [15, 15] });  

    net.train(trainingData, {
        iterations: 5000, 
        log: true,
        logPeriod: 100,   
        learningRate: 0.15,  
        errorThresh: 0.015, 
        callback: () => {
            fs.writeFileSync(MODEL_PATH, JSON.stringify(net.toJSON()), "utf-8");
            console.log("Checkpoint saved.");
        },
        callbackPeriod: 500  
    });

    const trainedModel = net.toJSON();
    if (trainedModel && Object.keys(trainedModel).length > 0) {
        fs.writeFileSync(MODEL_PATH, JSON.stringify(trainedModel), "utf-8");
        console.log("Model trained and saved successfully.");
    } else {
        console.error("Training produced an invalid model. Not saving.");
    }
};


const loadModel = () => {
    let retryCount = 0;
    const maxRetries = 3;

    while (retryCount < maxRetries) {
        try {
            if (fs.existsSync(MODEL_PATH)) {
                const modelData = fs.readFileSync(MODEL_PATH, "utf-8");
                net = new brain.recurrent.LSTM();
                net.fromJSON(JSON.parse(modelData));
                console.log("Model loaded successfully.");
                return;
            }
        } catch (error) {
            retryCount++;
            console.error(`Model load failed. Attempt ${retryCount}/${maxRetries}`);
        }
    }

    if (fs.existsSync(MODEL_PATH)) {
        fs.renameSync(MODEL_PATH, BACKUP_PATH);
        console.log(`Corrupt model backed up as ${BACKUP_PATH}. Retraining...`);
    }
    trainModel();
};

const promptDeleteModel = () => {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question("Model appears corrupt. Do you want to delete it and retrain? (y/n) ", (answer) => {
        if (answer.toLowerCase() === "y") {
            fs.unlinkSync(MODEL_PATH);
            console.log("Corrupt model deleted. Retraining...");
            trainModel();
        } else {
            console.log("Model retained. Please inspect manually.");
        }
        readline.close();
    });
};

loadModel();

const chatBot = (req, res) => {
    try {
        const question = req.body.question?.toLowerCase().trim();

        if (!question) {
            return res.status(400).json({
                message: "Question is required",
                success: false
            });
        }

        const response = net.run(question) || "I'm not sure. Can you rephrase or contact support?";

        res.status(200).json({
            message: response,
            success: true
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        });
    }
};

module.exports = chatBot;
