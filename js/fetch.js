$(document).ready((e)=>{
    e.preventDefault;
    $('.displayBtn').on('click', function(){
        $.getJSON("js/cars.json", function(data){
            let carsList = []
            $.each(data, function(){
                carsList.push(`
                    <div id='${this.id_voitures}' role="region" class="card">
                        <div class="card-image">
                        <figure class="image is-4by3">
                            <img src='/sources${this.image}' alt='image ${this.marque}'>
                        </figure>
                        </div>
                        <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                            <p class="title is-4">${this.marque} | ${this.annee}</p>
                            </div>
                        </div>
                        <div class="content">
                            ${this.description}
                            <br>
                            <p>Type : ${this.type} - Etat : ${this.etat}</p>
                        </div>
                        </div>
                    </div>`
                );
            });
            $('.carsBox').append(carsList);
            console.log(data);
        })
    })
});