const persons = [
  {
    name: "Ansh Gujral",
    photo: "images/team/ansh.jpg",
    title: "General Secretary",
    social: {
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Tathagat Thapliyal",
    photo: "images/team/piyush.jpeg",
    title: "Developer",
    social: {
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Tanmay",
    photo: "images/team/tanmay.jpg",
    title: "Developer",
    social: {
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Piyush Aggarwal",
    photo: "images/team/piyush.jpeg",
    title: "Web Developer",
    social: {
      github: "https://github.com/piyushagru",
      linkedin: "https://www.linkedin.com/in/agru/"
    }
  },
  {
    name: "Harkirat",
    photo: "images/team/piyush.jpeg",
    title: "Developer",
    social: {
      github: "#",
      linkedin: "#"
    },
    get social() {
      return this._social;
    },
    set social(value) {
      this._social = value;
    },
  },
  {
    name: "Sirish",
    photo: "images/team/sirish.jpg",
    title: "Developer",
    social: {
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Sarthak",
    photo: "images/team/sarthak.jpg",
    title: "Developer",
    social: {
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Anmol",
    photo: "images/team/piyush.jpeg",
    title: "Developer",
    social: {
      github: "#",
      linkedin: "#"
    }
  }
];

const app = new Vue({
  el: "#app",
  data() {
    return {
      persons: persons,
      selectedPersonIndex: null,
      isSelected: false,
      selectedPerson: null,
      inlineStyles: null,
      isReady: false,
      isOk: false,
      selectedPersonData: {
        name: null,
        title: null,
        photo: null,
        social: {
          github: null,
          linkedin: null
        }
      }
    };
  },
  methods: {
    selectPerson(index, el) {
      if (!this.isOk) {
        this.selectedPersonIndex = index;
        this.isSelected = true;
        el.target.parentElement.className == "person-details"
          ? (this.selectedPerson = el.target.parentElement.parentElement)
          : (this.selectedPerson = el.target.parentElement);

        this.selectedPerson.classList.add("person-selected");
        this.selectedPerson.setAttribute(
          "style",
          `width:${this.selectedPerson.offsetWidth}px;`
        );
        this.selectedPersonData = this.persons[index];
        window.setTimeout(() => {
          this.inlineStyles = `width:${this.selectedPerson
            .offsetWidth}px;height:${this.selectedPerson
            .offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this
            .selectedPerson.offsetTop}px;position:fixed`;
          this.selectedPerson.setAttribute("style", this.inlineStyles);
        }, 400);
        window.setTimeout(() => {
          this.isReady = true;
          this.isOk = true;
        }, 420);
      } else {
        this.reset();
      }
    },
    reset() {
      this.isReady = false;
      window.setTimeout(() => {
        this.selectedPerson.classList.add("person-back");
      }, 280);
      window.setTimeout(() => {
        this.selectedPerson.setAttribute("style", "");
      }, 340);
      window.setTimeout(() => {
        this.isSelected = false;
        this.selectedPerson.classList.remove("person-back", "person-selected");
        this.isOk = false;
      }, 400);
    }
  }
});