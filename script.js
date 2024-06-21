
// -----selecao terco ou rosario -------
 var n=0
function escolhaTerco(){
 if(n%2===0){
  document.getElementById('selecaoTercos').style.display="flex";
  document.getElementById('selecaoTercos').style.flexDirection="column";
  n++
 }
 else{
  document.getElementById('selecaoTercos').style.display="none";
  n++
 }
  }

//----funcao construtora das partes ----//
function Partes(title, content, balls){
  this.title = title;
  this.content = content;
  this.balls = balls;
}

//------criando as partes -----//
var cruz = new Partes('十字架のしるし', '父と子と聖霊のみ名によって、アーメン', false)
var credo = new Partes('使徒信条（信仰宣言）', '天地の創造主、全能の父である神を信じます。父のひとり子、わたしたちの主イエス・キリストを信じます。主は聖霊によってやどり、おとめマリアから生まれ、ポンティオ・ピラトのもとで苦しみを受け、十字架につけられて死に、葬られ、陰府（よみ）に下り、三日目に死者のうちから復活し、天に昇って、全能の父である神の右の座に着き、生者と死者を裁くために来られます。聖霊を信じ、聖なる普遍の教会、聖徒の交わり、罪のゆるし、からだの復活、永遠のいのちを信じます。アーメン。', false)
var paiNosso = new Partes('主の祈り', '天におられるわたしたちの父よ。み名が聖とされますように。み国が来ますように。みこころが天に行われるとおり、地にも行われますように。わたしたちの日ごとの糧を今日もお与えください。わたしたちの罪をおゆるしください。私たちも人をゆるします。私たちを誘惑におちいらせず、悪からお救いください。アーメン。', false)
var aveMaria = new Partes ('アヴェ・マリアの祈り', 'アヴェ・マリア、恵みに満ちた方、主はあなたとともにおられます。あなたは女のうちで祝福され、ご胎内の御子（おんこ）イエスも祝福されています。神の母聖マリア、わたしたち罪びとのために、今も、死を迎えるときも、お祈り下さい。アーメン。', true)
var gloria = new Partes('栄唱', '栄光は父と子と聖霊に。初めのように、今もいつも世々に。アーメン。', false)
var ohJesus= new Partes('死者の射祷（レクイエム）', '主よ、みもとに召された人々に、永遠の安らぎを与え、あなたの光の中で憩わせてください', false)
var mGo1 = new Partes('第一の黙想: マリア、神のお告げを受ける','"マリアは、救い主の母になるとの神のお告げを受けて、「私は主のはしためです。おことばどおり、なりますように」とこたえます。この一連をささげて、神の呼びかけに信仰をもってこたえることができるよう聖母の取り次ぎによって願いましょう。', false)
var mGo2 = new Partes('第二の黙想: マリア、エリザベトを訪問する','"マリアはエリザベトを訪問し、二人は聖霊に満たされて神の不思議なわざを讃美します。この一連をささげて、救いの訪れをたたえ、喜び合う心を聖母の取り次ぎによって願いましょう。', false)
var mGo3 = new Partes('第三の黙想: マリア、イエスを産む','"マリアは、旅先のベツレヘムでイエスを産み、布にくるんで飼い葉桶に寝かせます。この一連をささげて、神の御子を迎え、礼拝する心を聖母の取り次ぎによって願いましょう。', false)
var mGo4 = new Partes('第四の黙想: マリア、イエスをささげる','"マリアとヨセフは神殿に行き、幼子イエスを御父にささげます。この一連をささげて、毎日の生活を神に奉献することができるよう聖母の取り次ぎによって願いましょう。', false)
var mGo5 = new Partes('第五の黙想: マリア、イエスを見いだす','"マリアとヨセフは、見失ったイエスを三日目に神殿で見出します。この一連をささげて、日々の生活の中で主イエスを探し求める心を聖母の取り次ぎによって願いましょう。', false)
var mDo1 = new Partes('第一の黙想: イエス、苦しみもだえる','ゲッセマネの園でイエスは、苦しみもだえながらも、最後まで御父のみ旨に従うことを決意されます。この一連をささげて、誘惑に陥らないように目覚めて祈る恵みを聖母の取り次ぎによって願いましょう。', false)
var mDo2 = new Partes('第二の黙想: イエス、むち打たれる','不正な裁判を受けたイエスはむち打たれ、ペトロにも裏切られます。この一連をささげて、イエスがペトロにあわれみの目を向けられたことを思い、罪から立ち上がる恵みを聖母の取り次ぎによって願いましょう。', false)
var mDo3 = new Partes('第三の黙想: イエス、いばらの冠をかぶせられる','イエスは死刑の宣告を受け、兵士たちのなぶり者になり、いばらの冠をかぶせられます。この一連をささげて、誤解や侮辱をおそれずに信仰に生きることができるよう聖母の取り次ぎによって願いましょう。', false)
var mDo4 = new Partes('第四の黙想: イエス、十字架を担う','主イエスは、十字架を担い、群衆のあざけりの中をゴルゴダの丘に向かってお進みになります。この一連をささげて、わたしたちも日々、自分の十字架を担って主に従っていくことができるよう聖母の取り次ぎによって願いましょう。', false)
var mDo5 = new Partes('第五の黙想: イエス、息をひきとる','十字架につけられた主イエスは、御父のみ旨を果たして、息をひきとられます。この一連をささげて、救いの恵みがすべての人に与えられるよう聖母の取り次ぎによって願いましょう。', false)
var mGlo1 = new Partes('第一の黙想 : イエス、復活する','イエスは死に打ち勝って復活し、新しいいのちをお与えになります。この一連をささげて、わたしたちが主とともに死んで、その復活にもあずかることができるよう聖母の取り次ぎによって願いましょう。', false)
var mGlo2 = new Partes('第二の黙想 : イエス、天にあげられる復活された主イエスは、弟子たちの前で天に上げられ、御父の右の座にお着きになります。この一連をささげて、わたしたちが主の復活の証人として生きることができるよう聖母の取り次ぎによって願いましょう。', false)
var mGlo3 = new Partes('第三の黙想 : 聖霊、使徒たちにくだる','主の約束のとおり、マリアとともに祈っていた使徒たちのうえに聖霊がくだります。この一連をささげて、わたしたちが聖霊に満たされ、いつも勇気をもって救いの福音をのべ伝える者となるよう聖母の取り次ぎによって願いましょう。', false)
var mGlo4 = new Partes('第四の黙想 : マリア、天の栄光に上げられる','神は御子の母マリアをからだも魂も天の栄光に上げられました。この一連をささげて、わたしたちも天の国を求め、永遠の喜びに入ることができるよう聖母の取り次ぎによって願いましょう。', false)
var mGlo5 = new Partes('第五の黙想 : マリア、すべての人の母となる','天の栄光に上げられたマリアは、キリストの救いにあずかるすべての人の母となりました。この一連をささげて、救いを求めるすべての人が御子イエスのもとに導かれるよう聖母の取り次ぎによって願いましょう。', false)
var Lu1 = new Partes('第一の黙想 : イエス、ヨルダン川で洗礼を受ける','イエスがヨルダン川で洗礼を受けられると、聖霊がくだり、「あなたはわたしの愛する子」という御父の声が聞こえました。この一連をささげて、洗礼の恵みを神に感謝し、聖霊に導かれて、神の子として生きることができるよう聖母の取り次ぎによって願いましょう。', false)
var Lu2 = new Partes('第二の黙想 : イエス、カナの婚礼で最初のしるしを行なう','イエスは、母マリアのとりなしに応え、カナの婚礼で水をぶどう酒に変えて、弟子たちの信じる心を開いてくださいました。この一連をささげて、イエスの信仰を深めることができるよう聖母の取り次ぎによって願いましょう。', false)
var Lu3 = new Partes('イエス、神の国の到来を告げ、人々を回心に招く','イエスは、神の国の到来を告げ、人々を回心に招き、神のいつくしみを現してくださいました。この一連をささげて、イエスの招きに応え、心から悔い改めて、福音を信じることができるよう聖母の取り次ぎによって願いましょう。', false)
var Lu4 = new Partes('第四の黙想 : イエス、タボル山で栄光の姿を現す','イエスは、タボル山で三人の弟子たちに栄光の姿を現し、困難を乗り越える希望の光を示してくださいました。この一連をささげて、主の変容を心に刻み、イエスに聞き従うことができるよう聖母の取り次ぎによって願いましょう。', false)
var Lu5 = new Partes('第五の黙想 : イエス、最後の晩餐で聖体の秘跡を制定する','イエスは、最後の晩餐で、救いのいけにえ、永遠のいのちの糧として、パンとぶどう酒を用いて聖体の秘跡を定め、人類に対する愛の記念を残してくださいました。この一連をささげて、すべてを与え尽くされたイエスの愛に日々ならうことができるよう聖母の取り次ぎによって願いましょう。', false)
var SalveRainha = new Partes('元后　あわれみの母', '元后　あわれみの母, われらのいのち　喜び　希望。旅路からあなたに叫ぶエバの子 なげきながら 泣きながらも 涙の谷にあなたを慕う われらのためにとりなすかた あわれみの目をわれらに注ぎ 尊いあなたの子イエスを 旅路の果てに示してください。おお、いつくしみ、恵みあふれる 喜びのおとめマリア', false)
var fim = new Partes("","END","false")
//-----listas de objetos ----//
var lista = [cruz, credo, paiNosso, aveMaria,aveMaria,aveMaria, gloria]
var combo = [paiNosso, aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria, gloria, ohJesus]
var gozosos = [mGo1,  mGo2,  mGo3, mGo4, mGo5]
var dolorosos = [mDo1, mDo2, , mDo3,mDo4, mDo5]
var gloriosos = [mGlo1,  mGlo2, mGlo3, mGlo4, mGlo5]
var luminosos = [Lu1, Lu2, Lu3, Lu4, Lu5]

