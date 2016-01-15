
$(document).ready(function(){

  // $('#training').prop('disabled', true);

  $("#skill").change(function(){

  	var s   = $( "#skill" ).val();

  	switch (s) {

 							case "wLC":
						        $('#training').prop('disabled', true);
						        $('#improve').prop('disabled', false);
						        break;
						    case "wWW":
						        $('#training').prop('disabled', true);
						        $('#improve').prop('disabled', false);
						        break;
						    case "wFC":
						        $('#training').prop('disabled', true);
						        $('#improve').prop('disabled', false);
						        break;
						    case "wSS":
						        $('#training').prop('disabled', false);
						        $('#improve').prop('disabled', true);
						        break;
						    case "wSR":
						        $('#training').prop('disabled', false);
						        $('#improve').prop('disabled', true);
					        	break;
					        case "wBC":
						        $('#training').prop('disabled', false);
						        $('#improve').prop('disabled', true);
					        	break;
					        case "wRC":
						        $('#training').prop('disabled', false);
						        $('#improve').prop('disabled', true);
					        	break;
						  }

  });

  $('#submit').click(function(){


  		// SKILL AREA

  		var s   = $( "#skill" ).val();

  		var sL  = parseInt($( "#skill_level" ).val());

  		if( s == "wLC") {

		  		 switch (sL) {
						    
						    case 1:
						        var sDamage = parseFloat(0.5);
		  		    			var sBonus  = 250;
						        break;
						    case 2:
						        var sDamage = parseFloat(0.6);
		  		    			var sBonus  = 400;
						        break;
						    case 3:
						        var sDamage = parseFloat(0.8);
		  		    			var sBonus  = 530;
						        break;
						    case 4:
						        var sDamage = parseFloat(1.0);
		  		    			var sBonus  = 900;
						        break;
						    case 5:
						        var sDamage = parseFloat(1.05);
		  		    			var sBonus  = 990;

						        break;
						  }

		  	} else if( s == "wWW"){


		  			 switch (sL) {
						    
						    case 1:
						        var sDamage = parseFloat(1.0);
		  		    			var sBonus  = 350;
						        break;
						    case 2:
						        var sDamage = parseFloat(1.2);
		  		    			var sBonus  = 520;
						        break;
						    case 3:
						        var sDamage = parseFloat(1.6);
		  		    			var sBonus  = 750;
						        break;
						    case 4:
						        var sDamage = parseFloat(2.0);
		  		    			var sBonus  = 1120;
						        break;
						    case 5:
						        var sDamage = parseFloat(2.1);
		  		    			var sBonus  = 1232;

						        break;
						  }

		  	}  else if( s == "wFC"){


		  			 switch (sL) {
						    
						    case 1:
						        var sDamage = parseFloat(1.4);
		  		    			var sBonus  = 825;
						        break;
						    case 2:
						        var sDamage = parseFloat(1.7);
		  		    			var sBonus  = 1200;
						        break;
						    case 3:
						        var sDamage = parseFloat(2.2);
		  		    			var sBonus  = 1650;
						        break;
						    case 4:
						        var sDamage = parseFloat(3.0);
		  		    			var sBonus  = 2100;
						        break;
						    case 5:
						        var sDamage = parseFloat(3.2);
		  		    			var sBonus  = 2310;

						        break;
						  }

		  	}  else if( s == "wSS"){


		  			 switch (sL) {
						    
						    case 1:
						        var sDamage = parseFloat(0.2);
		  		    			var sBonus  = 250;
						        break;
						    case 2:
						        var sDamage = parseFloat(0.3);
		  		    			var sBonus  = 350;
						        break;
						    case 3:
						        var sDamage = parseFloat(0.5);
		  		    			var sBonus  = 700;
						        break;
						    case 4:
						        var sDamage = parseFloat(0.8);
		  		    			var sBonus  = 1200;
						        break;
						    case 5:
						        var sDamage = parseFloat(0.82);
		  		    			var sBonus  = 1320;

						        break;
						  }
		  	
		  	}  else if( s == "wSR"){


		  			 switch (sL) {
						    
						    case 1:
						        var sDamage = parseFloat(0.4);
		  		    			var sBonus  = 600;
						        break;
						    case 2:
						        var sDamage = parseFloat(0.7);
		  		    			var sBonus  = 900;
						        break;
						    case 3:
						        var sDamage = parseFloat(1.0);
		  		    			var sBonus  = 1200;
						        break;
						    case 4:
						        var sDamage = parseFloat(1.5);
		  		    			var sBonus  = 2000;
						        break;
						    case 5:
						        var sDamage = parseFloat(1.55);
		  		    			var sBonus  = 2200;

						        break;
						  }

		  	}  else if( s == "wBC"){


		  			 switch (sL) {
						    
						    case 1:
						        var sDamage = parseFloat(0.2);
		  		    			var sBonus  = 140;
						        break;
						    case 2:
						        var sDamage = parseFloat(0.2);
		  		    			var sBonus  = 180;
						        break;
						    case 3:
						        var sDamage = parseFloat(0.4);
		  		    			var sBonus  = 280;
						        break;
						    case 4:
						        var sDamage = parseFloat(0.5);
		  		    			var sBonus  = 400;
						        break;
						    case 5:
						        var sDamage = parseFloat(0.55);
		  		    			var sBonus  = 440;

						        break;
						  }

		  	}  else if( s == "wRC"){


		  			 switch (sL) {
						    
						    case 1:
						        var sDamage = parseFloat(0.5);
		  		    			var sBonus  = 150;
						        break;
						    case 2:
						        var sDamage = parseFloat(0.5);
		  		    			var sBonus  = 220;
						        break;
						    case 3:
						        var sDamage = parseFloat(0.8);
		  		    			var sBonus  = 300;
						        break;
						    case 4:
						        var sDamage = parseFloat(1.0);
		  		    			var sBonus  = 400;
						        break;
						    case 5:
						        var sDamage = parseFloat(1.02);
		  		    			var sBonus  = 440;

						        break;
						  }
		  	}


  		// END

  		// 0.0025
  		var GWbonus = parseFloat(0);
  		// 0.0050
  		var GWbonusCrit = parseFloat(0);

  		var zImprove = parseFloat($('#improve').val());
  		var zTraining = parseFloat($('#training').val());

  		var dImprove = parseFloat($('#Dimprove').val());
  		var dTraining = parseFloat($('#Dtraining').val());

  		// WEAPON SLOT
  		var wS1 = $('#weaponSLOT1').val();
  		var wS2 = $('#weaponSLOT2').val();
  		var wS3 = parseFloat($('#WS3').val());

  		// GLOVES SLOT
  		var gS1 = $('#glovesSLOT1').val();
  		var gS2 = $('#glovesSLOT2').val();
  		var gS3 = parseFloat($('#GS3').val());

  		// HELMET SLOT
  		var hS1 = $('#helmetSLOT1').val();
  		var hS2 = $('#helmetSLOT2').val();
  		var hS3 = parseFloat($('#HS3').val());

  		// RING 1 SLOT
  		var r1S1 = $('#ring1SLOT1').val();
  		var r1S2 = $('#ring1SLOT2').val();
  		var r1S3 = parseFloat($('#R1S3').val());

  		// RING 2 SLOT
  		var r2S1 = $('#ring2SLOT1').val();
  		var r2S2 = $('#ring2SLOT2').val();
  		var r2S3 = parseFloat($('#R2S3').val());

  		var tNdef = wS3 + gS3 + hS3 + r1S3 + r2S3;

  		console.log(tNdef);


  		// DEFAULT VALUE
  		var disdef      = parseFloat(0);
  		var criticalP   = parseFloat(0);
  		var criticalNum = parseInt(0);
  		var damageNum   = parseInt(0);
  		var damageP     = parseInt(0);
  		var MdamageNum  = parseInt(0);
  		var dmgP        = parseInt(0);



  		// DRILL CALCULATION [BEGINNER WAY]

  		switch (wS1) { case "DPF%": disdef = parseFloat($('#WS1').val()) ; break; case "DMF%": disdef = parseFloat($('#WS1').val()) ; break; case "CTD%": criticalP = parseFloat($('#WS1').val()); break; case "CTDV": criticalNum = parseInt($('#WS1').val()); break; case "PDMGV": damageNum = parseInt($('#WS1').val()); break; case "MDMGV": MdamageNum = parseInt($('#WS1').val()); break; case "PDMG%": dmgP = parseInt($('#WS1').val()); break; case "MDMG%": dmgP = parseInt($('#WS1').val()); break; } switch (wS2) { case "DPF%": disdef = parseFloat($('#WS2').val()) ; break; case "DMF%": disdef = parseFloat($('#WS2').val()) ; break; case "CTD%": criticalP = parseFloat($('#WS2').val()); break; case "CTDV": criticalNum = parseInt($('#WS2').val()); break; case "PDMGV": damageNum = parseInt($('#WS2').val()); break; case "MDMGV": MdamageNum = parseInt($('#WS2').val()); break; case "PDMG%": dmgP = parseInt($('#WS2').val()); break; case "MDMG%": dmgP = parseInt($('#WS2').val()); break; } switch (gS1) { case "DPF%": disdef += parseFloat($('#GS1').val()) ; break; case "DMF%": disdef += parseFloat($('#GS1').val()) ; break; case "CTD%": criticalP += parseFloat($('#GS1').val()); break; case "CTDV": criticalNum += parseInt($('#GS1').val()); break; case "PDMGV": damageNum += parseInt($('#GS1').val()); break; case "MDMGV": MdamageNum += parseInt($('#GS1').val()); break; case "PDMG%": dmgP += parseInt($('#GS1').val()); break; case "MDMG%": dmgP += parseInt($('#GS1').val()); break; } switch (gS2) { case "DPF%": disdef += parseFloat($('#GS2').val()) ; break; case "DMF%": disdef += parseFloat($('#GS2').val()) ; break; case "CTD%": criticalP += parseFloat($('#GS2').val()); break; case "CTDV": criticalNum += parseInt($('#GS2').val()); break; case "PDMGV": damageNum += parseInt($('#GS2').val()); break; case "MDMGV": MdamageNum += parseInt($('#GS2').val()); break; case "PDMG%": dmgP += parseInt($('#GS2').val()); break; case "MDMG%": dmgP += parseInt($('#GS2').val()); break; } switch (hS1) { case "DPF%": disdef += parseFloat($('#HS1').val()) ; break; case "DMF%": disdef += parseFloat($('#HS1').val()) ; break; case "CTD%": criticalP += parseFloat($('#HS1').val()); break; case "CTDV": criticalNum += parseInt($('#HS1').val()); break; case "PDMGV": damageNum += parseInt($('#HS1').val()); break; case "MDMGV": MdamageNum += parseInt($('#HS1').val()); break; case "PDMG%": dmgP += parseInt($('#HS1').val()); break; case "MDMG%": dmgP += parseInt($('#HS1').val()); break; } switch (hS2) { case "DPF%": disdef += parseFloat($('#HS2').val()) ; break; case "DMF%": disdef += parseFloat($('#HS2').val()) ; break; case "CTD%": criticalP += parseFloat($('#HS2').val()); break; case "CTDV": criticalNum += parseInt($('#HS2').val()); break; case "PDMGV": damageNum += parseInt($('#HS2').val()); break; case "MDMGV": MdamageNum += parseInt($('#HS2').val()); break; case "PDMG%": dmgP += parseInt($('#HS2').val()); break; case "MDMG%": dmgP += parseInt($('#HS2').val()); break; } switch (r1S1) { case "DPF%": disdef += parseFloat($('#R1S1').val()) ; break; case "DMF%": disdef += parseFloat($('#R1S1').val()) ; break; case "CTD%": criticalP += parseFloat($('#R1S1').val()); break; case "CTDV": criticalNum += parseInt($('#R1S1').val()); break; case "PDMGV": damageNum += parseInt($('#R1S1').val()); break; case "MDMGV": MdamageNum += parseInt($('#R1S1').val()); break; case "PDMG%": dmgP += parseInt($('#R1S1').val()); break; case "MDMG%": dmgP += parseInt($('#R1S1').val()); break; } switch (r1S2) { case "DPF%": disdef += parseFloat($('#R1S2').val()) ; break; case "DMF%": disdef += parseFloat($('#R1S2').val()) ; break; case "CTD%": criticalP += parseFloat($('#R1S2').val()); break; case "CTDV": criticalNum += parseInt($('#R1S2').val()); break; case "PDMGV": damageNum += parseInt($('#R1S2').val()); break; case "MDMGV": MdamageNum += parseInt($('#R1S2').val()); break; case "PDMG%": dmgP += parseInt($('#R1S2').val()); break; case "MDMG%": dmgP += parseInt($('#R1S2').val()); break; } switch (r2S1) { case "DPF%": disdef += parseFloat($('#R2S1').val()) ; break; case "DMF%": disdef += parseFloat($('#R2S1').val()) ; break; case "CTD%": criticalP += parseFloat($('#R2S1').val()); break; case "CTDV": criticalNum += parseInt($('#R2S1').val()); break; case "PDMGV": damageNum += parseInt($('#R2S1').val()); break; case "MDMGV": MdamageNum += parseInt($('#R2S1').val()); break; case "PDMG%": dmgP += parseInt($('#R2S1').val()); break; case "MDMG%": dmgP += parseInt($('#R2S1').val()); break; } switch (r2S2) { case "DPF%": disdef += parseFloat($('#R2S2').val()) ; break; case "DMF%": disdef += parseFloat($('#R2S2').val()) ; break; case "CTD%": criticalP += parseFloat($('#R2S2').val()); break; case "CTDV": criticalNum += parseInt($('#R2S2').val()); break; case "PDMGV": damageNum += parseInt($('#R2S2').val()); break; case "MDMGV": MdamageNum += parseInt($('#R2S2').val()); break; case "PDMG%": dmgP += parseInt($('#R2S2').val()); break; case "MDMG%": dmgP += parseInt($('#R2S2').val()); break; }

  		// END DRILL CALCULATION

  		
  		
  		var defense = parseInt($('#defense').val());
  		var defense = defense * (1 - ( (disdef + tNdef ) / 100 ));
  		var absorb  = parseInt($('#absorb').val());
  		var attack  = parseInt($('#attack').val());
  		var damage  = parseFloat($('#damage').val());
  		var nAttack = parseInt(attack-defense);
  		var crit    = parseFloat((1.50 + ( criticalP / 100 )));

  		console.log(crit);


  		var nResult = Math.ceil((( nAttack  * ( ( 1 + damage )

  		 					 * ( zImprove + (sDamage + GWbonus) - dImprove) )) 

  		                     + (damageNum + sBonus + zTraining - dTraining )) - absorb)  ;

  		var cResult = Math.ceil(((( nAttack * ( ( 1 + damage ) 

  			                 * ( zImprove + (sDamage + GWbonusCrit) - dImprove) ))

  			                 + (damageNum + sBonus + zTraining - dTraining )) - absorb)
  		
  			                 * crit + criticalNum )  ;

  		$('#dResult').val(nResult)  ;
  		$('#cResult').val(cResult)  ;

  });

});
