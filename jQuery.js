$(function(){
  $('#btn').click(function(){
  const colors = [
    "#808080ed", "#798683", "#738c87", "#6c938b", "#66998f",
    "#609f93", "#59a696", "#53ac9a", "#4db39e", "#46b9a2",
    "#40bfa6", "#39c6aa", "#33ccad", "#2dd2b1", "#26d9b5",
    "#20dfb9", "#19e6bd", "#13ecc1", "#0df2c4", "#06f9c8"
  ];

  const fadeElements = Array.from({ length: 65 }, (_, i) => $(`.fade-${i + 1}`));

  fadeElements.forEach((element, index) => {
    element.fadeIn((index + 1) * 1000).css({
      height: '100px',
      width: '100px',
      border: "2px solid black",
      backgroundColor: colors[index % colors.length]
    });
  });
})})