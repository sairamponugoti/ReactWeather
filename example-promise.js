function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Austin', function(err, temp){
  if (err) {
    console.log('error', err);
  }else{
    console.log('success', temp)
  }
});
