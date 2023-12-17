// script.js

function typeOutHtml(element, html, speed) {
  return new Promise((resolve) => {
    let i = 0;
    const container = document.createElement('div');
    element.appendChild(container);

    const interval = setInterval(() => {
      container.innerHTML = html.substr(0, i);
      i++;

      if (i > html.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}



async function showCssContent() {
  const cssContent = document.getElementById('css-content');
  const designContent = document.getElementById('dizajni-css-content');
  const webfaqetContent = document.getElementById('webfaqet-content');
  const rendesiaCSSContent = document.getElementById('rendesia-css-content');
  const pseCssContent = document.getElementById('pse-css-content');
  const buttons = document.querySelectorAll('nav button');

  // Disable buttons during typing
  buttons.forEach((button) => (button.disabled = true));

  cssContent.style.display = 'block';
  designContent.style.display = 'none';
  webfaqetContent.style.display = 'none';
  rendesiaCSSContent.style.display = 'none';
  pseCssContent.style.display = 'none';

  cssContent.innerHTML = '';
  await typeOutHtml(
    cssContent,
    `
    <p>---CSS, ose Cascading Style Sheets, është një gjuhë programimi stilimi që përdoret për të dizajnuar dhe përshtatur pamjen</p>
    <p> e dokumenteve të hypura në internet (HTML ose XML). Kjo përfshin ngjyrat, fontet, distancat, madhësitë, dhe aspekte të tjera të paraqitjes së faqes.</p>
    <p>---Ajo lejon dizajnerët dhe zhvilluesit të kontrollojnë ngjyrat, fontet, distancat, dhe stilizimet e tjera të një faqeje.</p>
    <p>---Historia e CSS fillon me propozimin e parë nga Hakon Wium Lie më 10 tetor 1994.</p>
    <p>---Me kalimin e kohës, W3C ka shtuar dhe përmirësuar karakteristikat e CSS përmes versioneve të ndryshme.</p>
    <p> ---CSS mund të përdoret nga lexuesit e faqeve të rrjetit të caktojnë ngjyrën, stilet e shkronjave, planimetrin ose layout, dhe pamje të tjera</p>
    <p> të prezantimit të dokumentit. Është kryesisht i projektuar për të bërë të mundur ndarjen e përmbajtes së faqeve (e shkruajtur në HTML, ose një gjuhë</p>
    <p>  markup të ngjashme) nga prezantimi i dokumentit (i shkruar në CSS). Kjo ndarje lehtëson përdorimin, jep më shumë fleksibilitet dhe kontroll në specifikimin</p>
    <p>  e karakteristikave të prezentimit, dhe zvogëlon ndërlikimin dhe ripërsëritjen e përmbajtjes strukturale.</p>
    `,
    11
  );

  // Enable buttons after typing
  buttons.forEach((button) => (button.disabled = false));
}

async function showDesignContent() {
  const designContent = document.getElementById('dizajni-css-content');
  const cssContent = document.getElementById('css-content');
  const webfaqetContent = document.getElementById('webfaqet-content');
  const rendesiaCSSContent = document.getElementById('rendesia-css-content');
  const pseCssContent = document.getElementById('pse-css-content');
  const buttons = document.querySelectorAll('nav button');

  // Disable buttons during typing
  buttons.forEach((button) => (button.disabled = true));

  designContent.style.display = 'block';
  cssContent.style.display = 'none';
  webfaqetContent.style.display = 'none';
  rendesiaCSSContent.style.display = 'none';
  pseCssContent.style.display = 'none';

  designContent.innerHTML = '';
  await typeOutHtml(
    designContent,
    `
    <p>---Në CSS ekzistojnë tri lloje të stileve:</p>
    <ol>
      <li>Stili rendor (inline) - stil që vlen vetëm për një element të etiketës së HTML-it.</li>
      <li>Stili i ngulitur (embedded) - stil që vlen vetëm për elementet e një faqeje në të cilën përdoren.</li>
      <li>Stili i lidhur (linked) - stil që vlen për elementet nga faqet e lidhura me linkun e stileve të caktuara.</li>
    </ol>
    <p>---Marginat dhe Padding: Përdorni margin dhe padding për të bërë dizajnin e faqes tuaj më tërheqës. Përdorni margin për të vendosur hapësirat midis elementëve</p>
    <p>dhe padding për të përcaktuar hapësirat brenda elementëve.</p>
    <p> </p>
    <p>---Efektet Hover: Shtoni efekte hover për elementët kyçë. Për shembull, kur vizitorët mbajnë mausin mbi një buton ose link, mund të ndryshoni ngjyrën e tekstit ose të shtoni një animacion të thjeshtë për të bërë interaktivitetin e faqes.</p>
    <p> </p>
    <p>---Imazhet dhe Multimedia: Përdorni imazhe dhe media për të bërë faqen më interesante. Përdorni CSS për të bërë të sigurt që dimensionet dhe vendndodhja e tyre janë të përshtatshme.</p>
    <p> </p>
    <p> ---Rregullimi i pozicionimit: Përdorni CSS për të kontrolluar pozicionimin e elementëve në faqe. Mund të përdorni position, float, dhe flexbox për të rregulluar</p>
    <p> vendndodhjen dhe organizimin e elementëve.Kjo mund te perdoret per tituj,paragraf,dhe teskte tjera te ndryshme .</p>
    <p> </p>
    `,
    9
  );

  // Enable buttons after typing
  buttons.forEach((button) => (button.disabled = false));
}

async function showWebfaqetContent() {
  const webfaqetContent = document.getElementById('webfaqet-content');
  const cssContent = document.getElementById('css-content');
  const designContent = document.getElementById('dizajni-css-content');
  const rendesiaCSSContent = document.getElementById('rendesia-css-content');
  const pseCssContent = document.getElementById('pse-css-content');
  const buttons = document.querySelectorAll('nav button');

  // Disable buttons during typing
  buttons.forEach((button) => (button.disabled = true));

  webfaqetContent.style.display = 'block';
  cssContent.style.display = 'none';
  designContent.style.display = 'none';
  rendesiaCSSContent.style.display = 'none';
  pseCssContent.style.display = 'none';

  webfaqetContent.innerHTML = '';
  await typeOutHtml(
    webfaqetContent,
    `
    <p>Krijimi i webfaqeve është një proces i kompleksuar që përfshin disa hapa të rëndësishëm si:</p>
    <ol>
      <li>Përcaktimi i qëllimit dhe audienca e faqes.</li>
      <li>Zgjedhja e teknologjisë së përdorur (HTML, CSS, JavaScript, etc.).</li>
      <li>Dizajnimi i faqes duke përdorur stilizimet dhe pozicionimin e elementëve me CSS.</li>
    </ol>
    <p>---Ne nje webfaqe perdoren shume gjuhe programuese, 2 qe perdoren me se shumti jane HTML dhe CSS,</p>
    <p>---Keto dy gjuhe perdoren perafersisht ne cdo webfaqe, HTML ose Hypertext Markup Language perdoret per te krijuar</p>
    <p>webfaqen dhe per te krijuar strukturen e nje webfaqe duke perfshire tituj, paragrafe, imazhe, hiperlidhje etj.</p>
    <p>---Kurse ne anen tjeter, CSS ose Cascading Style Sheets perdoren per te krijuar pamjen ose grafiken qe shihet ne webfaqe</p>
    <p> me ane te shfletuesit. Pra, me ane te CSS ne krijojme THEME ose tema te ndryshme te webfaqeve dhe e ndryshojme pamjen.</p>
    `,
    11
  );

  // Enable buttons after typing
  buttons.forEach((button) => (button.disabled = false));
}

function showRendesiaCSSContent() {
  const rendesiaCSSContent = document.getElementById('rendesia-css-content');
  const cssContent = document.getElementById('css-content');
  const designContent = document.getElementById('dizajni-css-content');
  const webfaqetContent = document.getElementById('webfaqet-content');
  const pseCssContent = document.getElementById('pse-css-content');

  rendesiaCSSContent.style.display = 'block';
  cssContent.style.display = 'none';
  designContent.style.display = 'none';
  webfaqetContent.style.display = 'none';
  pseCssContent.style.display = 'none';

  rendesiaCSSContent.innerHTML = `
    <p>Per te shikuar rendesine e CSS ne webfaqe, le te shikojme se si duket kjo webfaqe pa CSS!!</p>
    <h1>---------------------------------------------------------KLIKO BUTTONIN ME POSHTE--------------------------------------------------------------</h1>
    <button id="toggle-css-btn" onclick="toggleCSS()">CSS OFF</button>
  `;
}

function toggleCSS() {
  const styleSheet = document.styleSheets[0]; // Assumes the first stylesheet, adjust if needed
  const toggleBtn = document.getElementById('toggle-css-btn');

  if (styleSheet.disabled) {
    styleSheet.disabled = false;
    toggleBtn.textContent = 'CSS ON';
  } else {
    styleSheet.disabled = true;
    toggleBtn.textContent = 'CSS OFF';
  }
}
