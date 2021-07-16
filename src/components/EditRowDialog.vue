<template>
  <v-dialog
      v-model="showDialog"
      width="800"
      persistent
  >

    <v-card>
      <v-card-title class="headline">
        {{ title }} Bearbeiten
      </v-card-title>

      <v-card-text>
        <v-text-field v-model="editName" label="Name"/>
        <v-card>
          <v-card-title class="headline">
            Frisch
          </v-card-title>
          <v-card-text>
            <v-layout row>
              <v-checkbox
                  label="Jan"
                  :value="1"
                  v-model="freshMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Feb"
                  :value="2"
                  v-model="freshMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Mär"
                  :value="3"
                  v-model="freshMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Apr"
                  :value="4"
                  v-model="freshMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Mai"
                  :value="5"
                  v-model="freshMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Jun"
                  :value="6"
                  v-model="freshMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Jul"
                  :value="7"
                  v-model="freshMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Aug"
                  :value="8"
                  v-model="freshMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Sep"
                  :value="9"
                  v-model="freshMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Okt"
                  :value="10"
                  v-model="freshMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Nov"
                  :value="11"
                  v-model="freshMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Dez"
                  :value="12"
                  v-model="freshMonths"
              >
              </v-checkbox>
            </v-layout>
            <h3>Verlängern/Verkürzen</h3>
            <p>Auf 0 stellen um nichts zu verlängern/verkürzen</p>
            <v-slider
                v-model="freshStartOffset"
                color="#c73a61"
                label="Rechts"
                step="10"
                ticks
                min="-100"
                max="100"
                thumb-label
            ></v-slider>
            <v-slider
                v-model="freshEndOffset"
                color="#c73a61"
                label="Links"
                step="10"
                ticks
                min="-100"
                max="100"
                thumb-label
            ></v-slider>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title class="headline">
            Lagernd
          </v-card-title>
          <v-card-text>
            <v-layout row>
              <v-checkbox
                  label="Jan"
                  :value="1"
                  v-model="storageMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Feb"
                  :value="2"
                  v-model="storageMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Mär"
                  :value="3"
                  v-model="storageMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Apr"
                  :value="4"
                  v-model="storageMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Mai"
                  :value="5"
                  v-model="storageMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Jun"
                  :value="6"
                  v-model="storageMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Jul"
                  :value="7"
                  v-model="storageMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Aug"
                  :value="8"
                  v-model="storageMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Sep"
                  :value="9"
                  v-model="storageMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Okt"
                  :value="10"
                  v-model="storageMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Nov"
                  :value="11"
                  v-model="storageMonths"
              >
              </v-checkbox>
              <v-checkbox
                  label="Dez"
                  :value="12"
                  v-model="storageMonths"
              >
              </v-checkbox>
            </v-layout>
            <h3>Verlängern/Verkürzen</h3>
            <p>Auf 0 stellen um nichts zu verlängern/verkürzen</p>
            <v-slider
                v-model="storageStartOffset"
                color="#ffcf26"
                label="Links"
                ticks
                step="10"
                min="-100"
                max="100"
                thumb-label
            ></v-slider>
            <v-slider
                v-model="storageEndOffset"
                color="#ffcf26"
                label="Rechts"
                step="10"
                ticks
                min="-100"
                max="100"
                thumb-label
            ></v-slider>
          </v-card-text>
        </v-card>


      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            @click="closeDialog"
        >Abbrechen
        </v-btn>
        <v-btn
            color="green"
            @click="saveDialog"
        >
          Übernehmen
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "EditRowDialog",
  props: {
    visible: Boolean,
    title: String,
    editItem: Object,

  },
  data() {
    return {
      showDialog: false,
      editName: "",
      editFresh: [],
      freshMonths: [],
      storageMonths: [],
      storageInvertOffset: false,
      freshInvertOffset: false,
      freshStartOffset: 100,
      freshEndOffset: 100,
      storageStartOffset: 100,
      storageEndOffset: 100,
    }
  },
  methods: {
    closeDialog() {
      this.showDialog = false
      this.$emit('closed')
    },
    saveDialog() {
      this.showDialog = false
      const obj = {
        name: this.editName,
        fresh: {months: this.freshMonths, offsetStart: this.freshStartOffset, offsetEnd: this.freshEndOffset, invertOffset: this.freshInvertOffset},
        storage: {months: this.storageMonths, offsetStart: this.storageStartOffset, offsetEnd: this.storageEndOffset, invertOffset: this.storageInvertOffset}
      }
      this.$emit('saved', obj)
    },
    dialogOpened() {
      this.editName = this.editItem.name

      this.freshMonths = this.editItem.season.fresh.months
      this.freshStartOffset = this.editItem.season.fresh.offsetStart
      this.freshEndOffset = this.editItem.season.fresh.offsetEnd

      this.storageMonths = this.editItem.season.storage.months
      this.storageStartOffset = this.editItem.season.storage.offsetStart
      this.storageEndOffset = this.editItem.season.storage.offsetEnd
    }
  },
  watch: {
    visible: function (newVal) {
      if (newVal) {
        this.dialogOpened()
      }
      this.showDialog = newVal;
    },
  },
}
</script>

<style scoped>

</style>