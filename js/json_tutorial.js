const modal = document.getElementById('myModal');


    modal.innerHTML +=
        `
        <div id="m1" class="modal active">
        <div class="div_img">
          <img src="img/bemvindos/tela_tutorial1.svg" class="tutorialimg">
        </div>
        <div class="div_btn" id="firstbtn">
          <button onclick="proximoModal('m2')" class="bem_vindo_btn">Próximo</button>
        </div>
      </div>
      <div id="m2" class="modal">
        <div class="div_img">
          <img src="img/bemvindos/tela_tutorial2.svg" class="tutorialimg">
        </div>

        <div class="div_btn">
          <button onclick="proximoModal('m1')" class="bem_vindo_btn">Voltar</button>
          <button onclick="proximoModal('m3')" class="bem_vindo_btn">Próximo</button>
        </div>
      </div>
      <div id="m3" class="modal">
        <div class="div_img">
          <img src="img/bemvindos/tela_tutorial3.svg" class="tutorialimg">
        </div>
        <div class="div_btn">
          <button onclick="proximoModal('m2')" class="bem_vindo_btn">Voltar</button>
          <button onclick="proximoModal('m4')" class="bem_vindo_btn">Próximo</button>
        </div>
      </div>
      <div id="m4" class="modal">
        <div class="div_img">
          <img src="img/bemvindos/tela_tutorial4.svg" class="tutorialimg">
        </div>
        <div class="div_btn">
          <button onclick="proximoModal('m3')" class="bem_vindo_btn">Voltar</button>
          <button onclick="proximoModal('m5')" class="bem_vindo_btn">Próximo</button>
        </div>
      </div>
      <div id="m5" class="modal">
        <div class="div_img">
          <img src="img/bemvindos/tela_tutorial5.svg" class="tutorialimg">
        </div>
        <div class="div_btn">
          <button onclick="proximoModal('m4')" class="bem_vindo_btn">Voltar</button>
          <button onclick="proximoModal('m6')" class="bem_vindo_btn">Próximo</button>
        </div>
      </div>
      <div id="m6" class="modal">
        <div class="div_img">
          <img src="img/bemvindos/tela_tutorial6.svg" class="tutorialimg">
        </div>
        <div class="div_btn">
          <button onclick="proximoModal('m5')" class="bem_vindo_btn">Voltar</button>
          <button onclick="proximoModal('m7')" class="bem_vindo_btn">Próximo</button>
        </div>
      </div>
      <div id="m7" class="modal">
        <div class="div_img">
          <img src="img/bemvindos/tela_tutorial7.svg" class="tutorialimg">
        </div>
        <div class="div_btn">
          <button onclick="proximoModal('m6')" class="bem_vindo_btn">Voltar</button>
          <button onclick="proximoModal('m8')" class="bem_vindo_btn">Próximo</button>
        </div>
      </div>
      <div id="m8" class="modal">
        <div class="div_img">
          <img src="img/bemvindos/tela_tutorial8.svg" class="tutorialimg">
        </div>
        <div class="div_btn">
          <button onclick="proximoModal('m7')" class="bem_vindo_btn">Voltar</button>
          <button onclick="fecharModal()" class="bem_vindo_btn">fechar</button>
        </div>
      </div>

    `;