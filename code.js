var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cc31bf77-c137-4b68-895e-14b0b53f862c","3056d4b5-d28e-42fb-b45c-3f5be5fbbd55","6fa75c53-e2c6-4e87-b713-39bb4b442075","35a776d9-11b6-4869-b216-cc19362ecdcb","52835591-2a90-453f-8bd7-76f9e5a006ff","305dd69f-214c-439d-b6cc-88e109ecae40","671202b0-67a1-48df-a560-9c3e24c40d92","d2d88412-6d39-4c15-bdf4-091de29d24da","22d71cd5-7b30-4ecf-a650-0f7d748e29f9"],"propsByKey":{"cc31bf77-c137-4b68-895e-14b0b53f862c":{"name":"jogo","sourceUrl":"assets/api/v1/animation-library/gamelab/2RNMR6.K0ycRUzGH2f_.KDC56AlzdXPI/category_backgrounds/sunshine_showers.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"2RNMR6.K0ycRUzGH2f_.KDC56AlzdXPI","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2RNMR6.K0ycRUzGH2f_.KDC56AlzdXPI/category_backgrounds/sunshine_showers.png"},"3056d4b5-d28e-42fb-b45c-3f5be5fbbd55":{"name":"nuvem","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"C2ODK8eckTJvfzl9EEH14_0nH92uSEOS","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/3056d4b5-d28e-42fb-b45c-3f5be5fbbd55.png"},"6fa75c53-e2c6-4e87-b713-39bb4b442075":{"name":"cloud-2837231_1280-_1_.png_1","sourceUrl":"assets/v3/animations/Sn5AMN3OfUbYrDn8LmVEVoNyStaXRV_EYYfAGah_w1M/6fa75c53-e2c6-4e87-b713-39bb4b442075.png","frameSize":{"x":1280,"y":925},"frameCount":1,"looping":true,"frameDelay":4,"version":"r0KBS6NbIiobu40754vOB_NOEILGQmsY","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":925},"rootRelativePath":"assets/v3/animations/Sn5AMN3OfUbYrDn8LmVEVoNyStaXRV_EYYfAGah_w1M/6fa75c53-e2c6-4e87-b713-39bb4b442075.png"},"35a776d9-11b6-4869-b216-cc19362ecdcb":{"name":"jogador1","sourceUrl":"assets/api/v1/animation-library/gamelab/3OPR7fNp2GuC01rgoimtapzXeAYybc.O/category_retro/retrocreature_03.png","frameSize":{"x":398,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"3OPR7fNp2GuC01rgoimtapzXeAYybc.O","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3OPR7fNp2GuC01rgoimtapzXeAYybc.O/category_retro/retrocreature_03.png"},"52835591-2a90-453f-8bd7-76f9e5a006ff":{"name":"pterodactyl-dinosaur-brik-bin-dino-dinosaur-originals-pixel-art-terrordactyl-5a24f9bcf6c96a8d29720c0e.brickImg_compressed.jpg_1","sourceUrl":"assets/v3/animations/Sn5AMN3OfUbYrDn8LmVEVoNyStaXRV_EYYfAGah_w1M/52835591-2a90-453f-8bd7-76f9e5a006ff.png","frameSize":{"x":1200,"y":1200},"frameCount":1,"looping":true,"frameDelay":4,"version":"0fDO8C.pGNRkYqOVo5Eruf01myEFk7ZZ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/v3/animations/Sn5AMN3OfUbYrDn8LmVEVoNyStaXRV_EYYfAGah_w1M/52835591-2a90-453f-8bd7-76f9e5a006ff.png"},"305dd69f-214c-439d-b6cc-88e109ecae40":{"name":"a","sourceUrl":null,"frameSize":{"x":1200,"y":1200},"frameCount":1,"looping":true,"frameDelay":12,"version":"6vxy9XLU98LFOd8YU3gSbXHrgcmBV4Yj","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/305dd69f-214c-439d-b6cc-88e109ecae40.png"},"671202b0-67a1-48df-a560-9c3e24c40d92":{"name":"inimigo","sourceUrl":"assets/api/v1/animation-library/gamelab/pGYLvPztt667XUxB0sylUZvmbhdkDTJo/category_fantasy/gameplayadventure_09.png","frameSize":{"x":387,"y":344},"frameCount":1,"looping":true,"frameDelay":2,"version":"pGYLvPztt667XUxB0sylUZvmbhdkDTJo","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":387,"y":344},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pGYLvPztt667XUxB0sylUZvmbhdkDTJo/category_fantasy/gameplayadventure_09.png"},"d2d88412-6d39-4c15-bdf4-091de29d24da":{"name":"ovni","sourceUrl":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png","frameSize":{"x":386,"y":267},"frameCount":1,"looping":true,"frameDelay":2,"version":"1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":267},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png"},"22d71cd5-7b30-4ecf-a650-0f7d748e29f9":{"name":"inimiga","sourceUrl":"assets/api/v1/animation-library/gamelab/yOXpsk8J9HJkWN20pDWSWUAaXQE4fg1e/category_fantasy/gameplayadventure_14.png","frameSize":{"x":393,"y":348},"frameCount":1,"looping":true,"frameDelay":2,"version":"yOXpsk8J9HJkWN20pDWSWUAaXQE4fg1e","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":348},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yOXpsk8J9HJkWN20pDWSWUAaXQE4fg1e/category_fantasy/gameplayadventure_14.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var fundo = createSprite(200,200);
 fundo.setAnimation("jogo");
