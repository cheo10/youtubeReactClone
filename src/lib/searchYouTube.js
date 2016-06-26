var searchYouTube = (options, callback) => {

  // $.ajax({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   type: 'GET',
  //   data: {key: options.key,
  //          q: options.query,
  //          maxResults: options.max,
  //          part: 'snippet',
  //          type: 'video',
  //          videoEmbeddable:'true'
  //        },
  //   //contentType: 'application/json',
  //   cache: false,
  //   success: function (data) {
  //     console.log('Success:', data);
  //     callback(data);
  //   },
  //   error: function (data) {
  //     console.error('Error: ', data);
  //     //callback(data);
  //   }
  // });
 $.get('https://www.googleapis.com/youtube/v3/search', {
    key: options.key,
    q: options.query,
    maxResults: options.max,
    part: 'snippet',
    type: 'video',
    videoEmbeddable: 'true'
 })
 .done( ({items}) =>{
  if(callback) {
    callback(items);
  }})
 .fail((error) => {console.error(error)});


};

window.searchYouTube = searchYouTube;
//searchYouTube({key: window.YOUTUBE_API_KEY, query: $('.form-control').val(), max: 5});

