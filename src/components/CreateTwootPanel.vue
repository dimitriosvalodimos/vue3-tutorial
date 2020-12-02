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
      v-model="newTwootContent"
    ></textarea>
    <div class="user-profile__create-twoot-type">
      <label for="newTwootType"><strong>Type: </strong></label>
      <select name="newTwootType" id="newTwootType" v-model="selectedTwootType">
        <option
          :value="option.value"
          v-for="(option, idx) in twootTypes"
          :key="idx"
        >
          {{ option.name }}
        </option>
      </select>
    </div>
    <button>Twoot!</button>
  </form>
</template>

<script>
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
};
</script>