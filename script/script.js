$(document).ready(function() {
  console.log("el documento está listo");
  // se guardan en varibles las clases y los id y elementos
  var $input = $('input'),
   $btn = $('#addBtn'),
   $ul = $('#myList'),
   $rmvBtn = $('.rmvBtn');

   //................
    // con on() se adjunta el control para el evento de anexar los valores que se colocan en el input, con
    // el event.preventDefault se detiene la accion y se coloca una condicion para verificar si 1.al comparar
    // si el input esta vacio y 2. si no esta vacio con prepend() se concatenan los valores que vine del input
    //  y se crean los elementos en lista y sus valores con ademas de un checkbox y un button para eliminar el elemento con su contenido.
     // .......................................................................
   $btn.on('click',function(e){
     e.preventDefault();
     if ($input.val() == ''){

     } else {
       $ul.prepend('<li><input type="checkbox" class="check">' +
       $input.val() + '<button class="rmvBtn">x</button></li>');
       $input.val('')  
     }
   });

   // Se crea una funcion para eliminar los elementos que se crearon en este caso los <li></li>
   // y se coloca la funcion closest() para que este comiense por el primer elemento suministrado
    //  y con remove() lo elimine
   function removeItem() {
   	  $(this).closest('li').remove();
   	}

// se crea una funcion para si el checked esta activado y para remover el checked
   	function markThis() {
   	  if (this.checked) {
   	    $(this).closest('li').addClass('done');
   	  } else {
   	    $(this).closest('li').removeClass('done');
   	  }
   	}
// se mandan a llamar las dos funciones de remover y marcar la lista
   	$(document).on('click', '.check', markThis);

   	$(document).on('click', '.rmvBtn', removeItem);






});
