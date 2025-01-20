<template>
  <div class="container">
    <h2 class="typewriter">Work in progress..</h2>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  text-align: center;
}

.typewriter {
  font-family: "Courier New", monospace;
  font-size: 2rem;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}

.typewriter::after {
  content: "|"; /* The blinking cursor */
  position: absolute;
  right: -0.3em; /* Adjusts the position of the cursor */
  top: 0;
  animation: blink 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
