export const getWhatsappLink = (text) => {
    const numbers = [
        '5194042424',
    ];

    const message = text ?? 'Olá! Estou vindo do site Personal Câmbio e gostaria de fazer uma cotação.';
    const encodedMessage = encodeURIComponent(message);

    const selectedNumber = numbers[0];

    return `https://wa.me/${selectedNumber}?text=${encodedMessage}`;
};

export const sendGTMConversion = () => {
    // window.gtag('event', 'conversion', {
    //     'send_to': 'AW-/czjOCKGfmtwaEICLxJBA',
    //     'value': 1.0,
    // });
    return false;
};