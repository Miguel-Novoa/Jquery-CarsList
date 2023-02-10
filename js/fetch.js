$(document).ready((e)=>{
    e.preventDefault;
    $('.displayBtn').one('click', function(){
        $.getJSON("js/cars.json", function(data){
            let carsList = []
            $.each(data, function(){
                carsList.push(`
                    <div id='${this.id_voitures}' role="group" class="card">
                        <figure class="image is-4by4">
                            <img src='/sources${this.image}' alt='image ${this.marque}'>
                            <figcaption>
                                <h3 class="title is-4">${this.marque}   |   ${this.annee}</h3>
                                <p>${this.description}</p>
                                <p>Type : ${this.type} - Etat : ${this.etat}</p>
                            </figcaption>
                        </figure>
                    </div>`
                );
            });
            $('.carsBox').append(carsList);
            console.log(data);
        })
    })
});