import extractKeywords from "./extractKeywords.js";
import filterQuestions from "./filterQuestions.js";
export default function generateQuestion(question) {
    const keywords = extractKeywords(question);
    const questionAnswers = filterQuestions(question,keywords);
    let completeParts = [];
    const dataArray = questionAnswers;

    for (let i = 0; i < dataArray.length; i++) {
        completeParts.push({
            text: `input: ${dataArray[i].question}`,
        });
        completeParts.push({
            text: `output: ${dataArray[i].answer}`,
        });
    }
    completeParts.push({
        text: `input: ${question}`,
    });
    return completeParts;
}
