(function () {
  const accessKey = 4;

  const btns = {
    btnHighContrast: {
      active: true,
      dataAccessibility: "contrast",
      class: "setAccessibility",
      icon: "FontAwesome",
      iconClass: ["fa", "fa-barcode"],
      text: "High Contrast",
    },
    btnDarkMode: {
      active: true,
      dataAccessibility: "dark",
      class: "setAccessibility",
      icon: "FontAwesome",
      iconClass: ["fa", "fa-moon-o"],
      text: "Dark Mode",
    },
    btnIncFont: {
      active: true,
      dataAccessibility: "incFont",
      class: "setAccessibility",
      icon: "A+",
      iconClass: "",
      text: "Increase Font",
    },
    btnOriFont: {
      active: true,
      dataAccessibility: "oriFont",
      class: "setAccessibility",
      icon: "Aa",
      iconClass: "",
      text: "Orginal Font",
    },
    btnDecFont: {
      active: true,
      dataAccessibility: "decFont",
      class: "setAccessibility",
      icon: "A-",
      iconClass: "",
      text: "Decrease Font",
    },
    btnMarkerLine: {
      active: true,
      dataAccessibility: "markerLine",
      class: "setAccessibility",
      icon: "FontAwesome",
      iconClass: ["fa", "fa-bookmark"],
      text: "Marker Line",
    },
    btnReadingLine: {
      active: true,
      dataAccessibility: "readingLine",
      class: "setAccessibility",
      icon: "FontAwesome",
      iconClass: ["fa", "fa-bookmark"],
      text: "Reading Line",
    },
    btnLinks: {
      active: true,
      dataAccessibility: "links",
      class: "setAccessibility",
      icon: "FontAwesome",
      iconClass: ["fa", "fa-underline"],
      text: "Underline",
    },
    btnReset: {
      active: true,
      dataAccessibility: "reset",
      class: "setAccessibility",
      icon: "FontAwesome",
      iconClass: ["fa", "fa-undo"],
      text: "RESET",
    },
    btnTts: {
      active: true,
      dataAccessibility: "tts",
      class: "setAccessibility",
      icon: "FontAwesome",
      iconClass: ["fa", "fa-commenting"],
      text: "Text to speech",
    },
    btnMobile: {
      active: true,
      dataAccessibility: "mobile",
      class: "setAccessibility",
      icon: "FontAwesome",
      iconClass: ["fa", "fa-mobile"],
      text: "Mobile",
    },
  }

  const accessibilityBar = document.createElement("div");
  accessibilityBar.id = "accessibilityBar";
  document.body.insertBefore(accessibilityBar, document.body.firstChild);

  let btnAccessibilityBar;

  function createMainButton() {
    btnAccessibilityBar = document.createElement("button");
    btnAccessibilityBar.id = "universalAccessBtn";
    btnAccessibilityBar.type = "button";
    btnAccessibilityBar.accessKey = accessKey;
    accessibilityBar.appendChild(btnAccessibilityBar);

    const icon = document.createElement("i");
    btnAccessibilityBar.appendChild(icon);
    icon.classList.add("fa", "fa-wheelchair");

    const spanText = document.createElement("span");
    const spanTextNode = document.createTextNode("Accessibility");
    spanText.appendChild(spanTextNode);
    btnAccessibilityBar.appendChild(spanText);
  }
  createMainButton();

  function createButtons(el) {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add(el.class);
    button.setAttribute('data-accessibility', el.dataAccessibility);
    accessibilityBar.appendChild(button);

    const wrapIcon = document.createElement("strong");
    button.appendChild(wrapIcon);

    if (el.icon === "FontAwesome") {
      const icon = document.createElement("i");
      wrapIcon.appendChild(icon);
      icon.classList.add(...el.iconClass);
    } else {
      const textIcon = document.createTextNode(el.icon);
      wrapIcon.appendChild(textIcon);
    }

    const textButton = document.createTextNode(el.text);
    button.appendChild(textButton);
  }
  Object.keys(btns).forEach(function (item) {
    if (btns[item].active) {
      createButtons(btns[item]);
    }
  });


  const html = document.documentElement;
  const body = document.body;
  const btnAccessibility = document.querySelectorAll(".setAccessibility");

  if (btnAccessibilityBar) {
    setTimeout(function () {
      btnAccessibilityBar.classList.add("collapsed");
    }, 2000);
  }

  const readingLine = document.createElement("div");
  readingLine.id = "readingLine";
  document.body.insertBefore(readingLine, document.body.firstChild);

  html.addEventListener("mousemove", function (e) {
    if (body.classList.contains("accessibility_readingLine")) {
      let linePositionY = e.pageY - 20;
      const elReadingLine = document.querySelector("#readingLine");
      elReadingLine.style.top = `${linePositionY}px`;
    }
  });

  const markerLine = document.createElement("div");
  markerLine.id = "markerLine";
  document.body.insertBefore(markerLine, document.body.firstChild);

  html.addEventListener("mousemove", function (e) {
    if (body.classList.contains("accessibility_markerLine")) {
      let linePositionY = e.pageY - 20;
      const elmarkerLine = document.querySelector("#markerLine");
      elmarkerLine.style.top = `${linePositionY}px`;
    }
  });

  btnAccessibilityBar.addEventListener("click", () =>
    accessibilityBar.classList.toggle("active")
  );

  function toggleAccessibilities(action) {
    switch (action) {
      case "contrast":
        window.toggleContrast();
        break;
      case "dark":
        window.toggleDark();
        break;
      case "incFont":
        window.toggleFontSize(action);
        break;
      case "oriFont":
        window.toggleFontSize(action);
        break;
      case "decFont":
        window.toggleFontSize(action);
        break;
      case "readingLine":
        body.classList.toggle("accessibility_readingLine");
        break;
      case "markerLine":    
        body.classList.toggle("accessibility_markerLine");
        break;
      case "links":
        body.classList.toggle("accessibility_links");
        body.style.textDecoration = 'underline';
        break;
      case "mobile":
        location.reload(true);
        viewportid.setAttribute.remove("desktop")
      case "reset":
        Dark.currentState === true ? Dark.setState(false) : null;
        Contrast.currentState === true ? Contrast.setState(false) : null;
        window.toggleFontSize("oriFont");
        body.classList.remove("accessibility_readingLine");
        body.classList.remove("accessibility_markerLine");
        body.classList.remove("accessibility_tts");
        body.classList.remove("accessibility_links");
        body.style.textDecoration = 'none';
        break;
      case "tts":
        body.classList.toggle("accessibility_tts");
        const msg = new SpeechSynthesisUtterance(
          "Hello I'm TTS bot, I'll read the text for you!! [In the navbar: , Kupczyk, HOME, ABOUT, SKILLS, WORK, PROJECTS, SHOP, CV]"
        );
        window.speechSynthesis.speak(msg);
        const msg2 = new SpeechSynthesisUtterance(
          "[In the about section: Name: Jan Kupczyk Profile: DBA, Web Designer, IT specialist, Web Developer Email: kupczyk|contact|gmail.com]"
        );
        window.speechSynthesis.speak(msg2);
        const msg3 = new SpeechSynthesisUtterance(
          "Hi, I'm Janek, I'm twenty years old and I'm an IT specialist, I like to make new friends and work with them, I'm interested in new technologies, travel, politics, sports, and games."
        );
        window.speechSynthesis.speak(msg3);
        const msg4 = new SpeechSynthesisUtterance(
          "[In the skills section: SEO/SEM Knowledge of the basics of SEO and SEM marketing, I also have the certificate Google: Fundamentals of digital marketing]"
        );
        window.speechSynthesis.speak(msg4);
        const msg5 = new SpeechSynthesisUtterance(
          "[In the skills section: WEB DEVELOPMENT General knowledge about building websites, knowledge of languages ​​such as JS, css, html.]"
        );
        window.speechSynthesis.speak(msg5);
        const msg6 = new SpeechSynthesisUtterance(
          "[In the skills section: SQL, AD, WS two thousand sixteen Knowledge of the operation and functioning of SQL and directory services such as Active Directory, I also have passed the EEzirooeight exam]"
        );
        window.speechSynthesis.speak(msg6);
        const msg7 = new SpeechSynthesisUtterance(
          "[In the skills section: NETWORKING Knowledge of general network operation (plas MikroTik), obtained certificates CCNA R&S: Introduction to Networks and CCNA R&S: Routing and Switching Essentials.]"
        );
        window.speechSynthesis.speak(msg7);
        const msg8 = new SpeechSynthesisUtterance(
          "[In the skills section: COMPUTER-LITERATE Computer skills, knowledge of Microsoft Office, Windows ten and CMD.]"
        );
        window.speechSynthesis.speak(msg8);
        const msg9 = new SpeechSynthesisUtterance(
          "[In the skills section: PHP, PYTHON Programming skills in PHP and Python.]"
        );
        window.speechSynthesis.speak(msg9);
        const msg10 = new SpeechSynthesisUtterance(
          "[In the skills section: GRAPHICS, Proficient in the use of graphics programs such as Adobe Photoshop, GIMP, Inkscape.]"
        );
        window.speechSynthesis.speak(msg10);
        const msg11 = new SpeechSynthesisUtterance(
          "[In the skills section: FILMING, Proficient in the use of filmmaking programs such as OBS and DaVinci Resolve.]"
        );
        window.speechSynthesis.speak(msg11);
        const msg12 = new SpeechSynthesisUtterance(
          "[two internships completed, two licenses, three total certificates, one contests won]"
        );
        window.speechSynthesis.speak(msg12);
        const msg13 = new SpeechSynthesisUtterance(
          "[In the work section second internship - Banco Santander, IT Services, Monitoring, Internship, March two thousand and twentieth to April two thousand and twentieth]"
        );
        window.speechSynthesis.speak(msg13);
        const msg14 = new SpeechSynthesisUtterance(
          "[In the work section first internship: Hardsoft-Telekom, Apprentice, Internship, May two thousand and nineteenth to June two thousand and nineteenth]"
        );
        window.speechSynthesis.speak(msg14);
        const msg15 = new SpeechSynthesisUtterance(
          "[Additional freelancer, always]"
        );
        window.speechSynthesis.speak(msg15);
        const msg16 = new SpeechSynthesisUtterance(
          "[Social Media: ]"
        );
        window.speechSynthesis.speak(msg16);
        const msg17 = new SpeechSynthesisUtterance(
          "[Visit my linkedin account]"
        );
        window.speechSynthesis.speak(msg17);
        const msg18 = new SpeechSynthesisUtterance(
          "[Visit my github account]"
        );
        window.speechSynthesis.speak(msg18);
        const msg19 = new SpeechSynthesisUtterance(
          "[Visit my twitter account]"
        );
        window.speechSynthesis.speak(msg19);
        const msg20 = new SpeechSynthesisUtterance(
          "[Visit my instagram account]"
        );
        window.speechSynthesis.speak(msg20);
        const msg21 = new SpeechSynthesisUtterance(
          "[Send me a message]"
        );
        window.speechSynthesis.speak(msg21);
        const msg22 = new SpeechSynthesisUtterance(
          "[Projects]"
        );
        window.speechSynthesis.speak(msg22);
        const msg23 = new SpeechSynthesisUtterance(
          "[All my latest projects] [Search bar]"
        );
        window.speechSynthesis.speak(msg23);
        const msg24 = new SpeechSynthesisUtterance(
          "[This website was viewed]"
        );
        window.speechSynthesis.speak(msg24);
        const msg25 = new SpeechSynthesisUtterance(
          "[Shop] [My humble store] [Custom website; price negotiable] [Custom website; price negotiable] [WordPress website; price negotiable [Currently disabled]]"
        );
        window.speechSynthesis.speak(msg25);
      default:
        break;
    }
    accessibilityBar.classList.toggle("active");
  }
  btnAccessibility.forEach(button =>
    button.addEventListener("click", () =>
      toggleAccessibilities(button.dataset.accessibility)
    )
  );
  const htmlFontSize = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("font-size")
  );
  let FontSize = {
    storage: "fontSizeState",
    cssClass: "fontSize",
    currentState: null,
    check: checkFontSize,
    getState: getFontSizeState,
    setState: setFontSizeState,
    toggle: toggleFontSize,
    updateView: updateViewFontSize
  };

  window.toggleFontSize = function (action) {
    FontSize.toggle(action);
  };

  FontSize.check();

  function checkFontSize() {
    this.updateView();
  }

  function getFontSizeState() {
    return sessionStorage.getItem(this.storage)
      ? sessionStorage.getItem(this.storage)
      : 100;
  }

  function setFontSizeState(state) {
    sessionStorage.setItem(this.storage, "" + state);
    this.currentState = state;
    this.updateView();
  }

  function updateViewFontSize() {
    if (this.currentState === null) this.currentState = this.getState();

    this.currentState
      ? (html.style.fontSize = (this.currentState / 100) * htmlFontSize + "px")
      : "";

    this.currentState
      ? body.classList.add(this.cssClass + this.currentState)
      : "";
  }

  function toggleFontSize(action) {
    switch (action) {
      case "incFont":
        if (parseFloat(this.currentState) < 200) {
          body.classList.remove(this.cssClass + this.currentState);
          this.setState(parseFloat(this.currentState) + 20);
        } else {
          alert("MAX!!!");
        }
        break;
      case "oriFont":
        body.classList.remove(this.cssClass + this.currentState);
        this.setState(100);
        break;
      case "decFont":
        if (parseFloat(this.currentState) > 40) {
          body.classList.remove(this.cssClass + this.currentState);
          this.setState(parseFloat(this.currentState) - 20);
        } else {
          alert("MAX!!!");
        }
        break;
      default:
        break;
    }
  }

  let Contrast = {
    storage: "contrastState",
    cssClass: "contrast",
    currentState: null,
    check: checkContrast,
    getState: getContrastState,
    setState: setContrastState,
    toggle: toggleContrast,
    updateView: updateViewContrast
  };

  window.toggleContrast = function () {
    Contrast.toggle();
  };

  Contrast.check();

  function checkContrast() {
    this.updateView();
  }

  function getContrastState() {
    return sessionStorage.getItem(this.storage) === "true";
  }

  function setContrastState(state) {
    sessionStorage.setItem(this.storage, "" + state);
    this.currentState = state;
    this.updateView();
  }

  function updateViewContrast() {
    if (this.currentState === null) this.currentState = this.getState();

    this.currentState
      ? body.classList.add(this.cssClass)
      : body.classList.remove(this.cssClass);
  }

  function toggleContrast() {
    this.setState(!this.currentState);
    Dark.currentState === true ? Dark.setState(false) : null;
  }

  let Dark = {
    storage: "darkState",
    cssClass: "darkmode",
    currentState: null,
    check: checkDark,
    getState: getDarkState,
    setState: setDarkState,
    toggle: toggleDark,
    updateView: updateViewDark
  };

  window.toggleDark = function () {
    Dark.toggle();
  };

  Dark.check();

  function checkDark() {
    this.updateView();
  }

  function getDarkState() {
    return sessionStorage.getItem(this.storage) === "true";
  }

  function setDarkState(state) {
    sessionStorage.setItem(this.storage, "" + state);
    this.currentState = state;
    this.updateView();
  }

  function updateViewDark() {
    if (this.currentState === null) this.currentState = this.getState();

    this.currentState
      ? body.classList.add(this.cssClass)
      : body.classList.remove(this.cssClass);
  }

  function toggleDark() {
    this.setState(!this.currentState);
    Contrast.currentState === true ? Contrast.setState(false) : null;
  }
})();
