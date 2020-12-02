<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username }}</h1>
      <div v-if="user.isAdmin" class="user-profile__admin-badge">Admin</div>
      <div class="user-profile__follower-count">
        <strong>Followers:</strong> {{ followers }}
      </div>
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem
        v-for="twoot in user.twoots"
        :key="twoot.id"
        :username="user.username"
        :twoot="twoot"
        @favorite="toggleFavorite"
      ></TwootItem>
    </div>
  </div>
</template>

<script>
import TwootItem from "./TwootItem";

export default {
  name: "UserProfile",
  // which other components are being used inside this component
  components: { TwootItem },
  // define variables or general data to use in this component
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: "_testUser",
        firstName: "test",
        lastName: "User",
        email: "testuser@test.user",
        isAdmin: true,
        twoots: [
          { id: 1, content: "Twooter is amazing" },
          { id: 2, content: "Check out my website" },
        ],
      },
    };
  },
  // watch a datapoint and react based on the change
  watch: {
    followers(newFollowCount, oldFollowCount) {
      if (oldFollowCount < newFollowCount) {
        console.log(`${this.user.username} has gained a follower`);
      }
    },
  },
  // Computed creates data based on other data.
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
    newTwootCharacterCount() {
      return this.newTwootContent.length;
    },
  },
  // define functions that can be used by this component
  methods: {
    followUser() {
      this.followers++;
    },
    toggleFavorite(id) {
      console.log(`Favo-ed twoot: ${id}`);
    },
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== "draft") {
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwootContent,
        });
        this.newTwootContent = "";
      }
    },
  },
  // lifecicle functions, run on component creation (there is also unmounted, created etc.)
  mounted() {
    this.followUser();
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  /* width: 100%; */
  grid-gap: 50px;
  padding: 50px 5%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;

    h1 {
      margin: 0;
    }

    .user-profile__admin-badge {
      background: purple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }

    .user-profile__follower-count {
      text-align: left;
    }

    .user-profile__create-twoot {
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
  }

  .user-profile__twoots-wrapper {
    display: grid;
    grid-gap: 10px;
  }
}
</style>