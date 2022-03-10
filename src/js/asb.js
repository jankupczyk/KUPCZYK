(function () {
  const accessKey = 4;

  const btns = {
    btnMaximize: {
      active: true,
      dataAccessibility: "maximize",
      class: "setAccessibility",
      icon: "FontAwesome",
      iconClass: ["fa-solid", "fa-maximize"],
      text: "Maximize",
    },
    btnDarkMode: {
      active: true,
      dataAccessibility: "dark",
      class: "setAccessibility",
      icon: "FontAwesome",
      iconClass: ["fa-solid", "fa-moon"],
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
      text: "TTS (BETA)",
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
      case "maximize":
        body.classList.toggle("accessibility_maximize");
        const window_elem = document.documentElement;
        
        if (window_elem.requestFullscreen) {
          window_elem.requestFullscreen();
        } else if (window_window_elem.webkitRequestFullscreen) {
          window_elem.webkitRequestFullscreen();
        } else if (window_elem.msRequestFullscreen) {
          window_elem.msRequestFullscreen();
        }
        break;
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
        body.classList.toggle("accessibility_mobile");
        window.mobileAndTabletCheck = function () {
          let check = false;
          (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
          return check;
        };
        console.log(`Injected mobile mode... improving optimization ✓`)
        break;
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
          alert("You have reached maximum font size!!!");
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
          alert("You have reached minimum font size!!!");
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
