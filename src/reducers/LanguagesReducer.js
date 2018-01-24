const languages = {
    'en': {
        now: `[online]`,
        sameDay: `[today] [at] HH:mm`,
        lastDay: `[yesterday] [at] HH:mm`,
        lastWeek: `dddd [at] HH:mm`,
        sameElse: `L [at] HH:mm`,
    },
    'pt-BR': {
        now: `[online]`,
        sameDay: `[hoje] [às] HH:mm`,
        lastDay: `[ontem] [às] HH:mm`,
        lastWeek: `dddd [às] HH:mm`,
        sameElse: `L [às] HH:mm`,
    },
};

export default function (state = languages, action) {
    return state;
}