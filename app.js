console.log("Let's get this party started!");

$('form').on("submit", getResponse);
$('#remove-images').on('click', removeImage);

const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";


async function getResponse(event) {
  event.preventDefault();
  let searchTerm = $('#search-term').val();
  const limit = 1;
  let response = await axios.get(
    `http://api.giphy.com/v1/gifs/search`, {
    params: {
      q: searchTerm,
      API_KEY,
      limit
    }
  }
  );
  appendGif(response);
}

function appendGif(response) {
  $('#gif-space').append($('<img>', {
    src: response.data.data[0].images.original.url
  }))
}

function removeImage() {
  let gifSpace = $('#gif-space');
  gifSpace.empty();
}

async function start () {
  const limit = 10;
  let response = await axios.get(
    'https://icanhazdadjoke.com/search', 
    {headers: {Accept: 'application/json'}}, {params: {limit}}
  )
  console.log(response);
}

// Run on load
$(start)


// Terminal: curl -H "Accept: application/json" "https://icanhazdadjoke.com/search?term=pirate"