const languages = {
    'es-US': {
        online: 'online',
        offline: 'offline',
        lastSeen: 'last seen',
        today: 'today',
        at: 'at',
        weeksDay: [
            'sunday',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
        ],
    },
    'pt-BR': {
        online: 'online',
        offline: 'offline',
        lastSeen: 'visto por último',
        today: 'hoje',
        at: 'às',
        weeksDay: [
            'domingo',
            'segunda',
            'terça',
            'quarta',
            'quinta',
            'sexta',
        ],
    }
};

export default function (state = languages, action) {
    return state;
}