var jogador = createSprite(190,350,40,40);
jogador.setAnimation("jogador1"); 
jogador.scale = 0.16;
var barreira = createSprite(0,0,800,10);
barreira.shapeColor = "white";
var inimigo1 = createSprite(50,260,30,30);
inimigo1.setAnimation("inimiga");
inimigo1.scale = 0.12;
var inimigo2 = createSprite(100,185,30,30);
inimigo2.setAnimation("inimiga");
inimigo2.scale = 0.12;
var ovni = createSprite(195,55,60,30);
ovni.setAnimation("ovni");
ovni.scale = 0.30;
var inimigo3 = createSprite(170,265,30,30);
inimigo3.setAnimation("inimigo");
inimigo3.scale = 0.12;
var inimigo5 = createSprite(220,185,30,30);
inimigo5.setAnimation("inimigo");
inimigo5.scale = 0.12;
var inimigo6 = createSprite(280,260,30,30);
inimigo6.setAnimation("inimiga");
inimigo6.scale = 0.12;
var inimigo7 = createSprite(320,185,30,30);
inimigo7.setAnimation("inimigo");
inimigo7.scale = 0.12;
var pontos = 0;
var vidas = 2;



function draw() {
background("fundo");
createEdgeSprites();


fill("black") ;
textSize("10");
text("Vidas:", -vidas,20,70);

  
text("Pontos:",+pontos,20,90);
fill("black") ;
textSize("10");




if(keyDown("W")){
  jogador.y = jogador.y - 4;
}

if(keyDown("S")){
  jogador.y = jogador.y + 4;
}

if (keyDown("A")) {
  jogador.x = jogador.x -4;
}

if (keyDown("D")) {
  jogador.x = jogador.x +4;
}

if(jogador.isTouching(inimigo1)|| jogador.isTouching(inimigo2) || jogador.isTouching(inimigo6) ){
  vidas = vidas - 1 ;
  inimigo1.destroy();
}


if(jogador.isTouching(inimigo3)|| jogador.isTouching(inimigo5) || jogador.isTouching(inimigo7) ){
  pontos = pontos + 1 ;
}



if(jogador.isTouching(inimigo1)){
 inimigo1.destroy();
}
  
  
if(jogador.isTouching(inimigo2)){
 inimigo2.destroy();
}

if(jogador.isTouching(inimigo3)){
 inimigo3.destroy();
}
 if(jogador.isTouching(inimigo5)){
 inimigo5.destroy();
}

if(jogador.isTouching(inimigo6)){
 inimigo6.destroy();
}

if(jogador.isTouching(inimigo7)){
 inimigo7.destroy();
}

if(jogador.isTouching(ovni)){
  jogador.destroy();
  ovni.destroy();
  fill("blue");
  text("Você retonou a seu planeta!",200,200);
  textSize("34");
}


jogador.bounceOff(leftEdge);
jogador.bounceOff(rightEdge);
jogador.bounceOff(bottomEdge);
jogador.bounceOff(barreira);
jogador.bounceOff(inimigo1);
jogador.bounceOff(inimigo2);
jogador.bounceOff(inimigo3);
jogador.bounceOff(inimigo5);
jogador.bounceOff(inimigo6);
jogador.bounceOff(inimigo7);

drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
