const games = [
    {
        title: "Wonhon: A Vengeful Spirit",
        image: "images/wonhon.png",
        genres: "Action, Adventure, Indie",
        features: "Single Player",
        cost: "Free",
        link: "#",
        description: "Set in an alternative 1920s era Korea..."
    },
    // Add more games
];

const container = document.querySelector(".news-section");

games.forEach(game => {
    const gameDiv = document.createElement("div");
    gameDiv.className = "image3"; // or relevant class
    gameDiv.innerHTML = `
        <img src="${game.image}" alt="${game.title}" />
        <h2>${game.title}</h2>
        <p>${game.genres}</p>
        <p>${game.features}</p>
        <a href="${game.link}" class="button">Purchase Game</a>
    `;
    container.appendChild(gameDiv);
});
