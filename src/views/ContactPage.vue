<template>
  <s-layout>
    <template v-slot:content>
      <s-header>
        <template v-slot:content>
          <s-link class="ml-auto" to="/">
            <template v-slot:text>
              Back
            </template>
          </s-link>
        </template>
      </s-header>
      <main class="my-auto">
        <section class="py-8">
          <div class="container">
            <form action="" class="max-w-[424px] mx-auto">
              <h1 class="mb-6 first:mb-10 text-white text-5xl font-normal leading-tight">
                Feedback
              </h1>
              <div class="mb-6 last:mb-0">
                <span class="mb-2 block text-white text-base font-normal leading-tight">
                  Last name
                </span>
                <s-form-field v-model="userName" type="text" name="user_name"/>
              </div>
              <div class="mb-6 last:mb-0">
                <span class="mb-2 block text-white text-base font-normal leading-tight">
                  Phone or E-mail
                </span>
                <s-form-field v-model="userEmail" type="text" name="user_email"/>
              </div>
              <s-button type="submit" class="mb-6 last:mb-0 last:mt-2">
                <template v-slot:text>
                  Send
                </template>
              </s-button>
            </form>
          </div>
        </section>
      </main>
    </template>
  </s-layout>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      userEmail: ''
    }
  }
}
</script>

<style>

</style>