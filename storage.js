$('#submit').on('click', function (e) {
    e.preventDefault();
    let searchTag = $('#searchInput').val().trim();
    let locationTag = $('#locationInput').val().trim();
    sessionStorage.setItem('searchTag', `${searchTag}`);
    sessionStorage.setItem('locationTag', `${locationTag}`);
    location.replace("/search")
 });
 
 to use session storage in other pages:
 
 let searchIndexInput = sessionStorage.getItem('searchTag');
 let locationIndexInput = sessionStorage.getItem('locationTag');