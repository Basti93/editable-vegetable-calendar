<template>
  <div>
    <table class="editable-table__table">
      <thead>
      <tr class="editable-table__header-row">
        <th
            class="
              editable-table__header-cell editable-table__header-cell--name
            "
        >
          {{ name }}
        </th>
        <th
            class="
              editable-table__header-cell editable-table__header-cell--month
            "
        >
          Jan
        </th>
        <th
            class="
              editable-table__header-cell editable-table__header-cell--month
            "
        >
          Feb
        </th>
        <th
            class="
              editable-table__header-cell editable-table__header-cell--month
            "
        >
          Mär
        </th>
        <th
            class="
              editable-table__header-cell editable-table__header-cell--month
            "
        >
          Apr
        </th>
        <th
            class="
              editable-table__header-cell editable-table__header-cell--month
            "
        >
          Mai
        </th>
        <th
            class="
              editable-table__header-cell editable-table__header-cell--month
            "
        >
          Jun
        </th>
        <th
            class="
              editable-table__header-cell editable-table__header-cell--month
            "
        >
          Jul
        </th>
        <th
            class="
              editable-table__header-cell editable-table__header-cell--month
            "
        >
          Aug
        </th>
        <th
            class="
              editable-table__header-cell editable-table__header-cell--month
            "
        >
          Sep
        </th>
        <th
            class="
              editable-table__header-cell editable-table__header-cell--month
            "
        >
          Okt
        </th>
        <th
            class="
              editable-table__header-cell editable-table__header-cell--month
            "
        >
          Nov
        </th>
        <th
            class="
              editable-table__header-cell editable-table__header-cell--month
            "
        >
          Dez
        </th>
      </tr>
      </thead>
      <draggable
          v-model="editableRows"
          @start="drag = true"
          @end="onDragEnd"
          tag="tbody"
      >
        <tr v-for="(item, index) in editableRows" :key="index">
          <td class="editable-table__cell editable-table__cell--name">
            {{
              item.name
            }}
            <button class="hide-on-print" v-on:click="editRow(index)">
              <font-awesome-icon icon="edit"/>
            </button
            >
          </td>
          <td class="editable-table__cell">
            <div class="editable-table__season"
                 :class="[getSeasonClass(item, 1), hasNextMonth(item, 1) ? 'editable-table__season--expand-right' : '']"
                 :style="{left: getOffsetLeft(item, 1), right: getOffsetRight(item, 1)}">
            </div>
          </td>
          <td class="editable-table__cell">
            <div class="editable-table__season"
                 :class="[getSeasonClass(item, 2), hasNextMonth(item, 2) ? 'editable-table__season--expand-right' : '', hasPrevMonth(item, 2) ? 'editable-table__season--expand-left' : '']"
                :style="{left: getOffsetLeft(item, 2), right: getOffsetRight(item, 2)}"
            >
            </div>
          </td>
          <td class="editable-table__cell">

            <div class="editable-table__season"
                 :class="[getSeasonClass(item, 3), hasNextMonth(item, 3) ? 'editable-table__season--expand-right' : '', hasPrevMonth(item, 3) ? 'editable-table__season--expand-left' : '']"
                 :style="{left: getOffsetLeft(item, 3), right: getOffsetRight(item, 3)}"></div>
          </td>
          <td class="editable-table__cell">

            <div class="editable-table__season"
                 :class="[getSeasonClass(item, 4), hasNextMonth(item, 4) ? 'editable-table__season--expand-right' : '', hasPrevMonth(item, 4) ? 'editable-table__season--expand-left' : '']"
                 :style="{left: getOffsetLeft(item, 4), right: getOffsetRight(item, 4)}"></div>
          </td>
          <td class="editable-table__cell">

            <div class="editable-table__season"
                 :class="[getSeasonClass(item, 5), hasNextMonth(item, 5) ? 'editable-table__season--expand-right' : '', hasPrevMonth(item, 5) ? 'editable-table__season--expand-left' : '']"
                 :style="{left: getOffsetLeft(item, 5), right: getOffsetRight(item, 5)}"></div>
          </td>
          <td class="editable-table__cell">

            <div class="editable-table__season"
                 :class="[getSeasonClass(item, 6), hasNextMonth(item, 6) ? 'editable-table__season--expand-right' : '', hasPrevMonth(item, 6) ? 'editable-table__season--expand-left' : '']"
                 :style="{left: getOffsetLeft(item, 6), right: getOffsetRight(item, 6)}"></div>
          </td>
          <td class="editable-table__cell">

            <div class="editable-table__season"
                 :class="[getSeasonClass(item, 7), hasNextMonth(item, 7) ? 'editable-table__season--expand-right' : '', hasPrevMonth(item, 7) ? 'editable-table__season--expand-left' : '']"
                 :style="{left: getOffsetLeft(item, 7), right: getOffsetRight(item, 7)}"></div>
          </td>
          <td class="editable-table__cell">

            <div class="editable-table__season"
                 :class="[getSeasonClass(item, 8), hasNextMonth(item, 8) ? 'editable-table__season--expand-right' : '', hasPrevMonth(item, 8) ? 'editable-table__season--expand-left' : '']"
                 :style="{left: getOffsetLeft(item, 8), right: getOffsetRight(item, 8)}"></div>
          </td>
          <td class="editable-table__cell">

            <div class="editable-table__season"
                 :class="[getSeasonClass(item, 9), hasNextMonth(item, 9) ? 'editable-table__season--expand-right' : '', hasPrevMonth(item, 9) ? 'editable-table__season--expand-left' : '']"
                 :style="{left: getOffsetLeft(item, 9), right: getOffsetRight(item, 9)}"></div>
          </td>
          <td class="editable-table__cell">
            <div class="editable-table__season"
                 :class="[getSeasonClass(item, 10), hasNextMonth(item, 10) ? 'editable-table__season--expand-right' : '', hasPrevMonth(item, 10) ? 'editable-table__season--expand-left' : '']"
                 :style="{left: getOffsetLeft(item, 10), right: getOffsetRight(item, 10)}"></div>
          </td>
          <td class="editable-table__cell">

            <div class="editable-table__season"
                 :class="[getSeasonClass(item, 11), hasNextMonth(item, 11) ? 'editable-table__season--expand-right' : '', hasPrevMonth(item, 11) ? 'editable-table__season--expand-left' : '']"
                 :style="{left: getOffsetLeft(item, 11), right: getOffsetRight(item, 11)}"></div>
          </td>
          <td class="editable-table__cell">
            <div class="editable-table__season"
                 :class="[getSeasonClass(item, 12), hasPrevMonth(item, 12) ? 'editable-table__season--expand-left' : '']"
                 :style="{left: getOffsetLeft(item, 12), right: getOffsetRight(item, 12)}"></div>
          </td>
          <td class="hide-on-print">
            <button v-on:click="removeRow(index)">
              <font-awesome-icon icon="trash"/>
            </button>
          </td>
        </tr>

      </draggable>
    </table>
    <button class="hide-on-print" v-on:click="addRow()">
      <font-awesome-icon icon="plus"/>&nbsp;Neue Zeile hinzufügen
    </button>
    <EditRowDialog :visible="showEditRowDialog" :title="name" :edit-item="rowToEdit" v-on:saved="editDialogSaved"
                   v-on:closed="editDialogClosed"/>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import EditRowDialog from "./EditRowDialog";


