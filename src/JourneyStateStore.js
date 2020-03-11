import { writable, derived } from 'svelte/store';

export const questions = writable([]);

export const emailAddress = writable({
    value: null,
    submitted: false,
});

export const situation = writable({
    value: null,
    submitted: false,
});

export const displayQuestions = derived([
        questions,
        emailAddress,
        situation,
    ],
    ([
            $questions,
            $emailAddress,
            $situation
     ]) => {
        const questionsToShow = [];

        for (const question of $questions) {
            if (question.questionKey === 'EmailAddress' && $emailAddress.submitted) {
                questionsToShow.push(question);
            } else if (question.questionKey === 'Situation' && $situation.submitted) {
                questionsToShow.push(question);
            } else {
                questionsToShow.push(question);
                break;
            }
        }

        return questionsToShow;
    },
);
