var apiKey,
    sessionId,
    token;
apiKey = 45621852;
sessionId = 1_MX40NTYyMTg1Mn5-MTQ2ODQ5MzU0NjcwNX4xWGF6Ty9OK3BYQnRmeGFqU2czRi9uYUZ-fg;
token = T1==cGFydG5lcl9pZD00NTYyMTg1MiZzaWc9NWVkZjI2ZjE2YjczOWIzYTRiYTA3Nzg0MzM3M2Q0OTFlOTE0YTMyZjpzZXNzaW9uX2lkPTFfTVg0ME5UWXlNVGcxTW41LU1UUTJPRFE1TXpVME5qY3dOWDR4V0dGNlR5OU9LM0JZUW5SbWVHRnFVMmN6Umk5dVlVWi1mZyZjcmVhdGVfdGltZT0xNDY4NDkzNjQ2Jm5vbmNlPTAuMzgzMTc4NjM5NDU4NDkyNCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDY4NDk3MjU3;


function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    });
  });

  session.on('sessionDisconnected', function(event) {
    console.log('You were disconnected from the session.', event.reason);
  });

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (!error) {
      var publisher = OT.initPublisher('publisher', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
      });

      session.publish(publisher);
    } else {
      console.log('There was an error connecting to the session: ', error.code, error.message);
    }
  });
}