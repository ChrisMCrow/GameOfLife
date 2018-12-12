import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Game } from './game.js'

let thisGame;

function updateDisplay() {
    $("#player1displayName").text(thisGame.player1.name);
    $("#player1displayProfession").text(thisGame.player1.profession);        
    $("#player1bank").text(`Bank Account: $${thisGame.player1.formatMoney(thisGame.player1.bank)}`);
    $("#player1salary").text(`Salary: $${thisGame.player1.formatMoney(thisGame.player1.salary)}`);
    $("#player1age").text(`Age: ${thisGame.player1.age} years old`);
    $("#player1attributes").empty();
    thisGame.player1.attributes.forEach(function(attr) {
        $("#player1attributes").append(attr + "<br />");
    });
    $("#player1inventory").empty();
    thisGame.player1.inventory.forEach(function(item) {
        $("#player1inventory").append(item + "<br />");
    });       
    $("#player2displayName").text(thisGame.player2.name);
    $("#player2displayProfession").text(thisGame.player2.profession);          
    $("#player2bank").text(`Bank Account: $${thisGame.player2.formatMoney(thisGame.player2.bank)}`);
    $("#player2salary").text(`Salary: $${thisGame.player2.formatMoney(thisGame.player2.salary)}`);
    $("#player2age").text(`Age: ${thisGame.player2.age} years old`);
    $("#player2attributes").empty();
    thisGame.player2.attributes.forEach(function(attr) {
        $("#player2attributes").append(attr + "<br />");
    });
    $("#player2inventory").empty();
    thisGame.player2.inventory.forEach(function(item) {
        $("#player2inventory").append(item + "<br />");
    }); 
    
    $('#turn').text(`${thisGame.turnPlayer.name}'s turn`);
}

$(document).ready(function() {
    $("form#character-selection").submit(function(event) {
        event.preventDefault();
        let player1name = $("#player1name").val();
        let player1profession = $("#player1profession").val();
        let player2name = $("#player2name").val();
        let player2profession = $("#player2profession").val();
        thisGame = new Game(player1name, player1profession, player2name, player2profession);
        $("form#character-selection").hide();
        $("#gameBoard").show();
        updateDisplay();
    });

    $("form#drawEvent").submit(function(event) {
        event.preventDefault();
        thisGame.turnPlayer.getPaid();
        thisGame.getNewEvent(thisGame.turnPlayer);
        $('#event').text(thisGame.currentEvent.name);
        $('#eventDescription').text(thisGame.currentEvent.description); 
        $('form#drawEvent').hide();
        $('form#endTurn').show();

    });

  
    $("form#endTurn").submit(function(event) {
        event.preventDefault();
        thisGame.turnPlayer.getRaise(thisGame.raiseMultiplier);
        thisGame.turnPlayer.addAge();
        thisGame.turnPlayer.costOfLiving();
        thisGame.endTurn();
        if (thisGame.gameOver) {
          $('#gameOver').text("Game Over");
        } else {
          $('form#drawEvent').show();
        }
        $('form#endTurn').hide();
        updateDisplay();
        $('#event').empty();
        $('#eventDescription').empty(); 
    });  
});
