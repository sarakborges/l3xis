<style src="./LoginForm.style.scss" lang="sass" scoped />

<script setup lang="ts">
import AuthApi from '@/Apis/Auth.api'

import { HOME } from '@/Utils/Router/Routes.ts'
import router from '@/Utils/Router/Router'

import { LOGIN_TEXTS } from '@/Utils/Texts/Login.texts.ts'

import Text from '@/Components/Text/Text.component.vue'
import Link from '@/Components/Link/Link.component.vue'
import Button from '@/Components/Button/Button.component.vue'
import Input from '@/Components/Input/Input.component.vue'

const formName = 'login-form'

const doLogin = async (e: Event) => {
  e.preventDefault()

  const form = e.target as HTMLFormElement
  const formData = new FormData(form)

  const loginReq = await AuthApi.doLogin({
    username: String(formData.get('username')),
    password: String(formData.get('password'))
  })

  if (loginReq) {
    router.push({ name: HOME.name })
    return
  }
}
</script>

<template>
  <main class="login_form-wrapper">
    <header>
      <Text as="h2">{{ LOGIN_TEXTS.TITLE }}</Text>
    </header>

    <form :id="formName" :onSubmit="doLogin">
      <Input name="username" :placeholder="LOGIN_TEXTS.FORM.USERNAME" />
      <Input
        type="password"
        name="password"
        :placeholder="LOGIN_TEXTS.FORM.PASSWORD"
      />
    </form>

    <section class="login-buttons">
      <Button :form="formName" type="submit">{{ LOGIN_TEXTS.CTA }}</Button>
      <Button secondary>{{ LOGIN_TEXTS.NO_ACCOUNT }}</Button>
    </section>

    <footer>
      <Link :name="HOME.name">{{ LOGIN_TEXTS.GO_BACK }}</Link>
    </footer>
  </main>
</template>
