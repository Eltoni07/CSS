// script.js

function showCssContent() {
    const cssContent = document.getElementById('css-content');
    const designContent = document.getElementById('dizajni-css-content');
    
    cssContent.style.display = 'block';
    designContent.style.display = 'none';
  
    cssContent.innerHTML = `
      <p>CSS, ose Cascading Style Sheets, është një gjuhë programimi stilimi që përdoret për të dizajnuar dhe përshtatur pamjen e dokumenteve të hypura në internet (HTML ose XML). Kjo përfshin ngjyrat, fontet, distancat, madhësitë, dhe aspekte të tjera të paraqitjes së faqes.</p>
      <p>Ajo lejon dizajnerët dhe zhvilluesit të kontrollojnë ngjyrat, fontet, distancat, dhe stilizimet e tjera të një faqeje.</p>
      <p>Historia e CSS fillon me propozimin e parë nga Hakon Wium Lie më 10 tetor 1994.</p>
      <p>Me kalimin e kohës, W3C ka shtuar dhe përmirësuar karakteristikat e CSS përmes versioneve të ndryshme.</p>
      <p> CSS mund të përdoret nga lexuesit e faqeve të rrjetit të caktojnë ngjyrën, stilet e shkronjave, planimetrin ose layout, dhe pamje të tjera të prezantimit të dokumentit. Është kryesisht i projektuar për të bërë të mundur ndarjen e përmbajtes së faqeve (e shkruajtur në HTML, ose një gjuhë markup të ngjashme) nga prezantimi i dokumentit (i shkruar në CSS). Kjo ndarje lehtëson përdorimin, jep më shumë fleksibilitet dhe kontroll në specifikimin e karakteristikave të prezentimit, dhe zvogëlon ndërlikimin dhe ripërsëritjen e përmbajtjes strukturale.</p>
      
    `;
  }
  
  function showDesignContent() {
    const designContent = document.getElementById('dizajni-css-content');
    const cssContent = document.getElementById('css-content');
  
    designContent.style.display = 'block';
    cssContent.style.display = 'none';
  
    designContent.innerHTML = `
      <p>Në CSS ekzistojnë tri lloje të stileve:</p>
      <ol>
        <li>Stili rendor (inline) - stil që vlen vetëm për një element të etiketës së HTML-it.</li>
        <li>Stili i ngulitur (embedded) - stil që vlen vetëm për elementet e një faqeje në të cilën përdoren.</li>
        <li>Stili i lidhur (linked) - stil që vlen për elementet nga faqet e lidhura me linkun e stileve të caktuara.</li>
      </ol>
      <p>Marginat dhe Padding: Përdorni margin dhe padding për të bërë dizajnin e faqes tuaj më tërheqës. Përdorni margin për të vendosur hapësirat midis elementëve dhe padding për të përcaktuar hapësirat brenda elementëve.</p>

      <p>Efektet Hover: Shtoni efekte hover për elementët kyçë. Për shembull, kur vizitorët mbajnë mausin mbi një buton ose link, mund të ndryshoni ngjyrën e tekstit ose të shtoni një animacion të thjeshtë për të bërë interaktivitetin e faqes.</p>
      
      <p>Imazhet dhe Multimedia: Përdorni imazhe dhe media për të bërë faqen më interesante. Përdorni CSS për të bërë të sigurt që dimensionet dhe vendndodhja e tyre janë të përshtatshme.</p>
      
      <p> Rregullimi i pozicionimit: Përdorni CSS për të kontrolluar pozicionimin e elementëve në faqe. Mund të përdorni position, float, dhe flexbox për të rregulluar vendndodhjen dhe organizimin e elementëve.</p>
    `;
  }
