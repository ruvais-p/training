# ScrollFloat

Reusable GSAP + ScrollTrigger text reveal component kept aside for future use.

File:
- `src/components/ScrollFloat/index.jsx`

What it does:
- Splits a text string into individual character spans
- Animates each character on scroll with opacity, vertical movement, and scale
- Supports staggered reveal timing and configurable scroll trigger points

Props:
- `children`: string text to animate
- `scrollContainerRef`: optional custom scroll container ref
- `containerClassName`: optional class for the outer heading wrapper
- `textClassName`: optional class for the inner text span
- `animationDuration`: animation duration per character group
- `ease`: GSAP ease string
- `scrollStart`: ScrollTrigger start expression
- `scrollEnd`: ScrollTrigger end expression
- `stagger`: stagger delay between characters

Example:

```jsx
import ScrollFloat from "@/components/ScrollFloat";

<ScrollFloat
  animationDuration={1}
  ease="back.inOut(2)"
  scrollStart="center bottom+=50%"
  scrollEnd="bottom bottom-=40%"
  stagger={0.03}
>
  About the Program
</ScrollFloat>
```

Status:
- Documented and preserved
- Not currently used anywhere in the page
