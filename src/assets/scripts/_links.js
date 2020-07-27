const loadCards = () => {

	var parent = document.querySelector('.links'),
    items  = parent.querySelectorAll('.link'),
    loadMoreBtn =  document.querySelector('#load-more'),
	maxItems = 3,
	showItems = 6,
    hiddenClass = "visually-hidden";


[].forEach.call(items, function(item, idx){
    if (idx > maxItems - 1) {
        item.classList.add(hiddenClass);
        item.setAttribute('aria-hidden', 'true');
    }
});

loadMoreBtn.addEventListener('click', function(){

  [].forEach.call(document.querySelectorAll('.' + hiddenClass), function(item, idx){
      console.log(item);
      if (idx < showItems) {
          item.classList.remove(hiddenClass);
          item.removeAttribute('aria-hidden', 'true');
      }

      if ( document.querySelectorAll('.' + hiddenClass).length === 0) {
          loadMoreBtn.style.display = 'none';
      }

  });

});

}
if(document.querySelector('.links')){
    loadCards();
}
