const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');
const axios = require('axios');
require('dotenv').config();

// === CONFIGURATION ===
const BLOG_DIR = path.join(__dirname, '../src/content/blog/posts');
const IMAGE_DIR = path.join(__dirname, '../public/img/blog');
const TITLE_FILE = path.join(__dirname, '../titles/titles.txt');
const USED_TITLES_FILE = path.join(__dirname, '../titles/used_titles.txt');

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function sanitizeSlug(text) {
    return text.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

async function getNextUnusedTitle() {
    const titles = fs.readFileSync(TITLE_FILE, 'utf-8')
        .split('\n')
        .filter(line => line.trim());

    let usedIndices = new Set();
    if (fs.existsSync(USED_TITLES_FILE)) {
        const usedLines = fs.readFileSync(USED_TITLES_FILE, 'utf-8')
            .split('\n')
            .filter(line => line.trim());
        usedIndices = new Set(usedLines.map(line => parseInt(line)));
    }

    for (let i = 0; i < titles.length; i++) {
        if (!usedIndices.has(i)) {
            fs.appendFileSync(USED_TITLES_FILE, `${i}\n`);
            return titles[i];
        }
    }

    throw new Error('All blog titles have been used.');
}

async function generateBlog(title, language) {
    const prompt = `Write a blog post in ${language} for this title: "${title}"

This is a blog post for thehairistanbul.com, a hair transplant clinic in Turkey.

Place internal links to home page (https://thehairistanbul.com), and contact page (https://thehairistanbul.com/contact) if relevant.

The blog should be between 1500-2300 words.

The blog text will be used in website, so it should be SEO-friendly and contain relevant keywords.

The blog should have basic html formatting, with h2 and h3 headings, and p tags for paragraphs.

The blog should start with front matter, with the title, slug, excerpt, date, category, imageUrl, and tags.

The slug should be the title in lowercase, with hyphens instead of spaces.

The excerpt should be a short description of the blog post, 160 characters max.

The image should be in /img/blog/{sanitizeSlug(title)}.png
`;

    const response = await client.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7
    });

    return response.choices[0].message.content;
}

async function generateImage(title) {
    const prompt = `Create a clean, aesthetic banner image for the blog: '${title}'. No text, just the image.`;

    const response = await client.images.generate({
        model: 'dall-e-3',
        prompt: prompt,
        n: 1,
        size: '1792x1024',
        quality: 'standard',
    });

    const url = response.data[0].url;
    const imageResponse = await axios.get(url, { responseType: 'arraybuffer' });
    const slug = sanitizeSlug(title);
    const imagePath = path.join(IMAGE_DIR, `${slug}.png`);

    fs.writeFileSync(imagePath, imageResponse.data);

    return `/img/blog/${slug}.png`;
}

async function saveBlog(language, title, content, imageUrl) {
    const langCode = language.toLowerCase() === 'english' ? 'en' : 'ru';
    const slug = sanitizeSlug(title);

    const filename = path.join(BLOG_DIR, langCode, `${slug}.md`);

    fs.writeFileSync(filename, content);
}

async function main() {
    try {
        const title = await getNextUnusedTitle();
        console.log(`Generating content for: ${title}`);

        console.log('Generating image...');
        const imageUrl = await generateImage(title);

        console.log('Generating English content...');
        const enContent = await generateBlog(title, 'English');
        await saveBlog('English', title, enContent, imageUrl);

        console.log('Generating Russian content...');
        const ruContent = await generateBlog(title, 'Russian');
        await saveBlog('Russian', title, ruContent, imageUrl);

        console.log('Blog and image saved.');
    } catch (error) {
        console.error('Error:', error);
    }
}

main(); 