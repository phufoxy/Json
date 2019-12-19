importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-messaging.js');
var messagingSenderId = get_sw_url_parameters( 'messagingSenderId' );

function get_sw_url_parameters( param ) {
    var vars = {};
    self.location.href.replace( self.location.hash, '' ).replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );
    if( param ) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}
firebase.initializeApp({
  'messagingSenderId': messagingSenderId || '785381922472'
});
const messaging = firebase.messaging();
