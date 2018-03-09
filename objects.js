var playlist = new Object({Zedd: 'Papercut'})

function updatePlaylist(list, artist, song) {
  var upList = new Object({});
<<<<<<< HEAD
  Object.assign(upList, list, {[artist]: song});
=======
  Object.assign(upList, list, {artist: song});
>>>>>>> 6bd4084021b754cc5ceab7167bb3ed05680de264
  return upList;
}

function removeFromPlaylist(list, artist) {
<<<<<<< HEAD
  delete list[artist]
=======
  delete list.artist
>>>>>>> 6bd4084021b754cc5ceab7167bb3ed05680de264
  return list;
}
