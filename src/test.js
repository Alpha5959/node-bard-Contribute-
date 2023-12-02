const bard = require('./index');

const config = {
  userid: 'RK2NpysYNOWK2U2HtFlC',
  key: 'AIzaSyDTFn6X_PSdpDwm8szBlbIAtUuPrg21dZo',
  apikey: '3482f1a70emshd44e76978f99178p19e72djsn68a544565b42',
};

bard.setConfig(config);

async function main() {
  try {
    const prompt = 'नमस्ते, मैं निशांत शर्मा हूं';
    
    // Translate the prompt to English or any lang. 
    const translatedText = await bard.translateText(prompt, 'auto', 'en');

    // Create text using Bard API, Clean version:
    const createdText = await bard.createText(translatedText);

    console.log(createdText);

    // try & catch method.
  } catch (error) {
    console.error(`Error in main function: ${error.message}`);
  }
}

main();