//----- construcao da lista principal---//
function rosarioInteiro(){
  apagarTela();
var ordem = lista;
  for(i in gozosos){
    ordem.push(gozosos[i])
    var ordem = ordem.concat(combo)
  }
  for(i in dolorosos){
    ordem.push(dolorosos[i])
    var ordem = ordem.concat(combo)
  }
  for(i in gloriosos){
    ordem.push(gloriosos[i])
    var ordem = ordem.concat(combo)
  }
  ordem.push(SalveRainha)
  ordem.push(fim)

  executar(ordem);
}

function misteriosGozosos(){
  apagarTela();
  var ordem = lista;
  for(i in gozosos){
    ordem.push(gozosos[i])
    var ordem = ordem.concat(combo)
  }
  ordem.push(SalveRainha)
  ordem.push(fim)
  executar(ordem);
}

function misteriosDolorosos(){
  apagarTela();
  var ordem = lista;
  for(i in dolorosos){
    ordem.push(dolorosos[i])
    var ordem = ordem.concat(combo)
  }
  ordem.push(SalveRainha)
  ordem.push(fim)
  executar(ordem);
}

function misteriosGloriosos(){
  apagarTela();
  var ordem = lista;
  for(i in gloriosos){
    ordem.push(gloriosos[i])
    var ordem = ordem.concat(combo)
  }
  ordem.push(SalveRainha)
  ordem.push(fim)

  executar(ordem);
}
function misteriosLuminosos(){
  apagarTela();
  var ordem = lista;
  for(i in luminosos){
    ordem.push(luminosos[i])
    var ordem = ordem.concat(combo)
  }
  ordem.push(SalveRainha)

  executar(ordem);
}
//-----funcao apagar a tela inicial---//
function apagarTela(){
  document.getElementById('botoes').style.display = 'none';
  document.querySelector('header').style.display = 'none';
}