export default {
  name: "EditableTable",
  components: {
    draggable,
    EditRowDialog
  },
  props: {
    name: String,
    rows: Array,
  },
  data() {
    return {
      editableRows: [],
      dragging: false,
      showEditRowDialog: false,
      rowToEdit: null,
    };
  },
  created() {
    this.editableRows = this.rows;
  },
  methods: {
    removeRow(index) {
      this.editableRows.splice(index, 1);
      this.$emit("table-updated", this.editableRows);
    },
    addRow() {
      this.editableRows.push({name: "Neu", season: {fresh: {months:[]}, storage: {months:[]}}});
      this.$emit("table-updated", this.editableRows);
    },
    editRow(index) {
      this.rowToEdit = this.rows[index]
      this.showEditRowDialog = true
    },
    editDialogClosed() {
      this.rowToEdit = null
      this.showEditRowDialog = false
    },
    editDialogSaved(seasonData) {

      this.rowToEdit.name = seasonData.name
      this.rowToEdit.season.storage = seasonData.storage
      this.rowToEdit.season.fresh = seasonData.fresh

      this.rowToEdit = null
      this.showEditRowDialog = false

      this.$emit("table-updated", this.editableRows);
    },
    onDragEnd() {
      this.dragging = false;
      this.$emit("table-updated", this.editableRows);
    },
    isInSeasonFresh(item, month) {
      return item.season.fresh.months.includes(month)
    },
    isInSeasonStorage(item, month) {
      return item.season.storage.months.includes(month)
    },
    hasPrevMonth(item, month) {
      if (this.isInSeasonFresh(item, month)) {
        return item.season.fresh.months.includes(month - 1);
      } else if (this.isInSeasonStorage(item, month)) {
        return item.season.storage.months.includes(month - 1);
      }
      return false;
    },
    hasNextMonth(item, month) {
      if (this.isInSeasonFresh(item, month)) {
        return item.season.fresh.months.includes(month + 1);
      } else if (this.isInSeasonStorage(item, month)) {
        return item.season.storage.months.includes(month + 1);
      }
      return false;
    },
    isOverYear(item, month) {
      console.log("chec", [1,12].every(m => item.season.storage.months.includes(m)), item.season.storage.months)
      if (this.isInSeasonFresh(item, month) && [1,12].every(m => item.season.fresh.months.includes(m))) {
        return true;
      } else if (this.isInSeasonStorage(item, month) && [1,12].every(m => item.season.storage.months.includes(m))) {
        return true;
      }
      return false;
    },
    getOffsetLeft(item, month) {
      if (this.isInSeasonFresh(item, month) && !this.hasPrevMonth(item, month) && (!this.isOverYear(item, month) || month > 1)) {
        return item.season.fresh.offsetStart + "%"
      } else if (this.isInSeasonStorage(item, month) && !this.hasPrevMonth(item, month) && (!this.isOverYear(item, month) || month > 1)) {
        return item.season.storage.offsetStart + "%"
      }
    },
    getOffsetRight(item, month) {
      if (this.isInSeasonFresh(item, month) && !this.hasNextMonth(item, month) && (!this.isOverYear(item, month) || month < 12)) {
        return item.season.fresh.offsetEnd + "%"
      } else if (this.isInSeasonStorage(item, month) && !this.hasNextMonth(item, month) && (!this.isOverYear(item, month) || month < 12)) {
        return item.season.storage.offsetEnd + "%"
      }
    },
    getSeasonClass(item, month) {
      return this.isInSeasonFresh(item, month) ? 'editable-table__season--fresh' : this.isInSeasonStorage(item, month) ? 'editable-table__season--storage' : '';
    },
  },
  watch: {
    rows: function (newVal) {
      this.editableRows = newVal;
    },
  },
};
</script>

