const horoscopes = {
    aries: {
        overall: "2026 is a bold and energetic year for Aries.",
        career: "New leadership opportunities may arise. Take initiative.",
        love: "Passion runs high, but patience is needed in relationships.",
        finance: "Be cautious with impulsive spending.",
        health: "Stay active but avoid burnout."
    },
    taurus: {
        overall: "2026 focuses on stability and personal growth.",
        career: "Slow but steady progress brings rewards.",
        love: "Emotional security strengthens relationships.",
        finance: "Good year for saving and investments.",
        health: "Balance work with proper rest."
    },
    gemini: {
        overall: "A year full of communication and learning.",
        career: "Networking opens new doors.",
        love: "Honest conversations improve connections.",
        finance: "Unexpected expenses may appear.",
        health: "Mental wellness should be prioritized."
    },
    cancer: {
        overall: "Emotional clarity guides your decisions.",
        career: "Support from colleagues boosts confidence.",
        love: "Family and love life deepen.",
        finance: "Budgeting is key this year.",
        health: "Focus on emotional balance."
    },
    leo: {
        overall: "Creativity and confidence define your year.",
        career: "Recognition and praise come your way.",
        love: "Romantic opportunities flourish.",
        finance: "Financial growth through smart choices.",
        health: "Maintain a healthy routine."
    },
    virgo: {
        overall: "Organization leads to success.",
        career: "Hard work finally pays off.",
        love: "Small gestures strengthen bonds.",
        finance: "Avoid unnecessary expenses.",
        health: "Consistency improves well-being."
    },
    libra: {
        overall: "Balance becomes your greatest strength.",
        career: "Partnerships bring opportunities.",
        love: "Harmony improves relationships.",
        finance: "Steady income flow expected.",
        health: "Stress management is important."
    },
    scorpio: {
        overall: "Transformation and self-discovery dominate.",
        career: "Major changes lead to growth.",
        love: "Deep emotional connections form.",
        finance: "Be cautious with shared finances.",
        health: "Rest and recovery are essential."
    },
    sagittarius: {
        overall: "Adventure and exploration await.",
        career: "New challenges bring excitement.",
        love: "Spontaneous romance may arise.",
        finance: "Travel expenses increase.",
        health: "Stay physically active."
    },
    capricorn: {
        overall: "Responsibility and achievement shine.",
        career: "Career goals become clearer.",
        love: "Commitment strengthens bonds.",
        finance: "Financial discipline brings success.",
        health: "Avoid overworking."
    },
    aquarius: {
        overall: "Innovation and originality define 2026.",
        career: "Creative ideas are rewarded.",
        love: "Unusual connections form.",
        finance: "Manage money wisely.",
        health: "Mental clarity improves."
    },
    pisces: {
        overall: "Intuition guides your journey.",
        career: "Creative projects flourish.",
        love: "Emotional depth strengthens love.",
        finance: "Avoid risky decisions.",
        health: "Focus on emotional health."
    }
};

function showHoroscope() {
    const sign = document.getElementById("zodiac-select").value;
    const result = document.getElementById("horoscope-result");

    if (sign === "") {
        result.innerHTML = "<p style='color:red; text-align:center;'>Please select a zodiac sign.</p>";
        return;
    }

    const data = horoscopes[sign];

    result.innerHTML = `
        <h2 style="text-align:center;">${sign.toUpperCase()}</h2>
        <img src="images/${sign}.png" alt="${sign}">
        <div class="fortune"><strong>Overall:</strong> ${data.overall}</div>
        <div class="fortune">💼 <strong>Career:</strong> ${data.career}</div>
        <div class="fortune">❤️ <strong>Love:</strong> ${data.love}</div>
        <div class="fortune">💰 <strong>Finance:</strong> ${data.finance}</div>
        <div class="fortune">🧘 <strong>Health:</strong> ${data.health}</div>
    `;
}
