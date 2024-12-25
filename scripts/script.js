// Fetch the data from export.json and populate the website
fetch('../data/data.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to load data');
    }
    return response.json();
  })
  .then((data) => {
    populateUserInfo(data.user);
    populateShots(data.shots);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

// Populate user information (avatar, name as a link)
const populateUserInfo = (user) => {
  const avatar = document.getElementById("avatar");
  const nameLink = document.getElementById("name-link");

  avatar.src = "../images/pp.JPG";
  avatar.alt = `${user.name}'s Avatar`;
  nameLink.textContent = user.name;
  nameLink.href = user.html_url; // Make the name clickable
};

// Populate shots dynamically
const populateShots = (shots) => {
    const shotsContainer = document.getElementById("shots-container");
  
    shots.forEach((shot) => {
      const cardLink = document.createElement("a");
      cardLink.href = shot.html_url;
      cardLink.target = "_blank";
      cardLink.className = "shot-card-link"; // Add a class for styling
  
      const card = document.createElement("div");
      card.className = "shot-card";
  
      card.innerHTML = `
        <img src="${shot.images.normal}" alt="${shot.title}">
        <h3>${shot.title}</h3>
      `;
  
      // Wrap the card with the link
      cardLink.appendChild(card);
      shotsContainer.appendChild(cardLink);
    });
  };
  
