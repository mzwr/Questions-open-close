const questions = document.querySelectorAll('.question')

questions.forEach( function(question){
  const btn = question.querySelector('.more')
  btn.addEventListener("click", function(){

    question.classList.toggle('show-text')

    questions.forEach(function(item){
      if(item !== question){
        item.classList.remove('show-text')
      }
    })
  })
})

//seconde methode

//const btns = document.querySelectorAll('.more')

//btns.forEach( function(btn){
//  btn.addEventListener("click", function(e){
//    const question = e.currentTarget.parentElement.parentElement
//    question.classList.toggle('hidden')
//  })
//})
