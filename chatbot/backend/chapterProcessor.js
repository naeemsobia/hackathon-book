const fs = require('fs').promises;
const path = require('path');

const chaptersDir = path.join(__dirname, '../../my-book/docs');
let chaptersData = [];

async function readChapterFiles(dir) {
    let files = await fs.readdir(dir, { withFileTypes: true });
    let chapterFiles = [];

    for (const file of files) {
        const res = path.resolve(dir, file.name);
        if (file.isDirectory()) {
            chapterFiles = chapterFiles.concat(await readChapterFiles(res));
        } else if (file.isFile() && file.name.endsWith('.md')) {
            chapterFiles.push(res);
        }
    }
    return chapterFiles;
}

async function loadChapters() {
    console.log('Loading chapters from:', chaptersDir);
    const markdownFiles = await readChapterFiles(chaptersDir);

    for (const filePath of markdownFiles) {
        const content = await fs.readFile(filePath, 'utf8');
        const titleMatch = content.match(/^#\s(.+)/);
        const title = titleMatch ? titleMatch[1].trim() : path.basename(filePath, '.md');
        
        const fileName = path.basename(filePath);
        const chapterNumberMatch = fileName.match(/^(\d+)-/);
        const chapterNumber = chapterNumberMatch ? chapterNumberMatch[1] : null;

        // Remove markdown formatting for simpler search
        const plainTextContent = content.replace(/^(#+\s.*)|(`{3}[\s\S]*?`{3})|(`[^`]*`)|(\*\*|__)(.*?)\1|(\*|_)(.*?)\2|\[(.*?)\]\(.*?\)|\n\s*\n/g, '')
                                       .replace(/\s+/g, ' ')
                                       .trim();

        chaptersData.push({
            chapterNumber: chapterNumber,
            title: title,
            path: filePath,
            content: plainTextContent,
        });
    }
    console.log(`Loaded ${chaptersData.length} chapters.`);
}

function searchChapters(query) {
    const lowerCaseQuery = query.toLowerCase();
    const results = chaptersData.filter(chapter => 
        chapter.title.toLowerCase().includes(lowerCaseQuery) ||
        chapter.content.toLowerCase().includes(lowerCaseQuery)
    );
    return results;
}

module.exports = {
    loadChapters,
    searchChapters,
};
