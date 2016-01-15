$(document).ready(function(){


	$( ".ws" ).change(function() {

		var wS1 = $('#weaponSLOT1').val();
  		var wS2 = $('#weaponSLOT2').val();

  		var gS1 = $('#glovesSLOT1').val();
  		var gS2 = $('#glovesSLOT2').val();

  		var hS1 = $('#helmetSLOT1').val();
  		var hS2 = $('#helmetSLOT2').val();

  		var r1S1 = $('#ring1SLOT1').val();
  		var r1S2 = $('#ring1SLOT2').val();

  		var r2S1 = $('#ring2SLOT1').val();
  		var r2S2 = $('#ring2SLOT2').val();

  		if( wS1 == wS2) {

  		alert("You cant have the same spirit on same Equipment");

  		var wS1 = $('#weaponSLOT1').prop('selectedIndex',0);
  		var wS2 = $('#weaponSLOT2').prop('selectedIndex',0);
  		$('#WS1').val(0);
  		$('#WS2').val(0);

  		}

  		if( gS1 == gS2) {

  		alert("You cant have the same spirit on same Equipment");

  		var gS1 = $('#glovesSLOT1').prop('selectedIndex',0);
  		var gS2 = $('#glovesSLOT2').prop('selectedIndex',0);
  		$('#GS1').val(0);
  		$('#GS2').val(0);

  		}

  		if( hS1 == hS2) {

  		alert("You cant have the same spirit on same Equipment");

  		var gS1 = $('#helmetSLOT1').prop('selectedIndex',0);
  		var gS2 = $('#helmetSLOT2').prop('selectedIndex',0);
  		$('#HS1').val(0);
  		$('#HS2').val(0);

  		}

  		if( r1S1 == r1S2) {

  		alert("You cant have the same spirit on same Equipment");

  		var r1S1 = $('#ring1SLOT1').prop('selectedIndex',0);
  		var r1S2 = $('#ring1SLOT2').prop('selectedIndex',0);
  		$('#R1S1').val(0);
  		$('#R1S2').val(0);

  		}

  		if( r2S1 == r2S2) {

  		alert("You cant have the same spirit on same Equipment");

  		var r2S1 = $('#ring2SLOT1').prop('selectedIndex',0);
  		var r2S2 = $('#ring2SLOT2').prop('selectedIndex',0);
  		$('#R2S1').val(0);
  		$('#R2S2').val(0);

  		}

	});



});