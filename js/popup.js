document.querySelector('.update').addEventListener('click', function(e) {
    document.querySelector('.first').style.display='none';
    document.querySelector('.success').style.display='block';
    chrome.storage.sync.set({channel: document.querySelector('#channel').value}, function() {
        console.log('Done');
    });
})