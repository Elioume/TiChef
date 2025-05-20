fetch(`data.json`)
.then(rep=>rep.json())
.then(data=>{
    console.log(data)
    data.forEach(p=>{
        afficherRecette(p)
    })
})

function afficherRecette(recette){
    let tabIgredients = recette.ingredients
    let liIngredients =""
    tabIgredients.forEach(i=>{
        liIngredients +=`<li class="mt-5">${i.quantite} ${i.unite} ${i.aliment}</li>`
    })

    let tabEtapes = recette.etapes
    let liEtapes =""
    tabEtapes.forEach(e=>{
        liEtapes +=`<li class="mt-5">${e.descEtape}</li>`
    })

    document.getElementById(`fiches-recette`).innerHTML += `
        <!-- Template Fiche recette n°1 -->
            <div class="borderBox">
                <!-- Div Titre recette -->
                <div class="flex align-center">
                    <h2 class="pr-16 orange">${recette.nom}</h2>
                    <a href="" class="pr-16 imgSL flex"><img src="assets/like.png" alt="" class="imgT"></a>
                    <a href="" class="pr-16 imgSL flex"><img src="assets/share.png" alt="" class="imgT"></a>
                </div>

                <!-- Grande Div -->
                <div class="flex justify-between gap">

                    <!-- Div Image | Gauche -->
                    <div class="large-3 medium-6 small-12">
                        <div class="flex gap-16">

                            <!-- Div Image/P | Haut -->
                            <div class="large-12 medium-12 small-12">

                                <img src="${recette.img [0]}" alt="" class="responsive">

                                <!-- Div Paragraphe -->
                                <div class="bgOrange ptb-16 pl-10 borderRadiusb8">
                                    <p class="blanc">${recette.nom}</p>
                                </div>

                            </div>

                            <!-- Images | Bas -->
                            <img src="${recette.img [1]}" alt="" class="large-4 medium-4 small-4 borderRadius5">
                            <img src="${recette.img [2]}" alt="" class="large-4 medium-4 small-4 borderRadius5">
                            <img src="${recette.img [3]}" alt="" class="large-4 medium-4 small-4 borderRadius5">
                        </div>


                    </div>

                    <!-- Div Tags/Details/Ingredients | Milieu -->
                    <div class="large-3 medium-6 small-12">

                        <!-- Div Tags -->
                        <div class="flex justify-between">

                            <!-- Tag n°1 | Nombre Personne-->
                            <div class="flex justify-between">

                                <img src="assets/nombre-icone.png" alt="" class="imgTags">
                                <p class="orange ml-5 mr-5">${recette.portions}</p>

                            </div>

                            <!-- Tag n°2 | Durée cuisson-->
                            <div class="flex justify-between">

                                <img src="assets/cuisson-icone.png" alt="" class="imgTags">
                                <p class="orange ml-5 mr-5">${recette.tempCuisson}</p>

                            </div>

                            <!-- Tag n°3 | Durée temps prep-->
                            <div class="flex justify-between">

                                <img src="assets/duree-icone.png" alt="" class="imgTags">
                                <p class="orange ml-5 mr-5  ">${recette.tempPreparation}</p>

                            </div>

                        </div>

                        <!-- Div Details | Milieu -->
                        <div>

                            <h3 class="orange mt-16">Details</h3>

                            <p>${recette.desc}</p>

                        </div>

                        <!-- Div Ingredients | Bas-->
                        <div>

                            <h3 class="orange mt-16">Ingredients</h3>

                            <ul>
                               ${liIngredients}
                            </ul>

                        </div>

                    </div>

                    <!-- Etapes | Droite -->
                    <div class="large-6 medium-12 small-12">

                        <h3 class="orange">Étapes</h3>

                        <ul>
                            ${liEtapes}
                        </ul>

                    </div>
                </div>
            </div>`
}

fetch(`articles-data.json`)
.then(rep=>rep.json())
.then(data=>{
    console.log(data)
    data.forEach(p=>{
        afficherAritcle(p)
    })
})

function afficherAritcle(article){
    document.getElementById(`fiches-article`).innerHTML += `
     <!-- Template Article de cuisine -->
            <div class="borderBox flex justify-between">
                <!-- PARTIE GAUCHE -->
                <div class="large-6">
                    <img src="${article.img}" alt=""  class="responsive">
                </div>

                <!-- PARTIE DROITE -->
                <div class="large-6">
                    <h2 class="orange">${article.titre}</h2>
                    <div class="flex justify-between">
                        <p class="orange">${article.auteur}</p>
                        <p class="orange">${article.date}</p>
                    </div>
                    <p class="mt-5 mb-20">${article.resume}</p>
                    <a href="" class="btn orange">Lire l'article</a>
                </div>
            </div>`

}