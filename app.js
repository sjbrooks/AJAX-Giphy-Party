console.log("Let's get this party started!");

$('form').on("submit", getResponse);
$('#remove-images').on('click', removeImage);

async function getResponse(event) {
    event.preventDefault();
    let searchTerm = $('#search-term').val();
    const limit = 1;
    const api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
    let response = await axios.get(
      `http://api.giphy.com/v1/gifs/search`, {
        params: {
          q: searchTerm,
          api_key,
          limit
        }
      }
    );
    appendGif(response);
}

function appendGif (response) {
    $('#gif-space').append($('<img>', {
        src: response.data.data[0].images.original.url
    }))
}

function removeImage () {
  let gifSpace = $('#gif-space');
  gifSpace.empty();
}