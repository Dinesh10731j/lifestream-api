const brain = require('brain.js');
const fs = require("fs");
const path = require("path");
const trainingData = require("../utils/trainingData");

const MODEL_PATH = path.resolve(__dirname, "../model/trainedModel.json");


let net;

const trainModel = () => {
    console.log("Starting model training...");
    net = new brain.recurrent.LSTM({hiddenLayers:[10,10]});

    // Train the model
    net.train(trainingData, {
        iterations:2000,         
        log: true,
        logPeriod: 20,              
        learningRate: 0.12,         
        errorThresh: 0.025,
       
                 
    });

    const trainedModel = net.toJSON();
    fs.writeFileSync(MODEL_PATH, JSON.stringify(trainedModel), "utf-8");
    console.log("Model trained and saved successfully.");
};

const loadModel = () => {
    try {
        if (fs.existsSync(MODEL_PATH)) {
            const modelData = fs.readFileSync(MODEL_PATH, "utf-8");
            
            if (!modelData.trim()) {
                throw new Error("Model file is empty. Retraining...");
            }
            
            net = new brain.recurrent.LSTM();
            net.fromJSON(JSON.parse(modelData));
            console.log("Model loaded from file.");
        } else {
            console.log("No pre-trained model found. Starting training...");
            trainModel();
        }
    } catch (error) {
        console.error("Failed to load model:", error.message);
        
      
        if (fs.existsSync(MODEL_PATH)) {
            fs.unlinkSync(MODEL_PATH);
            console.log("Corrupt model deleted. Retraining...");
        }
        
        trainModel();
    }
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