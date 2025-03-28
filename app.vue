<template>
  <div>
    <NuxtLayout>
      <header>
        <ul>
          <li>
            <NuxtLink to="/">
              <IconsHome></IconsHome> Home
            </NuxtLink>
            <NuxtLink to="/check-it">Check-It</NuxtLink>
            <NuxtLink to="/francoquiz">FrancoQuiz</NuxtLink>
          </li>
        </ul>
      </header>

      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
