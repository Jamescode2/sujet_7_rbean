//fetch etape 1
// function readWeather() {
//     document.getElementById("Temps").style.display = 'block';
//     let cityValue = document.getElementById('city').value;
//     let baseUrl = "https://api.openweathermap.org/data/2.5/weather?appid=ed2bea1ff679d2915c31afbecfdcf43e&units=metric&lang=fr&q=";
//     fetch(baseUrl+cityValue)
//         .then(reponse => reponse.json())
//         .then(reponse2 => {
//             console.log(reponse2);
//             var date = new Date();
//             var day = date.getDay();
//             switch (day) {
//                 case 1:
//                     document.getElementById('jourSemaine').innerHTML = 'Monday';
//                     break;
//                 case 2:
//                     document.getElementById('jourSemaine').innerHTML = 'Tuesday';
//                     break;
//                 case 3:
//                     document.getElementById('jourSemaine').innerHTML = 'Wednesday';
//                     break;
//                 case 4:
//                     document.getElementById('jourSemaine').innerHTML = 'Thursday';
//                     break;
//                 case 5:
//                     document.getElementById('jourSemaine').innerHTML = 'Friday';
//                     break;
//                 case 6:
//                     document.getElementById('jourSemaine').innerHTML = 'Saturday';
//                     break;
//                 case 7:
//                     document.getElementById('jourSemaine').innerHTML = 'Sunday';
//                     break;
//                 default:
//                     break;
//             }
//             //nom de la ville
//             document.querySelector('.card-title').innerHTML = '<br>'+reponse2.name+'<br>';
//             // Description 
//             document.querySelector('.card-title').innerHTML += '<br>' + reponse2.weather[0].description;
//             //image temps actuelle
//             let nuage = reponse2.weather[0].main;
//             switch (nuage) {
//                 case 'Clouds':
//                     //methode 1
//                     document.getElementById("Temps").setAttribute("src", 'clouds.svg');
//                     //methode 2
//                     // document.getElementById("Temps").src = 'clouds.svg';
//                     break;
//                 case 'Cloudy':
//                     document.getElementById("Temps").setAttribute("src", 'cloudy.svg');
//                     break;
//                 case 'Rain':
//                     document.getElementById("Temps").setAttribute("src", 'rain.svg');
//                     break;
//                 case 'Snow':
//                     document.getElementById("Temps").setAttribute("src", 'snow.svg');
//                     break;
//                 case 'Sun':
//                     document.getElementById("Temps").setAttribute("src", 'sun.svg');

//                     break;
//                 default:
//                     document.getElementById("Temps").setAttribute("src", 'rain.svg');
//                     break;
//             }
//             //affiche temps
//             document.querySelector('.temp-weather').innerHTML = Math.round(reponse2.main.temp) + '°';
//             document.querySelector('.temp-max-weather').innerHTML = Math.round(reponse2.main.temp_max) + '°';
//             document.querySelector('.temp-min-weather').innerHTML = Math.round(reponse2.main.temp_min) + '°';
//         })
// };


//fetch etape 2
// function readWeather() {
//     document.getElementById('afficheJour').style.display = 'flex';
//     let cityValue = document.getElementById('city').value;
//     let baseUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=ed2bea1ff679d2915c31afbecfdcf43e&units=metric&lang=fr&q=";
//     fetch(baseUrl + cityValue)
//         .then(reponse => reponse.json())
//         .then(reponse2 => {
//             console.log(reponse2);
//             function afficheJour(jour, Temps, jsonJour, jsonTemps) {
//                 let date = new Date(jsonJour);
//                 let day = date.getDay();
//                 switch (day) {
//                     case 1:
//                         document.getElementById(jour).innerHTML = 'Monday';
//                         break;
//                     case 2:
//                         document.getElementById(jour).innerHTML = 'Tuesday';
//                         break;
//                     case 3:
//                         document.getElementById(jour).innerHTML = 'Wednesday';
//                         break;
//                     case 4:
//                         document.getElementById(jour).innerHTML = 'Thursday';
//                         break;
//                     case 5:
//                         document.getElementById(jour).innerHTML = 'Friday';
//                         break;
//                     case 6:
//                         document.getElementById(jour).innerHTML = 'Saturday';
//                         break;
//                     case 0:
//                         document.getElementById(jour).innerHTML = 'Sunday';
//                         break;
//                     default:
//                         break;
//                 }
//                 setTimeout(() => {
//                     switch (jsonTemps) {
//                         case 'Clouds':
//                             document.getElementById(Temps).setAttribute("src", 'clouds.svg');
//                             break;
//                         case 'Cloudy':
//                             document.getElementById(Temps).setAttribute("src", 'cloudy.svg');
//                             break;
//                         case 'Rain':
//                             document.getElementById(Temps).setAttribute("src", 'rain.svg');
//                             break;
//                         case 'Snow':
//                             document.getElementById(Temps).setAttribute("src", 'snow.svg');
//                             break;
//                         case 'Sun':
//                             document.getElementById(Temps).setAttribute("src", 'sun.svg');
//                             break;
//                         default:
//                             document.getElementById(Temps).setAttribute("src", 'rain.svg');
//                             break;
//                     }
//                 }, 500);

