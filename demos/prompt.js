var dialog = require( '../' );

// example, without setting title
dialog.show( 'confirm', 'Is the sun shining?', function( exitCode ) {
  switch ( exitCode ) {
  case 6:
    console.log( 'Shame. I am sure it will be sunny tommorow!' );
    break;
  case 5:
    console.log( 'Lovely! I hope you enjoy your day!' );
    break;
  default:
    console.error( 'Unknown response for prompt type.' );
  }
} );
