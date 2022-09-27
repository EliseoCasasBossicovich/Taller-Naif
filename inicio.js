// GRID INDEX
const girdIndex = document.getElementById("girdIndex");
let contGridIn = document.createElement("article");
contGridIn.innerHTML = ` <div class="gridIndex__integrantes">
                            <a href="paginas/integrantes.html"><button class="girdIndex__boton" >Integrantes</button></a>
                        </div>
                        <div class="gridIndex__muestras">
                            <a href="paginas/muestras.html"><button class="girdIndex__boton">Muestras</button></a>
                        </div>
                        <div class="gridIndex__historia">
                            <a href="paginas/historia.html"><button class="girdIndex__boton">Hisoria</button></a>
                        </div>
                        <div class="gridIndex__contactanos">
                            <a href="paginas/contactanos.html"><button class="girdIndex__boton">Cntáctanos</button></a>
                        </div>`;
girdIndex.appendChild(contGridIn);