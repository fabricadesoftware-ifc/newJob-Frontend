<template>
  <div id="contactForm" class="m-t-30">
    <div class="columns is-centered">
      <div class="column is-6">
        <div class="box">
          <div class="container">
            <h2 class="title">{{ title }}</h2>
            <b-field label="Name">
              <b-input placeholder="Please enter your name"></b-input>
            </b-field>
            <b-field label="Email">
              <b-input
                type="email"
                placeholder="Please enter your Email"
              ></b-input>
            </b-field>
            <b-field label="Subject">
              <b-input placeholder="Please enter your Subject"></b-input>
            </b-field>
            <div class="field">
              <strong><label for="content">Message</label></strong>
              <div class="control">
                <textarea
                  class="input"
                  placeholder="Enter the message here"
                ></textarea>

                <button class="button is-primary mt-3">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    title: String
  }
}
</script>

<style>
.m-t-30 {
  margin-top: 30px;
}
</style>
