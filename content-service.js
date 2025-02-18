const fs = require('fs');

let articles = [];
let categories = [];

// Initialize function to read data from JSON files
function initialize() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/articles.json', 'utf8', (err, data) => {
            if (err) {
                reject("Unable to read articles file");
                return;
            }
            articles = JSON.parse(data);

            fs.readFile('./data/categories.json', 'utf8', (err, data) => {
                if (err) {
                    reject("Unable to read categories file");
                    return;
                }
                categories = JSON.parse(data);
                resolve();
            });
        });
    });
}

// Function to get all articles
function getAllArticles() {
    return new Promise((resolve, reject) => {
        if (articles.length > 0) {
            resolve(articles);
        } else {
            reject("No results returned");
        }
    });
}

// Function to get only published articles
function getPublishedArticles() {
    return new Promise((resolve, reject) => {
        let publishedArticles = articles.filter(article => article.published === true);
        if (publishedArticles.length > 0) {
            resolve(publishedArticles);
        } else {
            reject("No published articles found");
        }
    });
}

// Function to get all categories
function getCategories() {
    return new Promise((resolve, reject) => {
        if (categories.length > 0) {
            resolve(categories);
        } else {
            reject("No categories found");
        }
    });
}

module.exports = { initialize, getAllArticles, getPublishedArticles, getCategories };
