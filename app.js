// What do you have?
//   - jQuery to make AJAX requests to an API
//   - jQuery to work with the DOM
//   - Some existing HTML with placeholder information (.result-card)
//   - An API endpoint that has data for me "https://api.tvmaze.com/search/shows?q="
//   - A reference to how to use that API: "https://www.tvmaze.com/api#show-search"

// What do you need?
// When the user clicks the search button, the following needs to happen afterwards:
//     1. I need to take the text they typed in the input box
//     2. I need to get the TV show information based on what the user typed in: "https://api.tvmaze.com/search/shows?q=[SEARCH_STRING]"
//     2. I need to display that information using the .result-card html as a template

// How do you get there?
// I need to use this API endpoint: "https://api.tvmaze.com/search/shows?q="
// I can use the URL bar in my web browser to see what comes back when I visit an end point, e.g."https://api.tvmaze.com/search/shows?q=lost"
// I need to handle a click event on the search button
// I need to get the user information from the input box
// I need to use $.get to make an AJAX request to the endpoint with the user search info, e.g. "https://api.tvmaze.com/search/shows?q=lost"
// I need to use jQuery to recreate the .result-card html and all of it's nested elements
// I need to go through the data sent from the AJAX request and create a result card for each TV show
// I need to add each result card to the #results element.



$('#submit').click(()=>{                // This takes the click action on the search button at the top of the page
  let input = $('input').val()
  console.log(input)
  $('.result-card').remove()            // Upon 'click' this will remove everything with the .result-card class. //can also use .empty
  $.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${input}`, (data)=>{       // Sends a request to get information with the $input value that we the user inputed
    //for (let i = 0; i < data.length; i++){          //loops over the data that was returned from the .get method
      let span = $('<span class="result-card"></span>')      //creates the <span> that will be used to display the information Below is all the differnt
      // let showName = data[i].creditLine                      // elements that we needed to create
      let h3 = $('<h3 class="card-title"></h3>')
      // h3.text(showName)
      let showImage = data.primaryImageSmall
      let img = $('<img class="card-image">')
      img.attr('src', showImage)
      //let summ = $(data[i].show.summary)
      let div = $('<div class="card-summary"></div>')
      let em = $('<em>Summary:</em>')
      let link = data.objectURL
      let a = $('<a>View details</a>')
      a.attr('href', link)
      div.append(em)                    // appends all the elements that we created
      //div.append(summ)
      span.append(h3)
      span.append(img)
      span.append(div)
      span.append(a)
      $('#results').append(span)
      console.log(data)

    //}
  })
  
})
