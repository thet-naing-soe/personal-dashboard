fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=ffadggfhfdhdffdhf"
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1502082553048-f009c37129b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDE5NjAxMjV8&ixlib=rb-4.0.3&q=80&w=1080)`;
    document.getElementById("author").textContent = `By: Matheus Ferrero`;
  });
