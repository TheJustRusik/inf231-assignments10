function addNews() {
  const title = document.getElementById('news-title').value;
  const content = document.getElementById('news-content').value;

  if (title && content) {
    const newsContainer = document.getElementById('news-container');

    // Create a news item container
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    // Create title and content elements
    const newsTitle = document.createElement('h3');
    newsTitle.textContent = title;

    const newsContent = document.createElement('p');
    newsContent.textContent = content;

    // Append title and content to the news item container
    newsItem.appendChild(newsTitle);
    newsItem.appendChild(newsContent);

    // Append the news item to the news container
    newsContainer.appendChild(newsItem);

    // Clear input fields after adding news
    document.getElementById('news-title').value = '';
    document.getElementById('news-content').value = '';
  } else {
    alert('Please enter both title and content for the news.');
  }
}
