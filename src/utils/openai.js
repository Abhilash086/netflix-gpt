import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_KEY,
  dangerouslyAllowBrowser: true
});


export default openai;