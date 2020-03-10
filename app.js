console.log("Let's get this party started!");

$('form').on("submit", getResponse);

async function getResponse(event) {
    event.preventDefault();
    let searchTerm = $('#search-term').val();
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=1`);
    appendGif(response);
}

function appendGif (response) {
    $('#gif-space').append($('<img>', {
        src: response.data.data[0].images.original.url
    }))
}