<script lang="ts">
  import { slide } from "svelte/transition";
  import routes from "../routes.json";
  import { route, showNavFullScreen } from "../store";
  import A from "./A.svelte";
  import { onMount } from "svelte";

  let { clientHeight = $bindable() } = $props();

  let clientWidth = $state(0);

  const thresholdPx = 600;

  $effect(() => {
    if (clientWidth >= thresholdPx) {
      $showNavFullScreen = false;
    }
  });

  onMount(
    showNavFullScreen.subscribe((show) => {
      if (show) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }),
  );

  const onclick = () => {
    $showNavFullScreen = !$showNavFullScreen;
  };

  const onkeydown = (e: KeyboardEvent) => {
    if (!$showNavFullScreen) return;
    if (e.key === "Escape") {
      e.preventDefault();
      $showNavFullScreen = false;
    }
  };

  const toTitle = (r: string) => r.split(/(?=[A-Z])/).join(" ");
</script>

<svelte:window {onkeydown} />

<nav bind:clientHeight bind:clientWidth>
  {#if clientWidth < thresholdPx}
    <button class="nav-toggle" aria-label="Show navigation menu" {onclick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="4" width="24" height="2" fill="currentColor" />
        <rect y="11" width="24" height="2" fill="currentColor" />
        <rect y="18" width="24" height="2" fill="currentColor" />
      </svg>
    </button>
    {#if $showNavFullScreen}
      <div
        transition:slide={{ axis: "x" }}
        class="nav-fullscreen"
        style="padding-top:{clientHeight}px"
      >
        <button
          class="nav-fullscreen-close"
          aria-label="Dismiss navigation menu"
          {onclick}
        >
          <svg
            class=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4"
              y1="4"
              x2="20"
              y2="20"
              stroke="currentColor"
              stroke-width="2"
            />
            <line
              x1="20"
              y1="4"
              x2="4"
              y2="20"
              stroke="currentColor"
              stroke-width="2"
            />
          </svg>
        </button>

        <ol>
          {#each routes as r}
            {@const current = r === $route}
            {@const title = toTitle(r)}
            <li>
              <A href="#{r}" on:click={() => ($showNavFullScreen = false)}
                ><span class:current>{title}</span></A
              >
            </li>
          {/each}
        </ol>
      </div>
    {/if}
  {:else}
    <ol>
      {#each routes as r}
        {@const current = r === $route}
        {@const title = toTitle(r)}
        <li><A href="#{r}"><span class:current>{title}</span></A></li>
      {/each}
    </ol>
  {/if}
</nav>

<style lang="scss">
  nav {
    position: fixed;
    width: 100%;
    padding: 1rem;
    background-color: #f5f7fa; // a very light bluish-gray
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    .nav-toggle {
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nav-fullscreen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 1rem;

      .nav-fullscreen-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        cursor: pointer;
      }

      > ol {
        > li {
          span {
            text-transform: uppercase;
            font-size: 0.875rem;

            &.current {
              font-weight: bold;
              text-decoration: underline;
              text-underline-offset: 4px;
              text-decoration-thickness: 2px;
            }
          }
        }
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    }

    > ol {
      > li {
        span {
          text-transform: uppercase;
          font-size: 0.875rem;

          &.current {
            font-weight: bold;
            text-decoration: underline;
            text-underline-offset: 4px;
            text-decoration-thickness: 2px;
          }
        }
      }
      display: flex;
      gap: 1rem;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }
</style>
