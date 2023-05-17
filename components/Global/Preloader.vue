<template>
  <div class="absolute z-50 w-screen flex flex-col h-screen">
    <div
      class="flex-grow flex flex-col justify-center items-center bg-[#101010]"
    >
      <div class="flex flex-col justify-center items-center">
        <img
          src="../../public/assets/images/15.png"
          class="w-3/4 md:w-1/4"
          alt=""
        />
        <div class="relative flex items-center justify-center">
          <h1 class="mr-3 text-5xl font-[200] text-white">loading</h1>
          <div
            class="w-10 h-10 border-4 border-gray-200 rounded-full animate-spin"
          >
            <div class="absolute border-4 border-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style></style>
