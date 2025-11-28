import express from "express";
import OpenAI from "openai";

const router = express.Router();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
    try {
        const { countryA, countryB, studentAnswer } = req.body;
        const prompt = `
            Grade an AP World History compare-and-contrast response:
            Country A: ${countryA}
            Country B: ${countryB}
            Student answer: ${studentAnswer}
            Rubric:
            - 1 valid similarity with evidence
            - 1 valid difference with evidence
            - Accuracy
            - Historical Reasoning
            - Clarity
            
            Return strictly JSON:
            {
                "score": number,
                "similarity": string,
                "difference": string,
                "strengths": string,
                "areasToImprove": string
            }
        `;

        const result = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            response_format: { type: "json_object" },
        });

        const json = JSON.parse(result.choices[0].message.content);

        res.json(json);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "AI grading failed" });
    }
});