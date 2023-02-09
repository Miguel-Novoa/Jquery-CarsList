$(document).ready((e)=>{
    e.preventDefault;
    $('.displayBtn').on('click', function(){
        $.getJSON("js/cars.js", function(data){
            let carsList = []
            $.each(data, function(){
                carsList.push(`<ul id='${this.id_voitures}'
                <li>Marque : ${this.marque}</li>
                <li>Annee : ${this.annee}</li>
                <li>Type : ${this.type}</li>
                <li>Etat : ${this.etat}</li>
                <li>${this.description}</li>
                <img src='../sources${this.image}' alt='image ${this.marque}'>
                </ul>`)
            })
            $('.carsBox').append(carsList)
            console.log(data)
        })
    })
});