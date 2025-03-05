document.getElementById('refreshVerse').addEventListener('click', fetchRandomVerse);

function fetchRandomVerse() {
  // Generate a random Surah number (1-114) and Ayah number (1-286)
  const surah = Math.floor(Math.random() * 114) + 1;
  const ayah = Math.floor(Math.random() * 286) + 1;

  // Fetch the verse from the API
  fetch(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/editions/ar.alafasy,en.asad`)
    .then((response) => response.json())
    .then((data) => {
      const arabicVerse = data.data[0].text;
      const translation = data.data[1].text;
      document.getElementById('arabicVerse').textContent = arabicVerse;
      document.getElementById('translation').textContent = translation;
    })
    .catch((error) => {
      console.error('Error fetching Quran verse:', error);
      alert('An error occurred. Please try again.');
    });
}

// Fetch a verse when the page loads
fetchRandomVerse();