//------ execucao da lista e impressao em tela ---//

var c=0
var divBolas = document.getElementById("divBolas")
var tremarias = document.getElementById("tresmarias")
function executar(a){
  
  window.addEventListener('click', Clique);
  contador=0
  var display = document.querySelector('#container')
  function Clique(){
    if(contador === a.length ){
      displau.innerHTML-`<a></a>`
    }
    display.innerHTML = `<h1>${a[contador].title}</h1> <p>${a[contador].content}</p>` ;
    
    if(contador>2&contador<6){
      if(a[contador-1]=== aveMaria){
        document.querySelectorAll('div .tresmarias')[c-1].style.backgroundColor = ' rgb(237, 218, 166)'
      }
      tremarias.style.display="flex";
      var verm = document.querySelectorAll('div .tresmarias')[c]
      verm.style.backgroundColor = 'rgb(203, 182, 117)'
      c++
    }else{
      tremarias.style.display = "none"
      if(a[contador]=== aveMaria){
              if(a[contador-1]=== aveMaria){
                document.querySelectorAll('li div')[c-1].style.backgroundColor = ' rgb(237, 218, 166)'
              }
            divBolas.style.display = "flex"
            var red = document.querySelectorAll('li div')[c]
            red.style.backgroundColor = ' rgb(203, 182, 117)'
            c++
          }else{
              if(a[contador-1]=== aveMaria){
                document.querySelectorAll('li div')[c-1].style.backgroundColor = ' rgb(237, 218, 166)'
              }
            divBolas.style.display = "none"
            c=0
          }
    }
    
    contador++;
}}

function fresh(){
  window.location.reload();
}
