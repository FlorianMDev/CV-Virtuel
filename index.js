/* let modal1 = ''
let modal2 = ''
let modal3 = '' */

let scale = document.querySelector(".scale")
let bigScale = document.querySelector(".bigScale")

let borderScales = document.getElementById("borderScales").getAttribute('data')

// "scale" correspond à l'espace vide dans lequel la jauge vient s'insérer. On veut savoir la largeur totale.
let largeurMaxJauge = scale.offsetWidth - (borderScales);
let largeurMaxGrandesJauges = bigScale.offsetWidth - (borderScales);
// On créé des tableaux qui serviront avec une boucle for à définir des variables pour chaque jauge.
let jauges = document.querySelectorAll(".jauges")
let grandeJauges = document.querySelectorAll(".grandeJauges")

let r = [];
let g = [];
let largeurJauge = [];

let r2 = [];
let g2 = [];
let largeurGrandeJauge = [];

for (let i = 0; i < jauges.length; i++) {
    // La fonction offsetWidth renvoie la largeur en pixels. On la convertit en pourcentage de remplissage de la barre (scale)
    largeurJauge[i] = (jauges[i].offsetWidth / (largeurMaxJauge / 100))
    // On joue sur les paramètres r et g du rgb pour passer du rouge au vert. Pour des valeurs basses on voudra du rouge + foncé donc on réduit également le paramètre "r".
    if (largeurJauge[i] < 35) {
        r[i] = (130 - (largeurJauge[i] * 1.3))
        g[i] = (0 + (largeurJauge[i] * 1.3))
    } else {
        r[i] = (255 - (largeurJauge[i] * 2.55))
        g[i] = (0 + (largeurJauge[i] * 2.55))
    }
    // On applique finalement le style (couleur et transparence) aux jauges avec les valeurs définies ci-dessus. La transparence commence à 0.75 car des valeurs trop basses renvoient des couleurs claires sur du blanc.
    jauges[i].style.backgroundColor = `rgba(
        ${r[i]},
        ${g[i]},
        0,
        ${0.75 + (largeurJauge[i] / 400)}
        )`;
}

for (let i = 0; i < grandeJauges.length; i++) {
    // La fonction offsetWidth renvoie la largeur en pixels. On la convertit en pourcentage de remplissage de la barre (scale)
    largeurGrandeJauge[i] = (grandeJauges[i].offsetWidth / (largeurMaxGrandesJauges / 100))
    // On joue sur les paramètres r et g du rgb pour passer du rouge au vert. Pour des valeurs basses on voudra du rouge + foncé donc on réduit également le paramètre "r".
    if (largeurGrandeJauge[i] < 35) {
        r2[i] = (130 - (largeurGrandeJauge[i] * 1.3))
        g2[i] = (0 + (largeurGrandeJauge[i] * 1.3))
    } else {
        r2[i] = (255 - (largeurGrandeJauge[i] * 2.55))
        g2[i] = (0 + (largeurGrandeJauge[i] * 2.55))
    }
    // On applique finalement le style (couleur et transparence) aux grandeJauges avec les valeurs définies ci-dessus. La transparence commence à 0.75 car des valeurs trop basses renvoient des couleurs claires sur du blanc.
    grandeJauges[i].style.backgroundColor = `rgba(
        ${r2[i]},
        ${g2[i]},
        0,
        ${0.75 + (largeurGrandeJauge[i] / 400)}
        )`;
}


console.log(`${jauges[0].offsetWidth} /${largeurMaxJauge / 100} = ${largeurJauge[0]}`)

console.log(`${grandeJauges[0].offsetWidth} /${largeurMaxGrandesJauges / 100} = ${largeurGrandeJauge[0]}`)

console.log(largeurJauge[0])
console.log(largeurMaxJauge)
console.log(borderScales)
