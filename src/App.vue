<template>
  <v-app id="app" class="vegetable-calendar">
    <div class="vegetable-calendar__header">
      <img
          class="vegetable-calendar__header-img"
          src="./assets/Logo-DE-H-Outline_Lavender3.png"
      />
      <input class="vegetable-calendar__title--edit hide-on-print" v-if="editingTitle" v-model="title"/>
      <h1 class="vegetable-calendar__header-title" v-else>{{ title }}</h1>
      <button class="hide-on-print" v-on:click="toggleEditTitle()">
        <font-awesome-icon v-if="editingTitle" icon="check"/>
        <font-awesome-icon v-else icon="edit"/>
      </button>
    </div>
    <div class="vegetable-calendar__main">
      <div class="vegetable-calendar__sidebar">
        <img class="vegetable-calendar__sidebar-img vegetable-calendar__sidebar-img--1" src="./assets/APPLE.png"/>
        <img class="vegetable-calendar__sidebar-img vegetable-calendar__sidebar-img--2" src="./assets/fruit2.png"/>
        <img class="vegetable-calendar__sidebar-img vegetable-calendar__sidebar-img--3" src="./assets/BERRY.png"/>
        <img class="vegetable-calendar__sidebar-img vegetable-calendar__sidebar-img--4" src="./assets/lettuce-01.png"/>
        <img class="vegetable-calendar__sidebar-img vegetable-calendar__sidebar-img--5"
             src="./assets/international_dessins_calendrier.png"/>
        <img class="vegetable-calendar__sidebar-img vegetable-calendar__sidebar-img--6" src="./assets/carrot-01.png"/>
        <img class="vegetable-calendar__sidebar-img vegetable-calendar__sidebar-img--7" src="./assets/Rotkohl.png"/>
        <img class="vegetable-calendar__sidebar-img vegetable-calendar__sidebar-img--8" src="./assets/erbse.png"/>
        <img class="vegetable-calendar__sidebar-img vegetable-calendar__sidebar-img--9" src="./assets/herb1.png"/>
      </div>
      <div class="vegetable-calendar__tables">
        <EditableTable
            class="vegetable-calendar__table"
            name="Früchte"
            :rows="fruits"
            v-on:table-updated="fruitsUpdated"
        />
        <EditableTable class="vegetable-calendar__table" name="Gemüse" :rows="vegetables"
                       v-on:table-updated="vegetablesUpdated"/>
        <EditableTable class="vegetable-calendar__table" name="Kräuter" :rows="herbs"
                       v-on:table-updated="herbsUpdated"/>
        <div class="vegetable-calendar__footer">
            <div class="vegetable-calendar__legend-container">
              <div class="vegetable-calendar__legend-icon vegetable-calendar__legend-icon--fresh"></div><div class="vegetable-calendar__legend">&nbsp;Frisch</div>
              <div class="vegetable-calendar__legend-icon vegetable-calendar__legend-icon--storage"></div><div class="vegetable-calendar__legend">&nbsp;Lagernd</div>
            </div>
          <div class="vegetable-calendar__additional-information-container">
          <input class="vegetable-calendar__title--edit hide-on-print" v-if="editingAdditionalInformation" v-model="additionalInformation"/>
          <div class="vegetable-calendar__additional-information" v-else>{{ additionalInformation }}</div>
              <button class="hide-on-print" v-on:click="toggleEditAdditionalInformation()">
                <font-awesome-icon v-if="editingAdditionalInformation" icon="check"/>
                <font-awesome-icon v-else icon="edit"/>
              </button>
            </div>
        </div>
      </div>

    </div>
      <div class="hide-on-print">
        <div>
          <a
              class="hide-on-print"
              :href="dataAsJson"
              download="saisonkalender-daten.json"
          >
            <font-awesome-icon icon="download"/>
            Daten exportieren</a
          >
        </div>
        <div>
          <label for="uploadJson">Daten Importieren</label>
          <input
              id="uploadJson"
              type="file"
              @change="importData"
              alt="Saisonkalender Daten hochladen"
              accept=".json"
          />
        </div>
        <a href="docs/index.html" target="_blank">Zur Anleitung</a>
      </div>
  </v-app>
