import React from "react";
import "./SistemaDeStats.css";
import WeaponStats from '../../shared/images/Weapon Stats.PNG';
import ArmorStats from '../../shared/images/ArmorStats.PNG';

function SistemaDeStats(props) {
  return (
    <div class="Origin">
      <br />
      <br />
      <div class="container-fluid">
        <div class="row">
          <div class="col-1">
            -
          </div>
          <div class="col-2">
            <div class="card">
              <img src={"https://cutt.ly/oZeTDJT"} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Armas De Tutorial</h5>
                <p class="card-text">Son las Armas con las que inicias el juego una vez que llegues a cierto nivel no las volveras a ver.
                no le tomes mucha importancia armas como la KHVOSTOV son muy divertidas de usar aunque tengan un nivel de Luz bajo</p>
                <br />
                <br />
                <br />
                </div>
          </div>
          <br />
          <br />
          </div>
          <div class="col-2">
          <div class="card">
              <img src={"https://cutt.ly/gZeTIXY"} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Armas Basicas</h5>
                <p class="card-text">Son las Armas con las que aprendes del uso de perks en el juego una vez que aprendes estas mecanicas no se vuelven a ver.
                aqui si no valen la pena las demas solo son armas de transcion , usalas y cambialas cuando consigas mejor equipamiento</p>
                <br />
                <br />
                </div>
          </div>
          <br />
          <br />
          </div>
          <div class="col-2">
            <div class="card">
              <img src={"https://cutt.ly/cZeTCww"} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Armas Comunes</h5>
                <p class="card-text">Son las Armas con mayor DropRate del juego , aunque no son muy usadas si que seran el pan de cada dia como parte de tu botin.
                fusiles de pulsos como el valle Cartesiano son muy divertidos de jugar y se equiparan a la potencia de armas legendarias</p>
                <br />
                </div>
          </div>
          <br />
          <br />
          </div>
          <div class="col-2">
            <div class="card">
              <img src={"https://cutt.ly/MZeT1JE"} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Armas legendarias</h5>
                <p class="card-text">Son las Armas que se consiguen completando actividades de temporada o derrotando enemigos de nivel medio.
                el arma que mas uses probablemente este en esta categoria armas muy buenas y divertidas para pasar horas con ellas en tu aventura</p>
                <br />
                <br />
                </div>
          </div>
          <br />
          <br />
          </div>
          <div class="col-2">
            <div class="card">
              <img src={"https://cutt.ly/mZeT6tw"} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Armas Exoticas</h5>
                <p class="card-text">Son las Armas con el Droprate mas bajo del juego y suelen tener Perks que las hacen destacar por encima de las demas , se consiguen
                 normalmente en aventuras o en drops al finalizar misiones de Alto nivel.</p>
                <br />
                <br />
                <br />
                </div>
          </div>
          <br />
          <br />
          </div>
          <div class="col-1">
            -
          </div>
        </div>
      </div>
      <div class="container-fluid">
      <div class="row">
        <div class="col-4">
            <img src={WeaponStats} alt="..." />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img src={ArmorStats} alt="..." />
            <br />
            <br />
            <br />
            <br />
        </div>
        <div class="col-8">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Impacto y Radio de Explosi??n
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                    <p>La fuerza de cada disparo del arma. 
                      Chorros de balas como lo son los fusiles autom??ticos y los subfusiles tienden a tener estad??sticas menores en este aspecto, 
                      mientras que bestias como los fusiles de francotirador y los ca??ones de mano son m??s fuertes. En los lanzacohetes y lanzagranadas 
                      esta estad??stica se reemplaza por el radio de explosi??n, una medida del ??rea que cubre la explosi??n.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Alcance y Velocidad(de disparo)
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                    <p>Un indicador de cu??nto da??o del arma se reduce con la distancia incrementada. 
                      Entre m??s larga la barra, mejor ser?? desde la distancia. Naturalmente,
                       vas a ver muy buenas puntuaciones de esto en los fusiles de francotirador y explorador, 
                       y malas en armas como las escopetas. La estad??stica equivalente en las armas explosivas 
                       es la velocidad, un indicador de qu?? tan r??pido viaja el proyectil.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Estabilidad
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <p>Esta estad??stica te da una idea de qu?? tan duro es el retroceso de un arma.
                   Las armas con menos estabilidad se sacuden mucho m??s que las que tienen alta estabilidad.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Manejo
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <p>El manejo b??sicamente indica qu?? tan pesada y estorbosa es un arma.
                   Una buena puntuaci??n de manejo te dice que el arma es m??s r??pida de alternar
                    y que es m??s estable cuando apuntas por la mira o cuando estas en el aire.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Velocidad de Recarga
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <p>Bastante obvio. 
                  Una mala velocidad de carga no es mala en s?? misma pero en la presi??n del combate 
                  te ver??s forzado a buscar cubierta o cambiar a un arma que todav??a tiene municiones en su cargador.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Disparos por Minuto
                </button>
              </h2>
              <div
                id="collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <p>Un indicador general de cu??nto da??o sostenido puede mantener un arma, 
                  considerando su cadencia de fuego y velocidad de recarga.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSeven">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  Cargador
                </button>
              </h2>
              <div
                id="collapseSeven"
                class="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <p>El n??mero de proyectiles que un arma 
                  puede portar cuando est?? completamente cargada.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingEight">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  Energia
                </button>
              </h2>
              <div
                id="collapseEight"
                class="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <p> La cantidad de energ??a y elemento determina qu?? 
                  tipo de modificadores se pueden aplicar a cada pieza de armadura.</p>
                </div>
              </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingNine">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  Movilidad
                </button>
              </h2>
              <div
                id="collapseNine"
                class="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <p> Aumenta la velocidad base de movimiento
                   (la velocidad al esprintar no se ve afectada).</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTen">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  Resistencia
                </button>
              </h2>
              <div
                id="collapseTen"
                class="accordion-collapse collapse"
                aria-labelledby="headingTen"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <p>Afecta la durabilidad de los escudos. 
                  M??s resistencia, mejores posibilidades de supervivencia.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingEleven">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEleven"
                  aria-expanded="false"
                  aria-controls="collapseEleven"
                >
                  Recuperacion
                </button>
              </h2>
              <div
                id="collapseEleven"
                class="accordion-collapse collapse"
                aria-labelledby="headingEleven"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <p>Influye en qu?? tan r??pido recuperas salud al ser herido.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwelve">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwelve"
                  aria-expanded="false"
                  aria-controls="collapseTwelve"
                >
                  Disciplina
                </button>
              </h2>
              <div
                id="collapseTwelve"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwelve"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <p>Influye en la velocidad de recarga de energ??a de las granadas.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThirteen">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThirteen"
                  aria-expanded="false"
                  aria-controls="collapseThirteen"
                >
                  Intelecto
                </button>
              </h2>
              <div
                id="collapseThirteen"
                class="accordion-collapse collapse"
                aria-labelledby="headingThirteen"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <p>Influye en la velocidad de recarga de la energ??a de s??per.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFourteen">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFourteen"
                  aria-expanded="false"
                  aria-controls="collapseFourteen"
                >
                  Fuerza
                </button>
              </h2>
              <div
                id="collapseFourteen"
                class="accordion-collapse collapse"
                aria-labelledby="headingFourteen"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <p>Influye en la velocidad de recarga de la energ??a cuerpo a cuerpo.</p>
                </div>
              </div>
            </div>
            <br/>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
      </div>
    </div>
  );
}

export default SistemaDeStats;
