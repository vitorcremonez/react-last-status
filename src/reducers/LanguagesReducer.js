const languages = {
    'es-US': {
        online: 'online',
        offline: 'offline',
        lastSeen: 'last seen',
        today: 'today',
        yesterday: 'yesterday',
        at: 'at',
        weekdays: [
            'sunday',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
        ],
        months: [
            'january',
            'february',
            'marçh',
            'april',
            'may',
            'june',
            'july',
            'august',
            'september',
            'october',
            'november',
            'december',
        ],
        messages: {
            online: 'online',
            yesterday: 'yesterday',
            thisweek: 'weekdays[1] at HH:mm',
            later: 'DD/MM/YYYY at HH:mm',
        }
    },
    'pt-BR': {
        online: 'online',
        offline: 'offline',
        lastSeen: 'visto por último',
        today: 'hoje',
        yesterday: 'ontem',
        at: 'às',
        weekdays: [
            'domingo',
            'segunda',
            'terça',
            'quarta',
            'quinta',
            'sexta',
            'sábado',
        ],
        months: [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro',
        ],
    }
};

export default function (state = languages, action) {
    return state;
}