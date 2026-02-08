// PolyGlot Universal Translator - Basic Version
console.log("PolyGlot Translator loaded!");

// DOM Elements
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const translateBtn = document.getElementById('translate-btn');
const sourceLang = document.getElementById('source-lang');
const targetLang = document.getElementById('target-lang');

// Translation function (simulated for now)
async function translateText(text, targetLangCode) {
    // For now, just simulate translation
    // Later we'll connect to real API
    
    const translations = {
        "hello": {
            "es": "hola",
            "fr": "bonjour",
            "de": "hallo"
        },
        "goodbye": {
            "es": "adiós",
            "fr": "au revoir",
            "de": "auf wiedersehen"
        }
    };
    
    // Simple word lookup
    const word = text.toLowerCase().trim();
    if (translations[word] && translations[word][targetLangCode]) {
        return translations[word][targetLangCode];
    }
    
    // Default: just return text with note
    return `[Translation coming soon] ${text}`;
}

// Translate button click
translateBtn.addEventListener('click', async () => {
    const text = inputText.value;
    
    if (!text.trim()) {
        outputText.value = "Please enter some text to translate.";
        return;
    }
    
    // Show loading
    outputText.value = "Translating...";
    
    // Get translation
    const translated = await translateText(text, targetLang.value);
    
    // Show result
    outputText.value = translated;
});

// Enter key to translate
inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        translateBtn.click();
    }
});

// Initialize with example
window.addEventListener('DOMContentLoaded', () => {
    inputText.value = "hello";
    inputText.focus();
});