</template>

<script>
import EditableTable from "./components/EditableTable.vue";
import defaultData from "@/assets/saisonkalender-daten.json";

export default {
  name: "App",
  components: {
    EditableTable,
  },
  data: function () {
    return {
      title: "",
      vegetables: [],
      fruits: [],
      herbs: [],
      additionalInformation: "",
      editingTitle: false,
      editingAdditionalInformation: false,
      defaultData: defaultData,
    };
  },
  created() {
    this.title = defaultData.title;
    this.additionalInformation = defaultData.additionalInformation;
    this.vegetables = defaultData.vegetables;
    this.herbs = defaultData.herbs;
    this.fruits = defaultData.fruits;
    console.log("Total row size: " + (this.vegetables.length + this.herbs.length + this.fruits.length))
  },
  computed: {
    dataAsJson() {
      let completeObject = {
        title: this.title,
        vegetables: this.vegetables,
        fruits: this.fruits,
        herbs: this.herbs,
        additionalInformation: this.additionalInformation,
      };
      return URL.createObjectURL(
          new Blob([JSON.stringify(completeObject)], {
            type: "text/plain;charset=utf-8",
          })
      );
    },
  },
  methods: {
    toggleEditTitle() {
      if (this.editingTitle) {
        this.editingTitle = false;
      } else {
        this.editingTitle = true;
      }
    },
    toggleEditAdditionalInformation() {
      if (this.editingAdditionalInformation) {
        this.editingAdditionalInformation = false;
      } else {
        this.editingAdditionalInformation = true;
      }
    },
    vegetablesUpdated(rows) {
      this.vegetables = rows;
    },
    fruitsUpdated(rows) {
      this.fruits = rows;
    },
    herbsUpdated(rows) {
      this.herbs = rows;
    },
    async importData(event) {
      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        const fileDataAsJson = JSON.parse(event.target.result);
        this.title = "";
        this.additionalInformation = "";
        this.vegetables = [];
        this.fruits = [];
        this.herbs = [];

        this.title = fileDataAsJson.title;
        this.additionalInformation = fileDataAsJson.additionalInformation;
        this.vegetables = fileDataAsJson.vegetables;
        this.fruits = fileDataAsJson.fruits;
        this.herbs = fileDataAsJson.herbs;
      });
      reader.readAsText(event.target.files[0]);
    },
  },
};
</script>

<style lang="scss">
.vegetable-calendar {
  &__header-img {
    height: 60px;
  }

  &__header-title {
    color: #262647;
    font-family: "Source Sans Pro Semibold", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    padding-bottom: 10px;
  }

  &__main {
    display: flex;
    padding-right: 5%;
  }

  &__sidebar {
    width: 120px;
    overflow: hidden;

    &-img {
      height: 100px;

      &--1, &--2, &--3, &--4 {
        height: 80px;
        margin-bottom: 10px;
      }

      &--6 {
        margin-top: -20px;
        margin-bottom: -20px;
      }
    }

  }

  &__title--edit {
    display: block;
    width: 50%;
    margin: auto;
    border: 1px solid black;
  }

  &__footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 5px;
  }

  &__legend-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__additional-information {
    color: #262647;
    font-family: "Source Sans Pro Semibold", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    &-container {
      flex-grow: 1;
      text-align: right;
    }
  }

  &__legend {
    color: #262647;
    font-family: "League Gothic", sans-serif;
    font-style: normal;
    font-weight: normal;
    text-transform: uppercase;
    padding-right: 10px;
    padding-left: 2px;
  }

  &__legend-icon {
      height: 25px;
      width: 25px;

      &--fresh {
        background-color: #c73a61;
      }

      &--storage {
        background-color: #ffcf26;
      }
    }


&__tables {
  flex-grow: 1;
}

&__table {
  padding-bottom: 10px;
}

}

@media print {
  .hide-on-print {
    display: none;
  }
  body {
    -webkit-print-color-adjust: exact;
  }
}

#app {
  font-family: Georgia, Times New Roman, Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
