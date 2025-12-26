// config.js - The Brain of Nexus AI
const API_KEY = "AIzaSyDlTNna_de3qvgpWtEDhdbjX-eocK2OWEQ";

async function askAI(prompt) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        return "⚠️ Connection Error. Please check your API key.";
    }
}
