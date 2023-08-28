var arr = [
  {
    dp: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60",
    Name: "Lorem",
  },
  {
    dp: "https://images.unsplash.com/photo-1513866717996-6c19fd870937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1625054790108-6a5fb0c174af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    Name: "Jane",
  },
  {
    dp: "https://images.unsplash.com/photo-1517241938558-898c3afe02c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1623194466839-7e314f961c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    Name: "Papper",
  },
  {
    dp: "https://images.unsplash.com/photo-1501892539064-e102795b283a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1669625661280-a20a8d6cf607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    Name: "Charlet",
  },
  {
    dp: "https://images.unsplash.com/photo-1511135232973-c3ee80040060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1659383398029-c33e2ff9834d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    Name: "Sofia",
  },
  {
    dp: "https://images.unsplash.com/photo-1512032915910-144d53456b7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxtb2RlbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1690271803762-00127096c7ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    Name: "Wonda",
  },
  {
    dp: "https://images.unsplash.com/photo-1519549735396-e5f6f8ee578c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxtb2RlbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    Name: "Natasha",
  },
  {
    dp: "https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxtb2RlbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60",
    Name: "Jessica",
  },
];

var loop = "";
var multiStories = document.querySelector(".multiStories");
var fullScreen = document.querySelector(".full-screen");

arr.forEach(function (elem, ind) {
  loop += `  <div class="story">
        <img id = "${ind}" src="${elem.dp}" alt="">
        <p>${elem.Name}</p>
        </div>
        `;
});

multiStories.innerHTML = loop;
multiStories.addEventListener("click", function (details) {
  fullScreen.style.backgroundImage = `url("${arr[details.target.id].story}")`;

  setTimeout(function () {
    fullScreen.style.backgroundImage = `url(${"https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZ3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"})`;
  }, 2000);
});
