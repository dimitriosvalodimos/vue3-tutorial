<template>
  <form
    class="create-twoot-panel"
    @submit.prevent="createNewTwoot"
    :class="{ '--exceeded': newTwootCharacterCount > 180 }"
  >
    <label for="newTwoot">
      <strong>new Twoot</strong> ({{ newTwootCharacterCount }}/180)
    </label>
    <textarea
      name="newTwootArea"
      id="newTwoot"
      cols="30"
      rows="4"
      @keypress.enter.prevent="createNewTwoot"
      v-model="state.newTwootContent"
    ></textarea>
    <!--<textarea
      name="newTwootArea"
      id="newTwoot"
      cols="30"
      rows="4"
      v-model="newTwootContent"
    ></textarea>-->
    <div class="user-profile__create-twoot-type">
      <label for="newTwootType"><strong>Type: </strong></label>
      <select
        name="newTwootType"
        id="newTwootType"
        v-model="state.selectedTwootType"
      >
        <!--<select name="newTwootType" id="newTwootType" v-model="selectedTwootType">-->
        <option
          :value="option.value"
          v-for="(option, idx) in state.twootTypes"
          :key="idx"
        >
          <!--<option
          :value="option.value"
          v-for="(option, idx) in twootTypes"
          :key="idx"
        >-->
          {{ option.name }}
        </option>
      </select>
    </div>
    <button>Twoot!</button>
  </form>
</template>

<!--This is using the Composition API introduced with Vue3-->
<script>
import { reactive, computed } from "vue";

export default {
  name: "CreateTwootPanel",
  setup(props, ctx) {
    const state = reactive({
      newTwootContent: "",
      selectedTwootType: "instant",
      twootTypes: [
        { value: "draft", name: "Draft" },
        { value: "instant", name: "Instant" },
      ],
    });

    const newTwootCharacterCount = computed(() => state.newTwootContent.length);

    function createNewTwoot() {
      if (state.newTwootContent && state.selectedTwootType !== "draft") {
        ctx.emit("add-twoot", state.newTwootContent);
        state.newTwootContent = "";
      }
    }

    return { state, newTwootCharacterCount, createNewTwoot };
  },
  // Computed creates data based on other data.
};
</script>

<!--
<script>
// this is the "old" style of writing components (personally I think I prefer
// this one since you can categorize certain types of data/functions better)
export default {
  name: "CreateTwootPanel",
  data() {
    return {
      newTwootContent: "",
      selectedTwootType: "instant",
      twootTypes: [
        { value: "draft", name: "Draft" },
        { value: "instant", name: "Instant" },
      ],
    };
  },
  computed: {
    newTwootCharacterCount() {
      return this.newTwootContent.length;
    },
  },
  methods: {
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== "draft") {
        this.$emit("add-twoot", this.newTwootContent);
        this.newTwootContent = "";
      }
    },
  },
};
</script>
-->

<style lang="scss" scoped>
.create-twoot-panel {
  padding-top: 20px;
  display: flex;
  text-align: left;
  flex-direction: column;

  &.--exceeded {
    color: red;
    border-color: red;

    button {
      background-color: red;
      border: none;
      color: white;
    }
  }
}
</style>