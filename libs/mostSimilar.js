import levenshtein from "fast-levenshtein";
import { questionAnswers} from "../config/questions.js";

export default function mostSimilarQuestion(prompt, topN = 3) {
    if (questionAnswers.length === 0) {
        return aboutNitRourkela;
    }

    const similarityScores = questionAnswers.map((obj) => {
        const distance = levenshtein.get(prompt, obj.question);
        const maxLen = Math.max(prompt.length, obj.question.length);
        const similarity = (1 - distance / maxLen) * 100;
        return { ...obj, similarity };
    });

    similarityScores.sort((a, b) => b.similarity - a.similarity);

    const topNQuestions = similarityScores.slice(0, topN)[0];
    console.log(topNQuestions)
    return topNQuestions;
    
}