//             }
//             afficheJour('jour1', 'Temps1', reponse2.list[0].dt_txt, reponse2.list[0].weather[0].main);
//             afficheJour('jour2', 'Temps2', reponse2.list[8].dt_txt, reponse2.list[8].weather[0].main);
//             afficheJour('jour3', 'Temps3', reponse2.list[16].dt_txt, reponse2.list[16].weather[0].main);
//             afficheJour('jour4', 'Temps4', reponse2.list[24].dt_txt, reponse2.list[24].weather[0].main);
//             afficheJour('jour5', 'Temps5', reponse2.list[32].dt_txt, reponse2.list[32].weather[0].main);
//         })
// };

//fetch etape 3
// function readWeather() {
//     document.getElementById('afficheJour').style.display = 'flex';
//     let cityValue = document.getElementById('city').value;
//     let baseUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=ed2bea1ff679d2915c31afbecfdcf43e&units=metric&lang=fr&q=";
//     fetch(baseUrl + cityValue)
//         .then(reponse => reponse.json())
//         .then(reponse2 => {
//             let tab = [['jour1', 'Temps1', reponse2.list[0].dt_txt, reponse2.list[0].weather[0].main],
//             ['jour2', 'Temps2', reponse2.list[8].dt_txt, reponse2.list[8].weather[0].main],
//             ['jour3', 'Temps3', reponse2.list[16].dt_txt, reponse2.list[16].weather[0].main],
//             ['jour4', 'Temps4', reponse2.list[24].dt_txt, reponse2.list[24].weather[0].main],
//             ['jour5', 'Temps5', reponse2.list[32].dt_txt, reponse2.list[32].weather[0].main],
//             ]
//             function resetAllJour() {
//                 for (let i = 0; i < 5; i++) {
//                     document.getElementById(tab[i][0]).innerHTML = '';
//                     document.getElementById(tab[i][1]).setAttribute("src", '');
//                 }
//             }
//             resetAllJour();

//             function afficheJour(jour, Temps, jsonJour, jsonTemps) {
//                 let date = new Date(jsonJour);
//                 let day = date.getDay();
//                 switch (day) {
//                     case 1:
//                         document.getElementById(jour).innerHTML = 'Monday';
//                         break;
//                     case 2:
//                         document.getElementById(jour).innerHTML = 'Tuesday';
//                         break;
//                     case 3:
//                         document.getElementById(jour).innerHTML = 'Wednesday';
//                         break;
//                     case 4:
//                         document.getElementById(jour).innerHTML = 'Thursday';
//                         break;
//                     case 5:
//                         document.getElementById(jour).innerHTML = 'Friday';
//                         break;
//                     case 6:
//                         document.getElementById(jour).innerHTML = 'Saturday';
//                         break;
//                     case 0:
//                         document.getElementById(jour).innerHTML = 'Sunday';
//                         break;
//                     default:
//                         break;
//                 }
//                 setTimeout(() => {
//                     switch (jsonTemps) {
//                         case 'Clouds':
//                             document.getElementById(Temps).setAttribute("src", 'clouds.svg');
//                             break;
//                         case 'Cloudy':
//                             document.getElementById(Temps).setAttribute("src", 'cloudy.svg');
//                             break;
//                         case 'Rain':
//                             document.getElementById(Temps).setAttribute("src", 'rain.svg');
//                             break;
//                         case 'Snow':
//                             document.getElementById(Temps).setAttribute("src", 'snow.svg');
//                             break;
//                         case 'Sun':
//                             document.getElementById(Temps).setAttribute("src", 'sun.svg');
//                             break;
//                         default:
//                             document.getElementById(Temps).setAttribute("src", 'rain.svg');
//                             break;
//                     }
//                 }, 500);

//             }

//             let nbJourSelect = document.getElementById('select').value;
//             function affichenbJourSelect(nbJourSelect) {
//                 for (let i = 0; i < parseInt(nbJourSelect); i++) {
//                     afficheJour(tab[i][0], tab[i][1], tab[i][2], tab[i][3]);
//                 }
//             }
//             switch (nbJourSelect) {
//                 case '1':
//                     affichenbJourSelect(nbJourSelect)
//                     break;
//                 case '2':
//                     affichenbJourSelect(nbJourSelect)
//                     break;
//                 case '3':
//                     affichenbJourSelect(nbJourSelect)
//                     break;
//                 case '4':
//                     affichenbJourSelect(nbJourSelect)
//                     break;
//                 case '5':
//                     affichenbJourSelect(nbJourSelect)
//                     break;
//                 default:
//                     break;
//             }

//         })
// };

