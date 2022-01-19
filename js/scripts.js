$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    let exclamationInput = $("input#exclamation").val();
    exclamationInput = exclamationInput.charAt(0).toUpperCase() + exclamationInput.slice(1);
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();
    const madLibs = [person1Input, person2Input, animalInput, exclamationInput, person1Input, verbInput, person1Input, person2Input, nounInput];
    const storyParts = ["One day, ", 
                        " and " , 
                        " were walking through the woods, when suddenly a giant " , 
                        " appeared. '" , 
                        "!' ",
                        " cried. The two of them " , 
                        " as quickly as possible, and when they were safe, " , 
                        " and " , 
                        " gave each other a giant", 
                        "."];
    const fullStory = [];
    let section = 0;
    madLibs.forEach(function(element) {
      fullStory.push(storyParts[section]);
      section ++;
      fullStory.push(element);
    });
    $(".fullStory").text(fullStory.join(""));

    /*$(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);*/

    $("#story").show();
  })
});