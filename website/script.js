const newsData = [
    {
        title: "New Game Announced: Cyber Wars",
        content: "Cyber Wars is set to release in 2025. Here's everything you need to know about this futuristic adventure.",
    },
    {
        title: "Grew in",
        content: "Average weekly time spent on online games soars 30%. Over 44% of gamers are now women, up from 41% the previous year, playing casual mobile games",
    },
    {
        title: "Esports Boom in 2024",
        content: "Esports events have reached an all-time high in popularity. Here's how you can get involved.",
    },
    {
        title: "Sony's gaming biz",
        content: "India is emerging as a good opportunity market in the gaming business for the consumer electronic major Sony, its India Managing Director Sunil Nayyar said. The company has reported in the gaming",
    },
    {
        title: "India's gaming industry steps up profile with homemade 'AAA' products",
        content: "Two such games launched in October alone as the industry tackles 28 per cent GST",
    },
    {
        title: "FICCI, GDAI sign MoU to bolster India’s video gaming industry",
        content: "The Federation of Indian Chambers of Commerce & Industry (FICCI) and the Game Developers Association of India (GDAI) joined forces at IGDC 2024 to bolster India's burgeoning video game industry.",
    },
];

const newsContainer = document.getElementById("news-container");

newsData.forEach(news => {
    const newsItem = document.createElement("div");
    newsItem.className = "news-item";
    newsItem.innerHTML = `
        <h2>${news.title}</h2>
        <p>${news.content}</p>
        <a href="#" class="read-more">Read more</a>
    `;
    newsContainer.appendChild(newsItem);
});