//etape 4
function readWeather() {
    document.getElementById('afficheJour').style.display = 'flex';
    let cityValue = document.getElementById('city').value;
    let baseUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=ed2bea1ff679d2915c31afbecfdcf43e&units=metric&lang=fr&q=";
    fetch(baseUrl + cityValue)
        .then(reponse => reponse.json())
        .then(reponse2 => {
            console.log(reponse2);
            fetch('https://api.sunrise-sunset.org/json?lat=' + reponse2.city.coord.lat + '&lon=' + reponse2.city.coord.lon + '&date=today')
                .then(reponse3 => reponse3.json())
                .then(reponse4 => {
                    console.log(reponse4);
                    let date = new Date();
                    let hours = date.getHours();
                    console.log(typeof parseInt((reponse4.results.civil_twilight_begin.split(' ')[0]).split(':')[0]));
                    if (hours >= parseInt((reponse4.results.civil_twilight_begin.split(' ')[0]).split(':')[0]) && hours <= parseInt((reponse4.results.civil_twilight_begin.split(' ')[0]).split(':')[0])) {
                        document.body.style.backgroundColor = 'aquamarine';
                    }
                    if (hours < parseInt((reponse4.results.civil_twilight_begin.split(' ')[0]).split(':')[0])) {
                        document.body.style.backgroundColor = 'blue';
                    }
                    let heure;
                    switch (parseInt((reponse4.results.civil_twilight_end.split(' ')[0]).split(':')[0])) {
                        case 1:
                            heure = 13;
                            break;
                        case 2:
                            heure = 14;
                            break;
                        case 3:
                            heure = 15;
                            break;
                        case 4:
                            heure = 16;
                            break;
                        case 5:
                            heure = 17;
                            break;
                        case 6:
                            heure = 18;
                            break;
                        case 7:
                            heure = 19;
                            break;
                        case 8:
                            heure = 20;
                            break;
                        case 9:
                            heure = 21;
                            break;
                        case 10:
                            heure = 22;
                            break;
                        case 11:
                            heure = 23;
                            break;
                        case 12:
                            heure = 24;
                            break;

                        default:
                            break;
                    }
                    if (hours >= 13 && hours <= heure) {
                        document.body.style.backgroundColor = 'aquamarine';
                    }
                    if (hours > heure) {
                        document.body.style.backgroundColor = 'blue';
                    }
                })


            let tab = [['jour1', 'Temps1', reponse2.list[0].dt_txt, reponse2.list[0].weather[0].main],
            ['jour2', 'Temps2', reponse2.list[8].dt_txt, reponse2.list[8].weather[0].main],
            ['jour3', 'Temps3', reponse2.list[16].dt_txt, reponse2.list[16].weather[0].main],
            ['jour4', 'Temps4', reponse2.list[24].dt_txt, reponse2.list[24].weather[0].main],
            ['jour5', 'Temps5', reponse2.list[32].dt_txt, reponse2.list[32].weather[0].main],
            ]
            function resetAllJour() {
                for (let i = 0; i < 5; i++) {
                    document.getElementById(tab[i][0]).innerHTML = '';
                    document.getElementById(tab[i][1]).setAttribute("src", '');
                }
            }
            resetAllJour();

            function afficheJour(jour, Temps, jsonJour, jsonTemps) {
                let date = new Date(jsonJour);
                let day = date.getDay();
                switch (day) {
                    case 1:
                        document.getElementById(jour).innerHTML = 'Monday';
                        break;
                    case 2:
                        document.getElementById(jour).innerHTML = 'Tuesday';
                        break;
                    case 3:
                        document.getElementById(jour).innerHTML = 'Wednesday';
                        break;
                    case 4:
                        document.getElementById(jour).innerHTML = 'Thursday';
                        break;
                    case 5:
                        document.getElementById(jour).innerHTML = 'Friday';
                        break;
                    case 6:
                        document.getElementById(jour).innerHTML = 'Saturday';
                        break;
                    case 0:
                        document.getElementById(jour).innerHTML = 'Sunday';
                        break;
                    default:
                        break;
                }
                setTimeout(() => {
                    switch (jsonTemps) {
                        case 'Clouds':
                            document.getElementById(Temps).setAttribute("src", 'clouds.svg');
                            break;
                        case 'Cloudy':
                            document.getElementById(Temps).setAttribute("src", 'cloudy.svg');
                            break;
                        case 'Rain':
                            document.getElementById(Temps).setAttribute("src", 'rain.svg');
                            break;
                        case 'Snow':
                            document.getElementById(Temps).setAttribute("src", 'snow.svg');
                            break;
                        case 'Sun':
                            document.getElementById(Temps).setAttribute("src", 'sun.svg');
                            break;
                        default:
                            document.getElementById(Temps).setAttribute("src", 'rain.svg');
                            break;
                    }
                }, 500);

            }

            let nbJourSelect = document.getElementById('select').value;
            function affichenbJourSelect(nbJourSelect) {
                for (let i = 0; i < parseInt(nbJourSelect); i++) {
                    afficheJour(tab[i][0], tab[i][1], tab[i][2], tab[i][3]);
                }
            }
            switch (nbJourSelect) {
                case '1':
                    affichenbJourSelect(nbJourSelect)
                    break;
                case '2':
                    affichenbJourSelect(nbJourSelect)
                    break;
                case '3':
                    affichenbJourSelect(nbJourSelect)
                    break;
                case '4':
                    affichenbJourSelect(nbJourSelect)
                    break;
                case '5':
                    affichenbJourSelect(nbJourSelect)
                    break;
                default:
                    break;
            }

        })
};