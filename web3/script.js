(function(){
  const cols = 6;
  const rows = 10;
  const total = cols * rows;
  const grid = document.getElementById('catalog-grid');

  for(let i=0; i<total; i++){
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = 'FOTO';
    grid.appendChild(card);
  }


})();