<style scoped lang="scss">
.editable-table {

  &__table {
    border: 1px solid #262647;
    border-collapse: collapse;
    margin-bottom: -4px;
    margin-top: 4px;
    width: 100%;
  }

  &__header-cell {
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: #000000;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #000000;
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #000000;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #000000;
    vertical-align: top;
    padding: 2px;
    text-align: center;

    &--name {
      color: #262647;
      font-family: "League Gothic", sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: normal;
    }

    &--month {
      color: #10816d;
      font-family: "League Gothic", sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: normal;
    }
  }

  &__season {
    height: 6px;
    position: absolute;
    left: 0;
    right: 0;

    &--fresh {
      top: 10%;
      background-color: #c73a61;
    }

    &--storage {
      background-color: #ffcf26;
    }

    &--expand-right {
      right: -1px;
    }

    &--expand-left {
      left: -1px;
    }
  }

  &__cell {
    position: relative;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: #000000;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #000000;
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #000000;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #000000;
    padding-top: 1px;
    padding-bottom: 1px;
    vertical-align: middle;

    &--name {
      color: #10816d;
      font-family: "Source Sans Pro Semibold", sans-serif;
      font-size: 10px;
      font-style: normal;
      font-weight: 600;
      text-align: left;
      padding-left: 10px;
    }
  }

  &__header-row {
    min-height: 30px;
  }
}
</style>
