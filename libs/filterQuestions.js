import { questionAnswers } from "../config/questions.js";
import mostSimilarQuestion from "./mostSimilar.js";

export default function filterQuestions(prompt,keywords) {
    function matchesKeywords(question, answer, keywords) {
        const lowerCaseQuestion = question.toLowerCase();
        const lowerCaseAnswer = answer.toLowerCase();
        let matches = 0;

        for (const keyword of keywords) {
            const regex = new RegExp(`\\b${keyword.toLowerCase()}\\b`, "i");
            if (regex.test(lowerCaseQuestion) || regex.test(lowerCaseAnswer)) {
                matches++;
            }
        }

        return matches;
    }

    const matchedQuestions = questionAnswers.map((item) => {
        const matchCount = matchesKeywords(
            item.question,
            item.answer,
            keywords
        );
        return { ...item, matchCount };
    });

    const filteredQuestions = matchedQuestions
        .filter((item) => item.matchCount > 0)
        .sort((a, b) => b.matchCount - a.matchCount)
        .slice(0, 3);

    return filteredQuestions.length > 0 ? filteredQuestions : aboutNitRourkela;
}
